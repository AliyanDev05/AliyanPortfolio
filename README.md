# Syed Aliyan Abbas — Portfolio

A premium, dark-themed personal portfolio for a Full Stack Software Engineer. Built for speed,
accessibility and conversion — designed to impress recruiters and freelance clients within the
first ten seconds.

## Stack

- **React 19 + TypeScript** (strict mode)
- **Vite** — instant dev server, optimized production builds
- **Tailwind CSS v4** — design tokens via `@theme` in `src/index.css`
- **Framer Motion** — scroll reveals and micro-interactions (respects `prefers-reduced-motion`)
- **Lucide + Simple Icons** — consistent SVG iconography, zero emoji icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Deploy to Vercel

The repo ships with a `vercel.json` (immutable asset caching + security headers). Either:

1. Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) — Vite is
   auto-detected, no settings needed, or
2. `npx vercel --prod` from this directory.

## Customizing content

All copy lives in **`src/lib/data.ts`** — projects, skills, experience, services, testimonials,
social links and stats. Edit that single file to update the site; no component changes needed.

Other touch points:

- **SEO / metadata** — `index.html` (title, description, Open Graph, JSON-LD person schema).
  Update the canonical URL and social profile URLs to your real handles before launch.
- **Resume** — drop `resume.pdf` into `public/` and set `site.resumeUrl` in `data.ts`.
- **OG image** — add `public/og.png` (1200×630) and reference it with an `og:image` meta tag for
  rich link previews.
- **Contact form** — currently zero-backend (opens a prefilled email). To capture submissions
  server-side, point the form at [Formspree](https://formspree.io) /
  [FormSubmit](https://formsubmit.co), or add a small Node/Express + SMTP (Nodemailer) endpoint
  and a Vercel serverless function.

## Performance & accessibility notes

- No raster images — project previews are CSS-generated artwork, so the entire site is a few
  hundred KB and crisp at any DPI.
- Fonts are preconnected and loaded with `display=swap`.
- Semantic landmarks, skip link, labeled forms, focus-visible rings, 44px touch targets and
  `prefers-reduced-motion` support throughout.
