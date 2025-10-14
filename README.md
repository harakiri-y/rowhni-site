# Rowhni Public Pages (Legal‑ready)

This folder contains static, production‑ready public pages you can deploy to any static host (GitHub Pages, Netlify, Vercel, S3, …).

Pages
- `/privacy/` — Privacy Policy (multilingual, GDPR/UK‑GDPR‑aware, CCPA note)
- `/privacy/options/` — Privacy Choices (rights & opt‑out guidance)
- `/support/` — Support (contact, FAQ, purchase/restore notes)

Features
- Minimal, accessible HTML/CSS + auto language detection with manual selector
- No cookies, no tracking, fully static (client‑side only)
- Right‑to‑left rendering for Arabic

Deploy
1) GitHub Pages
- Put contents of `Website` at your repo root (or configure Pages to use this subfolder).
- Settings → Pages → “Deploy from branch”.
- Example URLs:
  - `https://<user>.github.io/<repo>/privacy/`
  - `https://<user>.github.io/<repo>/privacy/options/`
  - `https://<user>.github.io/<repo>/support/`

2) Netlify / Vercel
- New site from `Website` folder, clean URLs enabled.

3) Custom domain `rowhni.app`
- Point DNS to your host; map the site to `rowhni.app`:
  - `https://rowhni.app/privacy/`
  - `https://rowhni.app/privacy/options/`
  - `https://rowhni.app/support/`

How to edit copy
- Open the relevant `index.html` and modify the content inside each `<section data-lang="…">` block.
- Supported language codes: `en`, `de`, `fr`, `tr`, `es`, `ar`. Default is English; you can force a language with `?lang=de`.

Legal notes (non‑exhaustive)
- The Privacy Policy is drafted to reflect typical GDPR/UK‑GDPR requirements (Art. 13/14), incl. purposes, legal bases, retention, recipients, international transfers (SCCs/DPF note), rights and contact. Adapt controller details (company name, address) as soon as available.
- If you operate from the EU/UK/CH, add your full legal entity and a dedicated privacy contact (e.g., privacy@rowhni.app). If you appoint a representative or DPO, include them.
- Add your local supervisory authority link for complaints (e.g., in Germany: https://www.bfdi.bund.de). A generic note is included in EN/DE.
- If you use additional processors (analytics, crash reporting beyond Apple), list them and link to their privacy pages.
- The site declares “no cookies” by default; if you later add analytics, update the policy and (if needed) add a consent banner.

