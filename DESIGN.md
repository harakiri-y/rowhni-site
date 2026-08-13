# Design

## Theme

Dark is the signature. The app is opened before dawn and after dark, and the site carries that room with it. Light is a fully built second theme, not a fallback: legal and support pages are long reading, and long reading is better on paper. `color-scheme` follows the system; a header control overrides it and persists.

The surface is green, not black. `oklch(0.27 0.05 164)` reads as a colour at a glance, which a tinted near-black does not. Colour strategy is **committed**: the green carries roughly half the page as actual ground. Gold is an accent under 10%, reserved for the next prayer, the primary action, and focus rings. It never glows.

## Palette

OKLCH throughout, defined once per theme on `:root` and switched with `light-dark()`.

### Dark

| Token | Value | Hex | Role |
|---|---|---|---|
| `--bg` | `oklch(0.27 0.05 164)` | `#082E20` | page ground |
| `--bg-deep` | `oklch(0.205 0.038 164)` | `#04200F` | footer, contrast bands |
| `--surface` | `oklch(0.325 0.052 164)` | `#0C3626` | tables, panels |
| `--raised` | `oklch(0.375 0.054 164)` | `#134130` | hover, active row |
| `--ink` | `oklch(0.97 0.012 150)` | | headings, body |
| `--ink-2` | `oklch(0.85 0.030 150)` | | secondary text |
| `--ink-3` | `oklch(0.74 0.038 150)` | | labels, captions |
| `--gold` | `oklch(0.84 0.145 92)` | `#ECC74A` | accent, next prayer, focus |
| `--line` | `oklch(0.42 0.04 164)` | | rules, borders |

Measured against `--bg`: ink 13.6:1, ink-2 9.5:1, ink-3 6.5:1, gold 9.0:1. Dark ink on gold 9.0:1.

### Light

| Token | Value | Hex | Role |
|---|---|---|---|
| `--bg` | `oklch(0.985 0.004 150)` | `#F8FBF9` | page ground |
| `--surface` | `oklch(0.958 0.008 160)` | `#EDF3EF` | tables, panels |
| `--ink` | `oklch(0.235 0.03 166)` | `#0F231B` | headings, body |
| `--ink-2` | `oklch(0.43 0.03 166)` | `#40554C` | secondary text |
| `--brand` | `oklch(0.363 0.056 164)` | `#1E4736` | primary action, links |
| `--gold` | `oklch(0.56 0.115 84)` | `#946D00` | accent (darkened for contrast) |

Measured against `--bg`: ink 15.8:1, ink-2 7.7:1, brand 10.0:1, gold 4.5:1. Light bg on brand 10.0:1.

Gold shifts to `oklch(0.56 …)` in light mode. The dark-mode gold is a 1.9:1 fail on white; the same token cannot serve both themes.

## Typography

Three families, each with a job. All self-hosted as variable WOFF2 in `_assets/fonts/`, subset by `unicode-range`. No third-party font CDN: the privacy policy says no tracking, and a Google Fonts request hands the visitor's IP to Google.

- **Archivo** (400–700, variable) — interface, body, and every numeral. An industrial grotesque with a high x-height and tabular figures, drawn for signage and forms. Times, dates, and degrees are the load-bearing content, and they need digits that hold a column.
- **Literata** (400–700 roman + italic, variable optical size) — headings and quoted passages. Drawn for long-form screen reading, with ink traps that keep it warm rather than pious. Carries the reading register of the Quran features without costume.
- **Noto Naskh Arabic** (400–700, variable) — Arabic across all locales, loaded only when Arabic codepoints appear.

Japanese uses a system stack (`Hiragino Sans`, `Yu Gothic`, `Meiryo`). A CJK webfont would cost several megabytes to serve one locale.

Rejected as training-data defaults, all three previously in use here: Inter, Space Grotesk, Playfair Display.

Scale is fluid `clamp()` on a 1.25 ratio. Headings take `text-wrap: balance`, prose takes `text-wrap: pretty`, measure is capped at 68ch. Line height rises by 0.05 in dark mode, where light type on dark ground reads thinner.

## Layout

Rules and columns, not cards. The organising object is a **timetable**: a prayer schedule is a list of times against labels, and that structure sets the grammar for the whole page. Sections are separated by hairlines and generous space rather than boxed into panels. Nested cards do not appear.

- Content column `min(100% - 2rem, 68rem)`, wide bands break out full-bleed.
- Flex for one dimension, grid for two. Feature rows alternate `grid-template-columns: 1fr 1fr` and collapse at container width, using container queries so a component is responsive wherever it is placed.
- Fluid spacing on a 4px base, `clamp()` between 320px and 1440px viewports.
- Semantic z-index scale: `--z-sticky: 100`, `--z-menu: 200`, `--z-dialog: 300`, `--z-toast: 400`. No 9999.

## Components

- **Prayer table** — the signature element. Real times, computed client-side from the visitor's coordinates or a chosen city. The next prayer is marked with gold, a bold weight, and the word "next"; three cues, so colour never carries the meaning alone.
- **Store buttons** — App Store and Play Store, always adjacent and equal in weight. Platform detection reorders them; it never hides one.
- **Feature row** — screenshot against text, alternating sides. The screenshot is the imagery; there are no decorative panels.
- **Language switcher** — a native `<select>` in a form, working without JavaScript through `hreflang`-linked URLs.
- **Theme toggle** — three states (system, light, dark), persisted in `localStorage`, set before first paint to avoid a flash.

## Motion

Motion serves arrival and state change, nothing else. No parallax, no magnetic cursors, no tilt, no shimmer, no particle field.

- Section arrivals use CSS scroll-driven animation (`animation-timeline: view()`), which needs no observer and cannot leave content stranded. Every animated element is visible by default; the animation only shortens its entrance.
- Easing is `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quint). Durations 150ms for state, 400ms for arrival.
- `@media (prefers-reduced-motion: reduce)` removes transforms and keeps opacity crossfades at 1ms.
- Page transitions use the native MPA `@view-transition`, which suits a multi-page static site and degrades to a normal navigation.

## Technology

Static HTML, no build step, no framework. The constraint is deliberate: the site must survive years of neglect and deploy anywhere.

- `@layer reset, tokens, base, layout, components, utilities` for predictable cascade.
- Native CSS nesting, `light-dark()`, container queries, `:has()`, `@starting-style`, `content-visibility: auto` on below-fold sections.
- Native `popover` for the mobile menu, `<dialog>` for modals. No JavaScript menu state machine.
- Speculation Rules for prefetch, replacing `<link rel=prefetch>`.
- JSON-LD `SoftwareApplication` with both store listings; reciprocal `hreflang` across nine locales plus `x-default`.
- JavaScript is progressive enhancement only. Every page renders complete with scripting off.
