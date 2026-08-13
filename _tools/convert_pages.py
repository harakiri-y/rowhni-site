#!/usr/bin/env python3
"""Re-shell the legal and support pages onto the new design system.

The wording of these pages is legally load-bearing, so none of it is
rewritten here: the text, its headings and its links are carried over
verbatim. What changes is the wrapper (old nav and footer out, current
header and footer in) and the markup around the text, which is reduced to
semantic elements the stylesheet already knows how to set.

    python3 _tools/convert_pages.py
"""

import html
import pathlib
import re
import sys
from html.parser import HTMLParser

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from strings import S, LOCALES, LANG_NAMES  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parent.parent

# Elements worth keeping. Everything else is unwrapped: the tag goes, the
# text inside it stays.
KEEP = {
    "h2", "h3", "h4", "p", "ul", "ol", "li", "strong", "em", "b", "i",
    "a", "br", "table", "thead", "tbody", "tr", "th", "td", "code", "pre",
    "blockquote", "dl", "dt", "dd", "hr", "small", "abbr", "time",
}
VOID = {"br", "hr"}
KEEP_ATTRS = {"href", "lang", "dir", "id", "datetime", "rel", "target", "colspan", "rowspan"}
DROP_SUBTREE = {"script", "style", "nav", "footer", "svg", "noscript", "button", "form",
                "select", "h1"}


class Reduce(HTMLParser):
    """Strip presentational wrappers, keep the document's meaning."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []
        self.skip_depth = 0
        self.skip_tag = None

    def handle_starttag(self, tag, attrs):
        if self.skip_depth:
            if tag == self.skip_tag:
                self.skip_depth += 1
            return
        if tag in DROP_SUBTREE:
            self.skip_tag = tag
            self.skip_depth = 1
            return
        if tag not in KEEP:
            return
        kept = [(k, v) for k, v in attrs if k in KEEP_ATTRS and v is not None]
        attr_s = "".join(f' {k}="{html.escape(v, quote=True)}"' for k, v in kept)
        self.out.append(f"<{tag}{attr_s}>")

    def handle_endtag(self, tag):
        if self.skip_depth:
            if tag == self.skip_tag:
                self.skip_depth -= 1
                if self.skip_depth == 0:
                    self.skip_tag = None
            return
        if tag in KEEP and tag not in VOID:
            self.out.append(f"</{tag}>")

    def handle_data(self, data):
        if self.skip_depth:
            return
        if data.strip():
            self.out.append(html.escape(data, quote=False))
        elif self.out and not self.out[-1].endswith(" "):
            self.out.append(" ")

    def result(self):
        s = "".join(self.out)
        # Old pages kept success and error banners in the markup and toggled
        # them with a class. Unwrapped, they read as page copy, so drop any
        # run of text carrying their status glyphs.
        for marker in ("✅", "⚠️", "❌", "✔️"):
            s = re.sub(
                rf"{marker}[^<]*",
                "",
                s,
            )
        # Collapse the empty shells left behind by unwrapping.
        for _ in range(6):
            s = re.sub(r"<(p|li|strong|em|b|i)>\s*</\1>", "", s)
        # Decorative emoji opening a heading are the previous design's voice,
        # not content. The heading text itself is left alone.
        s = re.sub(
            r"(<(?:h2|h3|h4)[^>]*>)\s*[\U0001F300-\U0001FAFF☀-➿️]+\s*",
            r"\1",
            s,
        )
        s = re.sub(r"[ \t]+", " ", s)
        s = re.sub(r"\s+<(/?(?:h2|h3|h4|p|ul|ol|li|table|dl))", r"\n<\1", s)
        return s.strip()


def extract_body(src: str) -> str:
    """Everything between the old nav and the old footer."""
    m = re.search(r"<main\b[^>]*>(.*?)</main>", src, re.S)
    if m:
        return m.group(1)
    m = re.search(r"<body\b[^>]*>(.*?)</body>", src, re.S)
    return m.group(1) if m else src


def first_heading(src: str) -> str:
    m = re.search(r"<h1\b[^>]*>(.*?)</h1>", src, re.S)
    if not m:
        return ""
    text = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", m.group(1))).strip()
    # The source is already HTML-escaped; unescape once so the shell can
    # escape it exactly once and "&amp;" does not reach the page.
    return html.unescape(text)


def lang_links(root: str) -> str:
    out = []
    for loc in LOCALES:
        href = "/" if loc == "en" else f"/{loc}/"
        out.append(
            f'            <li><a href="{href}" hreflang="{loc}" lang="{loc}">{LANG_NAMES[loc]}</a></li>'
        )
    return "\n".join(out)


SHELL = """<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

  <title>{title}</title>
  <meta name="description" content="{description}">
{robots}
  <script>
    try {{
      var t = localStorage.getItem("rowhni-theme");
      if (t === "light" || t === "dark") document.documentElement.dataset.theme = t;
    }} catch (e) {{ }}
  </script>

  <link rel="stylesheet" href="{root}_assets/rowhni.css">
  <link rel="preload" href="{root}_assets/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="{root}_assets/fonts/literata-latin.woff2" as="font" type="font/woff2" crossorigin>

  <link rel="icon" href="{root}favicon.ico" sizes="32x32">
  <link rel="apple-touch-icon" href="{root}icons/apple-touch-icon.png">
  <link rel="manifest" href="{root}manifest.json">
  <meta name="theme-color" content="#082E20" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#F8FBF9" media="(prefers-color-scheme: light)">
  <link rel="canonical" href="https://rowhni.com/{slug}">
