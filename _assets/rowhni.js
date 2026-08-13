/* Rowhni site behaviour.
   Progressive enhancement only: every page is complete and readable with
   this file blocked. Nothing here reveals content, and nothing here talks
   to a server. */

(() => {
  "use strict";

  /* ------------------------------------------------------------- theme --
     The initial value is applied by a tiny inline script in <head> to avoid
     a flash. This part only wires up the control. */

  const themeBar = document.querySelector("[data-theme-toggle]");
  if (themeBar) {
    const apply = (choice) => {
      if (choice === "system") {
        delete document.documentElement.dataset.theme;
        localStorage.removeItem("rowhni-theme");
      } else {
        document.documentElement.dataset.theme = choice;
        localStorage.setItem("rowhni-theme", choice);
      }
      themeBar.querySelectorAll("button").forEach((b) => {
        b.setAttribute("aria-pressed", String(b.dataset.themeSet === choice));
      });
    };

    themeBar.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-theme-set]");
      if (btn) apply(btn.dataset.themeSet);
    });

    apply(localStorage.getItem("rowhni-theme") || "system");
    themeBar.dataset.ready = "";
  }

  /* ---------------------------------------------------------- platform --
     Puts the visitor's own store first. Both stores stay visible and stay
     the same size; this only changes order and emphasis. */

  const stores = document.querySelectorAll("[data-stores]");
  if (stores.length) {
    const ua = navigator.userAgent;

    /* Android is checked first and wins outright. The second iOS test below
       exists to catch iPads, which report themselves as desktop Macs and are
       told apart only by having a touchscreen; without the Android guard in
       front, any touch device claiming a Mac platform is mistaken for an
       iPad. */
    const isAndroid = /Android/.test(ua);
    const isIOS =
      !isAndroid &&
      (/iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));

    if (isIOS || isAndroid) {
      const want = isAndroid ? "android" : "ios";
      for (const group of stores) {
        const primary = group.querySelector(`[data-platform="${want}"]`);
        if (primary) {
          primary.dataset.primary = "true";
          group.prepend(primary);
        }
      }
    }
  }

  /* ----------------------------------------------------- contact form --
     Without this, the form still submits normally and Formspree shows its
     own confirmation page. This only keeps the visitor on the page. */

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    const status = contactForm.querySelector("[data-form-status]");
    const submit = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const label = submit.textContent;
      submit.disabled = true;
      submit.textContent = "Sending…";
      status.hidden = true;

      try {
        const res = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(String(res.status));
        contactForm.reset();
        status.textContent = "Thank you. Your message has been sent.";
      } catch {
        status.textContent =
          "That did not go through. Please try again, or reach us through the app's support screen.";
      } finally {
        status.hidden = false;
        submit.disabled = false;
        submit.textContent = label;
      }
    });
  }

  /* ------------------------------------------------------ prayer times --
     A direct implementation of the standard solar-position method used by
     every prayer-time library: mean anomaly and longitude give declination
     and the equation of time, and each prayer is the hour angle at which
     the sun reaches a given altitude.

     This runs entirely in the browser. No coordinates leave the device,
     which is the same guarantee the app makes, demonstrated rather than
     asserted. */

  const table = document.querySelector("[data-times]");
  if (!table) return;

  const D2R = Math.PI / 180;
  const R2D = 180 / Math.PI;
  const sin = (d) => Math.sin(d * D2R);
  const cos = (d) => Math.cos(d * D2R);
  const tan = (d) => Math.tan(d * D2R);
  const asin = (x) => Math.asin(x) * R2D;
  const acos = (x) => Math.acos(x) * R2D;
  const atan2 = (y, x) => Math.atan2(y, x) * R2D;
  const acot = (x) => Math.atan(1 / x) * R2D;

  const wrap = (v, range) => {
    v -= range * Math.floor(v / range);
    return v < 0 ? v + range : v;
  };
  const fixHour = (h) => wrap(h, 24);

  /* Julian day number for a civil date. */
  function julian(y, m, d) {
    if (m <= 2) {
      y -= 1;
      m += 12;
    }
    const a = Math.floor(y / 100);
    const b = 2 - a + Math.floor(a / 4);
    return (
      Math.floor(365.25 * (y + 4716)) +
      Math.floor(30.6001 * (m + 1)) +
      d +
      b -
      1524.5
    );
  }

  /* Declination of the sun and the equation of time, in degrees and hours. */
  function sunPosition(jd) {
    const d = jd - 2451545.0;
    const g = wrap(357.529 + 0.98560028 * d, 360); // mean anomaly
    const q = wrap(280.459 + 0.98564736 * d, 360); // mean longitude
    const l = wrap(q + 1.915 * sin(g) + 0.02 * sin(2 * g), 360); // ecliptic longitude
    const e = 23.439 - 0.00000036 * d; // obliquity of the ecliptic
    const ra = wrap(atan2(cos(e) * sin(l), cos(l)) / 15, 24);
    return {
      declination: asin(sin(e) * sin(l)),
      equationOfTime: q / 15 - ra,
    };
  }

  function makeCalculator(jd, latitude) {
    /* Solar noon, in hours of local mean time. */
    const midDay = (t) => fixHour(12 - sunPosition(jd + t).equationOfTime);

    /* The time at which the sun sits `angle` degrees below the horizon.
       `direction` selects the morning (before noon) or evening branch. */
    const angleTime = (angle, t, direction) => {
      const decl = sunPosition(jd + t).declination;
      const cosH =
        (-sin(angle) - sin(decl) * sin(latitude)) /
        (cos(decl) * cos(latitude));
      /* At high latitudes the sun may never reach the angle at all. */
      if (cosH > 1 || cosH < -1) return NaN;
      const h = acos(cosH) / 15;
      return midDay(t) + (direction === "morning" ? -h : h);
    };

    /* Asr begins when an object's shadow equals its own length times
       `factor`, plus the shadow it cast at noon. */
    const asrTime = (factor, t) => {
      const decl = sunPosition(jd + t).declination;
      const angle = -acot(factor + tan(Math.abs(latitude - decl)));
      return angleTime(angle, t, "evening");
    };

    return { midDay, angleTime, asrTime };
  }

  /* Muslim World League parameters: the most widely used defaults outside
     Saudi Arabia and North America. The app itself offers the other
     conventions; the site states which one it is showing. */
  const METHOD = { fajr: 18, isha: 17, asrFactor: 1, label: "Muslim World League" };

  function prayerTimes(date, latitude, longitude, tzHours) {
    const jd =
      julian(date.getFullYear(), date.getMonth() + 1, date.getDate()) -
      longitude / (15 * 24);
    const c = makeCalculator(jd, latitude);

    /* One refinement pass: each estimate is fed back in, because the sun's
       position changes over the day being solved for. */
    let t = {
      fajr: 5 / 24,
      sunrise: 6 / 24,
      dhuhr: 12 / 24,
      asr: 13 / 24,
      maghrib: 18 / 24,
      isha: 19 / 24,
    };

    for (let i = 0; i < 2; i++) {
      t = {
        fajr: c.angleTime(METHOD.fajr, t.fajr, "morning") / 24,
        sunrise: c.angleTime(0.833, t.sunrise, "morning") / 24,
        dhuhr: c.midDay(t.dhuhr) / 24,
        asr: c.asrTime(METHOD.asrFactor, t.asr) / 24,
        maghrib: c.angleTime(0.833, t.maghrib, "evening") / 24,
        isha: c.angleTime(METHOD.isha, t.isha, "evening") / 24,
      };
    }

    const toLocal = (hoursFraction) => {
      const h = hoursFraction * 24 + tzHours - longitude / 15;
      return Number.isFinite(h) ? fixHour(h) : NaN;
    };

    return {
      fajr: toLocal(t.fajr),
      sunrise: toLocal(t.sunrise),
      dhuhr: toLocal(t.dhuhr) + 1 / 60, // a minute past the zenith
      asr: toLocal(t.asr),
      maghrib: toLocal(t.maghrib),
      isha: toLocal(t.isha),
    };
  }

  /* The UTC offset a given IANA zone has on a given date, in hours.
     Derived from Intl rather than hardcoded, so daylight saving is right. */
  function zoneOffset(date, timeZone) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
      .formatToParts(date)
      .reduce((acc, p) => ((acc[p.type] = p.value), acc), {});
    const asUTC = Date.UTC(
      +parts.year,
      +parts.month - 1,
      +parts.day,
      parts.hour === "24" ? 0 : +parts.hour,
      +parts.minute,
      +parts.second
    );
    return (asUTC - date.getTime()) / 3600000;
  }

  const CITIES = [
    { id: "mecca", name: "Mecca", lat: 21.4225, lon: 39.8262, tz: "Asia/Riyadh" },
    { id: "medina", name: "Medina", lat: 24.4686, lon: 39.6142, tz: "Asia/Riyadh" },
    { id: "istanbul", name: "Istanbul", lat: 41.0082, lon: 28.9784, tz: "Europe/Istanbul" },
    { id: "cairo", name: "Cairo", lat: 30.0444, lon: 31.2357, tz: "Africa/Cairo" },
    { id: "dubai", name: "Dubai", lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai" },
    { id: "karachi", name: "Karachi", lat: 24.8607, lon: 67.0011, tz: "Asia/Karachi" },
    { id: "dhaka", name: "Dhaka", lat: 23.8103, lon: 90.4125, tz: "Asia/Dhaka" },
    { id: "jakarta", name: "Jakarta", lat: -6.2088, lon: 106.8456, tz: "Asia/Jakarta" },
    { id: "kualalumpur", name: "Kuala Lumpur", lat: 3.139, lon: 101.6869, tz: "Asia/Kuala_Lumpur" },
    { id: "london", name: "London", lat: 51.5072, lon: -0.1276, tz: "Europe/London" },
    { id: "berlin", name: "Berlin", lat: 52.52, lon: 13.405, tz: "Europe/Berlin" },
    { id: "paris", name: "Paris", lat: 48.8566, lon: 2.3522, tz: "Europe/Paris" },
    { id: "madrid", name: "Madrid", lat: 40.4168, lon: -3.7038, tz: "Europe/Madrid" },
    { id: "casablanca", name: "Casablanca", lat: 33.5731, lon: -7.5898, tz: "Africa/Casablanca" },
    { id: "lagos", name: "Lagos", lat: 6.5244, lon: 3.3792, tz: "Africa/Lagos" },
    { id: "newyork", name: "New York", lat: 40.7128, lon: -74.006, tz: "America/New_York" },
    { id: "toronto", name: "Toronto", lat: 43.6532, lon: -79.3832, tz: "America/Toronto" },
    { id: "sydney", name: "Sydney", lat: -33.8688, lon: 151.2093, tz: "Australia/Sydney" },
  ];

  const ORDER = ["fajr", "sunrise", "dhuhr", "asr", "maghrib", "isha"];

  /* Sunrise is shown for orientation but is not a prayer, so it is never
     marked as the next one. */
  const NOT_A_PRAYER = new Set(["sunrise"]);

  const select = table.querySelector("[data-times-city]");
  const placeEl = table.querySelector("[data-times-place]");
  const dateEl = table.querySelector("[data-times-date]");
  const methodEl = table.querySelector("[data-times-method]");
  const locale = document.documentElement.lang || "en";

  /* Guess a city from the browser's time zone. This reads a setting the
     page already has; it asks for no permission and no location. */
  function guessCity() {
    let zone = "";
    try {
      zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    } catch {
      /* older browser: fall through to the default */
    }
    const exact = CITIES.find((c) => c.tz === zone);
    if (exact) return exact;
    const region = zone.split("/")[0];
    const sameRegion = CITIES.find((c) => c.tz.split("/")[0] === region);
    return sameRegion || CITIES[0];
  }

  const fmtTime = (hours) => {
    if (!Number.isFinite(hours)) return "—";
    const total = Math.round(hours * 60);
    const d = new Date(Date.UTC(2000, 0, 1, Math.floor(total / 60) % 24, total % 60));
    return new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    }).format(d);
  };

  function render(city) {
    const now = new Date();
    const offset = zoneOffset(now, city.tz);
    const local = new Date(now.getTime() + offset * 3600000);
    /* Read the shifted instant in UTC so "today" is the city's today. */
    const civil = new Date(
      Date.UTC(
        local.getUTCFullYear(),
        local.getUTCMonth(),
        local.getUTCDate(),
        12
      )
    );
    const times = prayerTimes(
      new Date(civil.getUTCFullYear(), civil.getUTCMonth(), civil.getUTCDate()),
      city.lat,
      city.lon,
      offset
    );

    const nowHours =
      local.getUTCHours() + local.getUTCMinutes() / 60 + local.getUTCSeconds() / 3600;

    /* The next prayer is the first upcoming one; after Isha it wraps to
       tomorrow's Fajr. */
    let nextKey =
      ORDER.find((k) => !NOT_A_PRAYER.has(k) && Number.isFinite(times[k]) && times[k] > nowHours) ||
      "fajr";

    if (placeEl) placeEl.textContent = city.name;
    if (dateEl) {
      dateEl.textContent = new Intl.DateTimeFormat(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        timeZone: city.tz,
      }).format(now);
      dateEl.setAttribute("datetime", local.toISOString().slice(0, 10));
    }
    if (methodEl) methodEl.textContent = METHOD.label;

    table.querySelectorAll("tr[data-prayer]").forEach((row) => {
      const key = row.dataset.prayer;
      const cell = row.querySelector("[data-value]");
      if (cell) cell.textContent = fmtTime(times[key]);
      if (key === nextKey) {
        row.setAttribute("data-next", "");
      } else {
        row.removeAttribute("data-next");
      }
      const badge = row.querySelector("[data-next-badge]");
      if (badge) badge.hidden = key !== nextKey;
    });
  }

  if (select) {
    select.innerHTML = "";
    for (const c of CITIES) {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = c.name;
      select.append(opt);
    }
    const initial = guessCity();
    select.value = initial.id;
    select.addEventListener("change", () => {
      const city = CITIES.find((c) => c.id === select.value);
      if (city) render(city);
    });
    render(initial);
  } else {
    render(guessCity());
  }

  /* Re-render on the minute so the "next" marker stays honest. */
  setInterval(() => {
    const city = CITIES.find((c) => c.id === select?.value) || guessCity();
    render(city);
  }, 60000);
})();
