# The Skin Sanctuary Co

Warm, editorial marketing site for **The Skin Sanctuary Co** — a boutique esthetics studio in Chesapeake, VA (facials, Korean lash lifts, brows, and waxing by Monica Talbot). The site's single dominant goal is to drive appointment bookings through Square.

Built with **Next.js (App Router)**, TypeScript, and `next/font`. Static-first and SEO-focused.

## Stack & approach

- **Next.js 14 App Router** — 7 statically prerendered routes, each with its own SEO metadata.
- **Design system** — warm-oat palette, forest CTA, Cormorant Garamond + Inter, consolidated in `app/globals.css`.
- **Minimal client JS** — pages and most sections are server components; only the interactive pieces (header/drawer, sticky booking bar, booking modal, announcement bar, hours dial, scroll reveals) ship JS.
- **SEO** — per-page `<title>`/canonical/OG/Twitter tags, `BeautySalon` JSON-LD, `sitemap.xml`, and `robots.txt`.

## Pages

`/` · `/services` · `/welcome-facial` · `/about` · `/reviews` · `/contact` · `/policies`

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
app/            routes, layout, globals.css, sitemap.ts, robots.ts
components/     chrome, sections, atoms, booking modal, icons
lib/data.ts     single source of truth (services, hours, reviews, contact)
```

## Content notes

Business data, copy, and the service menu live in `lib/data.ts`. Before launch, confirm with Monica:

- Final image assets — imagery is currently warm placeholder blocks (swap the `.photo` elements).
- The Welcome Facial duration (shown as "TBD").
- One waxing service that was cut off in the source menu is intentionally omitted.
- Review count/rating (currently 5.0 from 12 Google reviews).

Design briefs: `design.md.txt`, `claude.md.txt`.