</head>

<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="header">
    <div class="header__inner">
      <a class="brand" href="{root}">
        <img src="{root}_assets/logo.png" alt="" width="34" height="34">
        Rowhni
      </a>

      <nav class="nav" aria-label="Main">
        <ul class="nav__links">
          <li><a href="{root}#features">Features</a></li>
          <li><a href="{root}support/">Support</a></li>
          <li><a href="{root}privacy/">Privacy</a></li>
        </ul>

        <div class="header__tools">
          <div class="theme" data-theme-toggle role="group" aria-label="Colour theme">
            <button class="theme__btn" type="button" data-theme-set="system" aria-pressed="true"
              title="Match system theme">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <rect x="2" y="4" width="20" height="14" rx="2" />
                <path d="M8 21h8" />
              </svg>
              <span class="visually-hidden">Match system theme</span>
            </button>
            <button class="theme__btn" type="button" data-theme-set="light" aria-pressed="false" title="Light theme">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="4.5" />
                <path
                  d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
              </svg>
              <span class="visually-hidden">Light theme</span>
            </button>
            <button class="theme__btn" type="button" data-theme-set="dark" aria-pressed="false" title="Dark theme">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M21 13.2A9 9 0 1 1 10.8 3a7 7 0 0 0 10.2 10.2Z" />
              </svg>
              <span class="visually-hidden">Dark theme</span>
            </button>
          </div>

          <a class="btn btn--primary" href="{root}#get">Get the app</a>

          <button class="menu-btn" popovertarget="menu" aria-label="Open menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </header>

  <div class="menu" id="menu" popover>
    <ul>
      <li><a href="{root}">Home</a></li>
      <li><a href="{root}support/">Support</a></li>
      <li><a href="{root}contact/">Contact</a></li>
      <li><a href="{root}privacy/">Privacy policy</a></li>
      <li><a href="{root}terms/">Terms</a></li>
    </ul>
    <button class="menu__close" popovertarget="menu" popovertargetaction="hide">Close</button>
  </div>

  <main id="main">
    <div class="page-head wrap">
      <h1>{heading}</h1>
      <p>{standfirst}</p>
    </div>

    <div class="wrap">
      <div class="prose">
{content}
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="wrap-wide">
      <div class="footer__grid">
        <div>
          <a class="brand" href="{root}">
            <img src="{root}_assets/logo.png" alt="" width="34" height="34" loading="lazy">
            Rowhni
          </a>
          <p class="muted footer__blurb">
            An Islamic companion app for iOS and Android, made by Harun Yaman.
          </p>
        </div>
        <div>
          <h2>App</h2>
          <ul role="list">
            <li><a href="{root}#features">Features</a></li>
            <li><a href="https://apps.apple.com/app/id6748600035" rel="noopener">App Store</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.rowhni.android" rel="noopener">Google
                Play</a></li>
          </ul>
        </div>
        <div>
          <h2>Help</h2>
          <ul role="list">
            <li><a href="{root}support/">Support</a></li>
            <li><a href="{root}contact/">Contact</a></li>
            <li><a href="{root}delete-account/">Delete account</a></li>
          </ul>
        </div>
        <div>
          <h2>Legal</h2>
          <ul role="list">
            <li><a href="{root}privacy/">Privacy policy</a></li>
            <li><a href="{root}privacy/options/">Privacy choices</a></li>
            <li><a href="{root}terms/">Terms</a></li>
            <li><a href="{root}licenses/">Open-source licences</a></li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <span>&copy; 2026 Rowhni</span>
        <nav class="langs" aria-label="Language">
          <ul role="list">
{langs}
          </ul>
        </nav>
      </div>
    </div>
  </footer>

  <script src="{root}_assets/rowhni.js" defer></script>
</body>

