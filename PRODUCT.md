# Product

## Register

brand

## Users

Muslims who want their daily practice to hold together across an ordinary week. Two moments dominate: the quick glance (how long until Maghrib, which way is the qibla, from a phone held at arm's length in a car park or a hallway) and the settled sitting (reading a portion of the Quran, counting dhikr aloud after Isha).

The website meets neither of those moments. It meets someone earlier: a person who heard about Rowhni from a friend, a family member, or a store listing, and wants to know within about fifteen seconds whether this app is serious, whether it respects their data, and whether it runs on their phone. Many arrive on a phone, on a slow connection, in a language other than English.

The job to be done on this site is a decision, not a conversion funnel. Answer the question honestly and get out of the way.

## Product Purpose

Rowhni computes prayer times for a location, points to the qibla, counts dhikr by listening to the voice, and tracks progress through the Quran. It runs on iOS and Android. Calculation and voice recognition happen on the device.

Success for the site: the visitor understands what the app does, on which platform, at what price, and what happens to their data, then either installs it or decides it is not for them. A visitor who installs on a wrong impression is a failure, not a win.

## Brand Personality

Quiet, exact, unhurried.

The voice is that of a well-made timetable: it states the fact and stops. No exclamation, no urgency, no spiritual salesmanship. Islamic practice is the user's own; the app is an instrument they use, not an authority over them. The interface never adopts the tone of a teacher, a scholar, or a guide.

Concretely: the site says "Prayer times are calculated on your device" rather than "Experience the perfect blend of tradition and technology." It says what a feature does. Superlatives, invented percentages, and the word "journey" have no place here.

## Anti-references

- **The current site.** Aurora canvas, particle field, magnetic buttons, 3D card tilts, shimmer sweeps, glow shadows on every interactive element, emoji pills floating in the hero. Effect stacked on effect until the H1 stopped rendering at all.
- **Invented authority.** The removed chatbot billed itself as a "Personal Islamic Scholar Assistant, Powered by Advanced AI, Trusted by scholars worldwide" while running a keyword lookup table. Nothing on this site may claim knowledge, endorsement, or scale it does not have.
- **Unbacked numbers.** "99.7% voice accuracy", "±1min prayer precision", a 4.8 star rating with no source, three generated avatars standing in for a community. Numbers appear only with a source.
- **The mosque-silhouette-and-gold-filigree register.** Ornament as a substitute for care. Cultural weight belongs in the typography, the pacing, and the accuracy of the content, not in decorative arabesque.
- **SaaS landing grammar.** Uppercase tracked eyebrow above every section, identical three-across icon cards, hero metric row, gradient headline text.

## Design Principles

1. **The timetable is the design.** Rowhni is, at its core, an astronomical table: five fixed events, recomputed daily. Real times, real dates, and real numerals are the primary visual material of the site. Where a landing page would reach for a decorative panel, use the actual data.
2. **Say the true thing at the true size.** Type scale follows how load-bearing a statement is. A claim that cannot be substantiated does not get to be large, and does not get to be on the page.
3. **Both platforms, one sentence.** iOS and Android are named together everywhere a platform is named. No copy may imply the app is iOS-only.
4. **The privacy claim must survive inspection.** A site that says "no tracking" may not load fonts from a third-party CDN, prefetch from cdnjs, or ship analytics. What the page does has to match what the page says.
5. **Nothing is revealed that was not already there.** Content renders without JavaScript, without animation, and on a headless crawler. Motion may enhance an arrival; it may never gate it.

## Accessibility & Inclusion

WCAG 2.1 AA as the floor, verified rather than assumed: body text at 4.5:1 or better, large text at 3:1, visible focus rings on every interactive element, full keyboard operation of navigation and language switching.

Nine languages ship, including Arabic, which requires genuine RTL (logical properties throughout, not a mirrored stylesheet). Japanese renders through a system CJK stack rather than a multi-megabyte webfont.

Every animation needs a `prefers-reduced-motion: reduce` path, and the reduced path is a real state, not a broken one. Colour never carries meaning alone: prayer status, active language, and form validation each need a second cue.

Touch targets 44×44 CSS pixels minimum. The site must remain usable at 200% zoom and at 320 CSS pixels wide.
