/* Contrast auditor used during the rebuild.
 *
 * Measures what the page actually renders rather than what the tokens say:
 * every background layer under an element is composited in a canvas, then the
 * text colour is drawn on top and both pixels are read back. That handles
 * oklch(), color-mix() and semi-transparent fills, all of which defeat naive
 * string parsing of getComputedStyle().
 *
 * Load it on a page and call rowhniContrast().
 */
window.rowhniContrast = function () {
  const cv = document.createElement("canvas");
  cv.width = cv.height = 1;
  const ctx = cv.getContext("2d", { willReadFrequently: true });

  const stackOf = (el) => {
    const layers = [];
    let n = el;
    while (n && n !== document.documentElement) {
      const b = getComputedStyle(n).backgroundColor;
      if (b && !/rgba\(0, 0, 0, 0\)/.test(b) && b !== "transparent") layers.unshift(b);
      n = n.parentElement;
    }
    const root = getComputedStyle(document.documentElement).backgroundColor;
    layers.unshift(
      /rgba\(0, 0, 0, 0\)/.test(root) ? getComputedStyle(document.body).backgroundColor : root
    );
    return layers;
  };

  const pair = (layers, fg) => {
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, 1, 1);
    for (const l of layers) {
      ctx.fillStyle = l;
      ctx.fillRect(0, 0, 1, 1);
    }
    const bg = ctx.getImageData(0, 0, 1, 1).data;
    ctx.fillStyle = fg;
    ctx.fillRect(0, 0, 1, 1);
    const f = ctx.getImageData(0, 0, 1, 1).data;
    return [
      [bg[0], bg[1], bg[2]],
      [f[0], f[1], f[2]],
    ];
  };

  const lum = ([r, g, b]) => {
    [r, g, b] = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const fails = [];
  let n = 0;
  let min = 99;
  let minText = "";

  const sel = "p,li,h1,h2,h3,h4,a,td,th,dt,dd,span,label,button,summary,strong,em,figcaption";
  document.querySelectorAll(sel).forEach((el) => {
    const text = [...el.childNodes]
      .filter((x) => x.nodeType === 3 && x.textContent.trim())
      .map((x) => x.textContent.trim())
      .join(" ");
    if (!text) return;

    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || parseFloat(cs.opacity) < 0.1) return;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;

    const [bg, fg] = pair(stackOf(el), cs.color);
    const a = lum(bg);
    const b = lum(fg);
    const cr = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);

    const size = parseFloat(cs.fontSize);
    const weight = parseInt(cs.fontWeight) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const need = large ? 3 : 4.5;

    n++;
    if (cr < min) {
      min = cr;
      minText = text.slice(0, 34);
    }
    if (cr < need) {
      fails.push({ text: text.slice(0, 44), size: Math.round(size), cr: +cr.toFixed(2), need });
    }
  });

  return {
    url: location.pathname,
    theme: document.documentElement.dataset.theme || "system",
    checked: n,
    failures: fails.length,
    lowest: +min.toFixed(2) + "  (" + minText + ")",
    detail: fails.slice(0, 10),
  };
};
