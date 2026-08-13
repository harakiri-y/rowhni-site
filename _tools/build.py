#!/usr/bin/env python3
"""Generate the landing page for every locale from one template.

Nine hand-maintained copies of the same page is how they drift apart. This
renders them from _tools/template.html plus _tools/strings.py, and fails
loudly on a missing key rather than shipping English into another language.

    python3 _tools/build.py

Output is plain static HTML. Nothing needs to run at deploy time.
"""

import pathlib
import sys

sys.path.insert(0, str(pathlib.Path(__file__).parent))
from strings import S, LOCALES, LANG_NAMES, RTL  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parent.parent
TEMPLATE = (ROOT / "_tools" / "template.html").read_text(encoding="utf-8")

def asset_version() -> str:
    """Short content hash over the stylesheet and script.

    Without it, a deploy is invisible for as long as the cache lasts: the
    filenames never change, so a browser holding rowhni.css has no reason to
    ask for it again. Appending the hash makes each build a distinct URL,
    which is what lets the cache headers be aggressive and correct at once.
    """
    import hashlib
    h = hashlib.sha256()
    for name in ("_assets/rowhni.css", "_assets/rowhni.js"):
        h.update((ROOT / name).read_bytes())
    return h.hexdigest()[:8]


APPLE_PATH = (
    "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35"
    "C2.79 14.25 3.51 5.31 9.05 5.03c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 "
    "2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.36ZM12.03 4.97C11.88 "
    "2.72 13.7.87 15.8.73c.29 2.6-2.36 4.53-3.77 4.24Z"
)

PLAY_PATHS = [
    "M4.2 2.3a1 1 0 0 0-.5.9v17.6a1 1 0 0 0 .5.9l.1.1 9.9-9.8v-.2L4.3 2.2l-.1.1Z",
    "m17.6 15.2-3.4-3.3v-.2l3.4-3.3.1.1 4 2.3c1.1.6 1.1 1.7 0 2.3l-4 2.2-.1-.1Z",
    "m17.7 15.3-3.5-3.4-10 10c.4.4 1 .4 1.6.1l11.9-6.7",
    "M17.7 8.6 5.8 1.9c-.6-.3-1.2-.3-1.6.1l10 10 3.5-3.4Z",
]

IOS_URL = "https://apps.apple.com/app/id6748600035"
PLAY_URL = "https://play.google.com/store/apps/details?id=com.rowhni.android"

TICK = (
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '
    'aria-hidden="true"><path d="M4 12.5 9 17.5 20 6.5" /></svg>'
)


def stores_block(t):
    """App Store and Play Store, adjacent and equal. Order is adjusted at
    runtime to put the visitor's own platform first; neither is ever hidden."""
    apple_svg = f'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="{APPLE_PATH}" /></svg>'
    play_svg = '<svg viewBox="0 0 24 24" aria-hidden="true">' + "".join(
        f'<path d="{p}" />' for p in PLAY_PATHS
    ) + "</svg>"

    def one(platform, url, svg, pre, name):
        return (
            f'<a class="store" data-platform="{platform}" href="{url}" rel="noopener">'
            f"{svg}"
            f'<span class="store__label">'
            f'<span class="store__pre">{pre}</span>'
            f'<span class="store__name">{name}</span>'
            f"</span></a>"
        )

    return (
        '<div class="stores" data-stores>'
        + one("ios", IOS_URL, apple_svg, t["store_download_on"], "App Store")
        + one("android", PLAY_URL, play_svg, t["store_get_it_on"], "Google Play")
        + "</div>"
    )


def hreflang_block():
    out = []
    for loc in LOCALES:
        href = "https://rowhni.com/" if loc == "en" else f"https://rowhni.com/{loc}/"
        out.append(f'  <link rel="alternate" hreflang="{loc}" href="{href}">')
    out.append('  <link rel="alternate" hreflang="x-default" href="https://rowhni.com/">')
    return "\n".join(out)


def lang_links(current):
    out = []
    for loc in LOCALES:
        href = "/" if loc == "en" else f"/{loc}/"
        current_attr = ' aria-current="page"' if loc == current else ""
        lang_attr = "" if loc == current else f' lang="{loc}"'
        out.append(
            f'            <li><a href="{href}" hreflang="{loc}"{lang_attr}{current_attr}>'
            f"{LANG_NAMES[loc]}</a></li>"
        )
    return "\n".join(out)


def render(loc):
    t = S[loc]
    missing = set(S["en"]) - set(t)
    if missing:
        raise SystemExit(f"{loc}: missing keys {sorted(missing)}")

    root = "" if loc == "en" else "../"
    path = "/" if loc == "en" else f"/{loc}/"

    priv_link = f'<a href="{root}privacy/">{t["priv_link_text"]}</a>'
    delete_link = f'<a href="{root}delete-account/">{t["fact4_link_text"]}</a>'

    extra_preload = ""
    if loc in RTL:
        extra_preload = (
            f'  <link rel="preload" href="{root}_assets/fonts/naskh-arabic.woff2" '
            'as="font" type="font/woff2" crossorigin>\n'
        )

    values = {
        "v": asset_version(),
        "lang": loc,
        "dir_attr": ' dir="rtl"' if loc in RTL else "",
        "root": root,
        "home": "/" if loc == "en" else f"/{loc}/",
        "path": path,
        "hreflang": hreflang_block(),
        "lang_links": lang_links(loc),
        "stores": stores_block(t),
        "tick": TICK,
        "font_preload_extra": extra_preload,
        "priv_lead": t["priv_lead"].format(privacy_link=priv_link),
        "fact4_dd": t["fact4_dd"].format(delete_link=delete_link),
    }
    for key, val in t.items():
        values.setdefault(key, val)

    out = TEMPLATE
    for key, val in values.items():
        out = out.replace("{{" + key + "}}", str(val))

    leftover = [
        chunk.split("}}")[0]
        for chunk in out.split("{{")[1:]
    ]
    if leftover:
        raise SystemExit(f"{loc}: unreplaced placeholders {sorted(set(leftover))}")

    return out


def main():
    for loc in LOCALES:
        target = ROOT / "index.html" if loc == "en" else ROOT / loc / "index.html"
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(render(loc), encoding="utf-8")
        print(f"  {target.relative_to(ROOT)}")


if __name__ == "__main__":
    print("Rendering landing pages:")
    main()
