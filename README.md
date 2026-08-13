# Rowhni website

Static site for the Rowhni app. No framework, no build step at deploy time:
what is in this folder is what gets served.

## Layout

```
index.html          English landing page
de/ fr/ es/ tr/     the same page in eight more languages
ar/ ja/ id/ ms/
support/ privacy/   support and legal pages
terms/ contact/
licenses/ delete-account/
privacy/options/
join/ addfriend/    app-link landing pages (noindex)

_assets/
  rowhni.css        the whole design system
  rowhni.js         progressive enhancement only
  fonts/            self-hosted variable fonts
  shots/            app screenshots, AVIF + WebP + JPEG
_tools/             generators, not deployed content
```

## Editing the landing page

The nine language versions are **generated**. Do not edit `index.html` or any
`<lang>/index.html` by hand; the next build overwrites it.

1. Change the copy in `_tools/strings.py` (one dictionary per locale).
2. Change the structure in `_tools/template.html`.
3. Run:

```bash
python3 _tools/build.py
```

The script fails loudly if a locale is missing a key, so a translation can
never silently fall back to English.

## Editing the legal and support pages

These are converted from the originals kept in `_tools/source/`, so their
wording survives a rebuild untouched:

```bash
python3 _tools/convert_pages.py
```

Small edits can also be made directly in the generated file, as long as you
know a re-run will replace it. For anything meant to last, edit the copy in
`_tools/source/` instead.

## Design system

`DESIGN.md` documents the palette, type scale and components, with the
measured contrast ratios. `PRODUCT.md` covers who the site is for and the
principles behind it. Read those before changing colours or type.

Two rules that are easy to break by accident:

- **Nothing may be hidden behind an animation.** Content is visible by
  default; motion only shortens an entrance. An earlier version of this site
  hid its own `<h1>` this way and shipped it broken.
- **No third-party requests.** Fonts are self-hosted because the privacy
  policy promises no tracking, and a Google Fonts request hands the visitor's
  IP address to Google. The contact form is the single deliberate exception,
  and it says so on the page.

## Checking a change

Serve the folder and look at it:

```bash
python3 -m http.server 8765
```

`_tools/a11y-check.js` measures rendered contrast (it composites the actual
background layers, so `oklch()` and `color-mix()` are handled correctly).
Load a page, then in the console:

```js
const s = document.createElement('script');
s.src = '/_tools/a11y-check.js';
document.head.append(s);
s.onload = () => console.table(rowhniContrast().detail);
```

Check both themes: the toggle in the header persists to `localStorage`.

## Deploying

Any static host. `vercel.json` and `.htaccess` carry the same security
headers and cache policy, so the site behaves the same on Vercel or Apache.

Three things to know:

- **The stylesheet and script are requested with a content hash** (`rowhni.css?v=66009238`), written by the generators. That is why they can be cached for a year: a new build produces a new URL. If you ever edit `_assets/rowhni.css` by hand, re-run `python3 _tools/build.py` and `python3 _tools/convert_pages.py` afterwards, or visitors will keep the old file until their cache expires.

- `sw.js` is a **retired** service worker. It deliberately still exists so
  browsers that registered the old caching worker fetch it, clear their
  caches and unregister. Removing the file would leave those devices stuck on
  a cached copy of the old site. It can go once traffic has cycled through.
- The Content-Security-Policy pins two inline-script hashes. If you edit the
  theme script in the page head or the speculation rules block, recompute
  them, or the script will be blocked:

```bash
python3 -c "import hashlib,base64,sys;print('sha256-'+base64.b64encode(hashlib.sha256(sys.stdin.buffer.read()).digest()).decode())"
```

## App links

`.well-known/apple-app-site-association.json` and
`.well-known/assetlinks.json` back the iOS and Android app links. `join/` and
`addfriend/` are the landing pages those links fall back to when the app is
not installed.