</html>
"""

# slug: (title, description, standfirst, depth, noindex)
PAGES = {
    "privacy": (
        "Privacy policy · Rowhni",
        "How Rowhni handles your data: what stays on your device, what is processed, and the rights you have over it.",
        "What the app does with your data, what stays on your device, and the rights you have over any of it.",
        1, False,
    ),
    "terms": (
        "Terms of use · Rowhni",
        "The terms that apply when you use the Rowhni app and this website.",
        "The terms that apply when you use the app and this website.",
        1, False,
    ),
    "support": (
        "Support · Rowhni",
        "Help with prayer times, notifications, voice tasbih, purchases and account questions in Rowhni.",
        "Answers to the questions that come up most, and a way to reach a person when they do not cover it.",
        1, False,
    ),
    "contact": (
        "Contact · Rowhni",
        "Get in touch about Rowhni: support, privacy requests, or anything else.",
        "For support, privacy requests, or anything the other pages do not answer.",
        1, False,
    ),
    "licenses": (
        "Open-source licences · Rowhni",
        "The open-source components used in Rowhni and the licences they are used under.",
        "The open-source work Rowhni is built on, and the licences it is used under.",
        1, False,
    ),
    "delete-account": (
        "Delete your account · Rowhni",
        "How to delete your Rowhni account and the data held with it.",
        "How to remove your account and the data stored with it, from inside the app or by request.",
        1, False,
    ),
    "join": (
        "Group invite · Rowhni",
        "Open a Rowhni group invite in the app.",
        "This link opens a group in the Rowhni app.",
        1, True,
    ),
    "addfriend": (
        "Friend invite · Rowhni",
        "Open a Rowhni friend invite in the app.",
        "This link adds a friend in the Rowhni app.",
        1, True,
    ),
    "privacy/options": (
        "Privacy choices · Rowhni",
        "The privacy choices available to you in Rowhni, and how to exercise each of them.",
        "The choices you have over your data, and how to exercise each one.",
        2, False,
    ),
}


# The contact form is dropped by Reduce along with every other <form>, and
# put back here so a re-run keeps it. Same Formspree endpoint and honeypot as
# before; the notice is new, because a form posting to a third party is the
# one place this site does contact one.
CONTACT_FORM = """
<form action="https://formspree.io/f/mvzjydyy" method="POST" data-contact-form>
  <div class="field">
    <label for="cf-name">Name</label>
    <input type="text" id="cf-name" name="name" autocomplete="name" required>
  </div>

  <div class="field">
    <label for="cf-email">Email</label>
    <input type="email" id="cf-email" name="email" autocomplete="email" required>
    <span class="field__hint">So a reply can reach you.</span>
  </div>

  <div class="field">
    <label for="cf-subject">Topic</label>
    <select id="cf-subject" name="subject" required>
      <option value="General question">General question</option>
      <option value="Support / Help">Support and help</option>
      <option value="Privacy / Data request">Privacy or data request</option>
      <option value="Bug report">Bug report</option>
      <option value="Feature request">Feature request</option>
    </select>
  </div>

  <div class="field">
    <label for="cf-message">Message</label>
    <textarea id="cf-message" name="message" rows="6" required></textarea>
  </div>

  <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true"
    class="visually-hidden">

  <p role="status" data-form-status hidden></p>

  <button class="btn btn--primary" type="submit">Send message</button>
</form>

<div class="notice">
  <p>
    The rest of this site makes no third-party requests. This form is the exception: submitting it
    sends your name, email address and message to Formspree, which forwards them by email. Nothing
    is sent until you press the button. If you would rather not use it, the app's own support
    screen and the store listings both reach the same person.
  </p>
</div>
"""

EXTRA_CONTENT = {"contact": CONTACT_FORM}


def convert(slug, meta):
    title, description, standfirst, depth, noindex = meta
    src_path = ROOT / "_tools" / "source" / slug / "index.html"
    out_path = ROOT / slug / "index.html"
    src = src_path.read_text(encoding="utf-8")

    heading = first_heading(src) or title.split(" · ")[0]
    parser = Reduce()
    parser.feed(extract_body(src))
    content = parser.result()
    if slug in EXTRA_CONTENT:
        content += "\n" + EXTRA_CONTENT[slug].strip()

    # Old pages linked to ../ relative to their own depth; the shell uses the
    # same convention, so relative links inside the content still resolve.
    root = "../" * depth
    body = SHELL.format(
        title=html.escape(title),
        description=html.escape(description),
        robots='  <meta name="robots" content="noindex">\n' if noindex else "",
        root=root,
        slug=slug + "/",
        heading=html.escape(heading),
        standfirst=html.escape(standfirst),
        content=content,
        langs=lang_links(root),
    )
    out_path.write_text(body, encoding="utf-8")
    words = len(re.sub(r"<[^>]+>", " ", content).split())
    print(f"  {slug}/index.html  ({words} words kept)")


def main():
    for slug, meta in PAGES.items():
        convert(slug, meta)


if __name__ == "__main__":
    print("Re-shelling pages:")
    main()
