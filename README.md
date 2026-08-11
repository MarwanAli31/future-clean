# Future Clean — Website

A frontend-only React + Vite + Tailwind site for a cleaning services company.
No backend, no database, no auth — everything runs statically in the browser.

**Language:** the site content is in Egyptian Arabic, laid out right-to-left
(`dir="rtl"` in `index.html`). Fonts are Cairo (headings) and Tajawal (body),
both loaded from Google Fonts. Directional spacing/positioning uses
Tailwind's logical utilities (`ps-`/`pe-`, `start-`/`end-`, `border-s`) so the
layout mirrors correctly — if you add new sections, prefer those over
`pl-`/`pr-`/`left-`/`right-` to keep RTL support intact.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

The `dist/` folder from `npm run build` is what you deploy (Vercel, Netlify,
GitHub Pages, any static host).

## Where to edit things

| What | File |
|---|---|
| WhatsApp number & message | `src/config/contact.js` |
| Phone number / location / hours | `src/config/contact.js` |
| Services list | `src/data/services.js` |
| Before/After projects | `src/data/beforeAfter.js` |
| Gallery photos | `src/data/gallery.js` |
| Company description | `src/components/About.jsx` |
| Hero headline/copy | `src/components/Hero.jsx` |

## Replacing images

Drop your real photos into `public/images/` using these exact filenames and
they'll appear automatically — no code changes needed:

```
hero.jpg
about.jpg
why-choose-us.jpg
service-house.jpg
service-office.jpg
service-commercial.jpg
service-deep-cleaning.jpg
service-move.jpg
service-custom.jpg
before-1.jpg / after-1.jpg
before-2.jpg / after-2.jpg
before-3.jpg / after-3.jpg
gallery-1.jpg … gallery-6.jpg
```

If a file is missing, the site shows a clean placeholder instead of a broken
image — nothing breaks.

## Notes

- The "Before & After" section uses a drag/tap comparison slider (mouse,
  touch, and arrow-key accessible).
- The contact form at the bottom does **not** submit anywhere — it opens
  WhatsApp with a pre-filled message, since this is a frontend-only site.
- Colors, fonts, and animation tokens live in `tailwind.config.js`.
