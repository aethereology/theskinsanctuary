# CLAUDE.md - The Skin Sanctuary Co Website Rebuild

## Project role
You are rebuilding The Skin Sanctuary Co website from the Editorial Atelier Studio Site template into a polished, conversion-focused beauty studio website for Monica Talbot, a Virginia-licensed esthetician in Chesapeake, VA.

The site must feel calm, feminine, editorial, warm, elevated, and trustworthy. It should not feel like a generic spa template. It should feel like a modern boutique beauty studio where the strongest conversion path is booking Monica's Korean Lash Lift & Tint.

## Existing template context
The current template is Next.js 15 App Router, React 19, TypeScript, Tailwind v4, static/SSG, and no database is required.

Primary template control points:
- Edit `lib/site.ts` first. This is the central control panel for brand, domain, tagline, description, service areas, contact, social links, pricing, sections, and primary CTA.
- Use the template's `{ value, confirmed }` safety pattern for public contact fields.
- Public content lives across `content/*.ts`, `seed/*.json`, and `app/**/page.tsx`.
- Images are in `public/images/**` and should be replaced with Monica's real assets using the existing filename/path pattern when possible.
- Design tokens live in the `@theme` block of `app/globals.css`.
- The current demo route group may be `/bridal`; rename or redirect it to beauty-service routes.
- Run `npm run typecheck`, `npm run lint`, and `npm run build` before claiming completion.

## Business source of truth

### Business identity
- Brand name: The Skin Sanctuary Co
- Domain: theskinsanctuary.co
- Esthetician: Monica Talbot
- Credential: Licensed Esthetician in Virginia
- Public location display: Chesapeake, VA
- Do not display the street address anywhere on the public website.
- Phone: 619-458-2483
- Phone href: tel:+16194582483
- Instagram: https://www.instagram.com/theskinsanctuary_co
- Booking platform: Calendly
- Booking URL: https://calendly.com/theskinsanctuary

### Critical privacy/display rule
Do not show the full street address anywhere in public UI, page copy, footer, contact page, schema-visible copy, map blocks, or buttons.

Only display:
- Chesapeake, VA

Do show the phone number prominently across the site:
- 619-458-2483

Do not include:
- Full address
- Google map block with exact location
- Get Directions CTA
- Square booking links
- $35 Welcome Facial
- Old service menu from Square

### Positioning
The Skin Sanctuary Co is a boutique beauty studio in Chesapeake, VA specializing in Korean lash lifts, brow transformations, and waxing services. Monica should be presented as warm, skilled, detail-oriented, and personally involved in every service.

### Core conversion goal
Primary goal: get visitors to book through Calendly.

Main sticky CTA text must be:
- book my lash lift

Sticky CTA href:
- https://calendly.com/theskinsanctuary

Secondary always-visible action:
- 619-458-2483

## Service menu source of truth
Use only this current Calendly menu. Do not include old Square services or the old $35 Welcome Facial.

### Signature service 1: Korean Lash Lift & Tint
- Name: Korean Lash Lift & Tint
- Price: $130
- Description: Leveling up your lift through the use of the Korean method, designed for longer-lasting results and a healthier lift.
- Website positioning: This is the main signature service and primary conversion driver.
- CTA: book my lash lift

### Signature service 2: Brow Wax, Lami, Tint
- Name: Brow Wax, Lami, Tint
- Price: $125
- Description: Wax, lamination, and tint for a complete brow refresh.
- Website positioning: This is Monica's signature brow transformation.
- CTA: book my brow refresh

### Package service: Soft Girl Summer
- Name: Soft Girl Summer
- Price: $255
- Description: The ultimate way to enter your soft girl era. This service includes the signature brow babe plus a Korean lash lift, all during one appointment.
- Website positioning: Premium bundle/package combining lash and brow transformation.
- CTA: book the full glow-up

### Brows
- Brow Wax & Tint - $55
- Brow Lami & Wax - $75
- Brow Wax, Lami, Tint - $125

### Waxing
- Full Arm Wax - $50
- Half Arm Wax - $30
- Underarm Wax - $30
- Lip Wax - $10
- Half Leg Wax - $50
- Full Leg Wax - $65
- Bikini Wax - $50
- Brazilian Wax - $55

### Lashes
- Korean Lash Lift & Tint - $130

### Packages
- Soft Girl Summer - $255

## Site architecture

### Recommended public routes
Use clean, beauty-service routes instead of bridal demo routes.

Required:
- `/` - Homepage
- `/services` - Full service menu and pricing
- `/lash-lift` - Dedicated Korean Lash Lift & Tint landing page
- `/brows` - Brow services landing page
- `/waxing` - Waxing services page or section
- `/reviews` - Review proof page or section
- `/about` - About Monica
- `/contact` - Contact and booking page

Optional content routes:
- `/faq`
- `/aftercare`
- `/policies`

If the template currently has `/bridal`, either:
1. Rename `app/bridal` to the new service route structure, or
2. Remove demo bridal routes and add redirects in `lib/seo/redirects.ts` if needed.

Search the repo for `/bridal`, `bridal`, `Your Studio`, `yourstudio.com`, `Studio Photography`, `Sample Client`, and `the studio`, then replace or remove as appropriate.

## Global site configuration

Update `lib/site.ts` with values like this. Adapt to the exact type shape already in the repo.

```ts
export const site = {
  brand: "The Skin Sanctuary Co",
  domain: "theskinsanctuary.co",
  baseUrl: "https://theskinsanctuary.co",
  tagline: "Korean lash lifts, brows, and waxing in Chesapeake, VA.",
  description:
    "The Skin Sanctuary Co is Monica Talbot's boutique beauty studio in Chesapeake, VA, specializing in Korean lash lifts, brow transformations, and waxing services.",
  serviceAreas: ["Chesapeake, VA"],
  contact: {
    phone: { value: "619-458-2483", confirmed: true },
    email: { value: null, confirmed: false },
    address: { value: null, confirmed: false },
    hours: {
      value: "Monday-Thursday 10 AM-5 PM, Friday 10 AM-4 PM, Saturday-Sunday Closed",
      confirmed: true,
    },
  },
  social: {
    instagram: {
      value: "https://www.instagram.com/theskinsanctuary_co",
      confirmed: true,
    },
  },
  booking: {
    platform: "Calendly",
    url: "https://calendly.com/theskinsanctuary",
    confirmed: true,
  },
  pricing: { mode: "exact", published: true },
  cta: {
    primary: { label: "book my lash lift", href: "https://calendly.com/theskinsanctuary" },
    secondary: { label: "view services", href: "/services" },
  },
};
```

Important: keep address value null or unconfirmed so it does not render publicly. Do not emit full address in schema if it can appear in rendered JSON-LD on the public page.

## Navigation

Desktop nav:
- Services -> /services
- Lash Lift -> /lash-lift
- Brows -> /brows
- Reviews -> /reviews
- About -> /about
- Book Now -> https://calendly.com/theskinsanctuary

Mobile nav:
- Same links
- Include visible phone link: 619-458-2483
- Sticky bottom CTA: book my lash lift

Header behavior:
- Transparent or warm ivory on top of hero, then solid warm ivory on scroll.
- Primary nav CTA can say Book Now.
- Sticky CTA must say book my lash lift.

## Conversion hierarchy

Homepage section order:
1. Hero focused on Korean Lash Lift & Tint
2. Trust strip: Licensed in VA, Chesapeake, VA, 5.0-star client rating, Korean Lash Lifts, Brows, Waxing, 619-458-2483
3. Signature services: Korean Lash Lift & Tint, Brow Wax, Lami, Tint, Soft Girl Summer
4. Lash Lift landing preview with review proof
5. Brow transformation preview
6. Full service menu preview
7. Reviews/testimonials
8. About Monica
9. Policies teaser
10. Final CTA

Primary CTA language:
- book my lash lift

Secondary CTA language:
- view services
- call Monica
- book with Monica

Do not use vague CTA copy like Request Availability unless the design needs a softer secondary CTA. Booking is available through Calendly.

## Homepage hero copy

Use or adapt:

Eyebrow:
Licensed Esthetician in Chesapeake, VA

Headline:
Korean lash lifts, soft brows, and smooth skin - all in one calm beauty studio.

Subheadline:
The Skin Sanctuary Co is Monica Talbot's boutique studio for Korean lash lifts, brow transformations, and waxing in Chesapeake, VA. Come in for a low-maintenance beauty routine that still feels polished, feminine, and completely you.

Primary CTA:
book my lash lift

Secondary CTA:
view services

Phone line:
Questions? Call 619-458-2483

Hero proof points:
- Licensed in VA
- 5.0-star client rating
- Chesapeake, VA

## Signature services copy

### Korean Lash Lift & Tint
Headline:
Your natural lashes, lifted.

Body:
Monica's Korean Lash Lift & Tint is designed for a soft, naturally lifted look with longer-lasting results and a healthier lift. It is a client favorite for straight, stubborn, fine, or low-maintenance lashes.

Price:
$130

CTA:
book my lash lift

### Brow Wax, Lami, Tint
Headline:
The full brow refresh.

Body:
Shape, lift, and define your brows in one appointment. This signature brow service combines wax, lamination, and tint for fuller-looking brows and an easier everyday routine.

Price:
$125

CTA:
book my brow refresh

### Soft Girl Summer
Headline:
The full soft-girl appointment.

Body:
The ultimate way to enter your soft girl era: Monica's signature brow babe plus a Korean lash lift, all during one appointment.

Price:
$255

CTA:
book the full glow-up

## Full services data

Create or update `seed/services.json` or equivalent content file to match this data exactly.

```json
[
  {
    "category": "Signature Services",
    "description": "Client-favorite lash and brow services designed for a polished, low-maintenance beauty routine.",
    "items": [
      {
        "name": "Korean Lash Lift & Tint",
        "price": "$130",
        "description": "Leveling up your lift through the use of the Korean method, designed for longer-lasting results and a healthier lift.",
        "featured": true,
        "ctaLabel": "book my lash lift",
        "bookingUrl": "https://calendly.com/theskinsanctuary"
      },
      {
        "name": "Brow Wax, Lami, Tint",
        "price": "$125",
        "description": "Wax, lamination, and tint for a complete brow refresh.",
        "featured": true,
        "ctaLabel": "book my brow refresh",
        "bookingUrl": "https://calendly.com/theskinsanctuary"
      },
      {
        "name": "Soft Girl Summer",
        "price": "$255",
        "description": "The ultimate way to enter your soft girl era. Includes the signature brow babe plus a Korean lash lift, all during one appointment.",
        "featured": true,
        "ctaLabel": "book the full glow-up",
        "bookingUrl": "https://calendly.com/theskinsanctuary"
      }
    ]
  },
  {
    "category": "Back2School",
    "description": "September 2026 only. No student status required.",
    "promotional": true,
    "expiresAt": "2026-10-01T00:00:00-04:00",
    "items": [
      { "name": "Korean Lash Lift & Tint", "price": "$110" },
      { "name": "Brow Lami + Wax", "price": "$75", "description": "This special does not include a tint." },
      { "name": "Brow Wax", "price": "$18" }
    ]
  },
  {
    "category": "Brows",
    "items": [
      { "name": "Brow Wax & Tint", "price": "$55" },
      { "name": "Brow Lami & Wax", "price": "$95" },
      { "name": "Brow Wax", "price": "$25" },
      { "name": "Brow Wax, Lami, Tint", "price": "$125" }
    ]
  },
  {
    "category": "Waxing",
    "items": [
      { "name": "Full Arm Wax", "price": "$65" },
      { "name": "Half Arm Wax", "price": "$30" },
      { "name": "Underarm Wax", "price": "$30" },
      { "name": "Lip Wax", "price": "$10" },
      { "name": "Half Leg Wax", "price": "$50" },
      { "name": "Full Leg Wax", "price": "$65" },
      { "name": "Bikini Wax", "price": "$50" },
      { "name": "Brazilian Wax", "price": "$65" }
    ]
  },
  {
    "category": "Lashes",
    "items": [
      {
        "name": "Korean Lash Lift & Tint",
        "price": "$130",
        "description": "Leveling up your lift through the use of the Korean method, designed for longer-lasting results and a healthier lift."
      },
      { "name": "Lash Fill — Existing Clients", "price": "$95" },
      { "name": "Patch Test", "price": "$0" }
    ]
  },
  {
    "category": "Packages",
    "items": [
      {
        "name": "Soft Girl Summer",
        "price": "$255",
        "description": "The signature brow babe plus a Korean lash lift, all during one appointment."
      }
    ]
  }
]
```

## Reviews/testimonials

Use short review quotes as social proof. Do not overstuff the page with every full review. Create a rotating or grid testimonial section with 5-8 strongest snippets.

Review proof summary:
- Google rating: 5.0
- Review count: 12
- Strongest themes: Korean lash lift results, welcoming environment, Monica's attention to detail, relaxing experience, clients feeling confident.

Recommended review snippets:
- "The suite feels like a luxurious oasis!"
- "Monica was so sweet and had amazing attention to detail."
- "Literally obsessed with the results."
- "Such a nice, welcoming environment."
- "The facial was just what I needed, and I left feeling refreshed and new."
- "Seriously THE BEST!! Monica is so talented."
- "My lashes still look perfect."
- "I am OBSESSED with the results every time."

Use names only as provided by the user. Do not invent review data.

## About Monica copy

Use or adapt:

Monica Talbot is a Virginia-licensed esthetician and the owner of The Skin Sanctuary Co in Chesapeake, VA. She specializes in Korean lash lifts, brow services, and waxing with a focus on soft, low-maintenance beauty that still feels intentional and polished.

Clients describe Monica as warm, funny, welcoming, detail-oriented, and deeply caring. Every appointment is designed to feel calm, personal, and comfortable - whether you are coming in for a lash lift, a brow refresh, or a smooth waxing service.

## Hours

Display hours in footer/contact page:

Monday: 10 AM-5 PM
Tuesday: 10 AM-5 PM
Wednesday: 10 AM-5 PM
Thursday: 10 AM-5 PM
Friday: 10 AM-4 PM
Saturday: Closed
Sunday: Closed

Do not pair hours with a street address.

## Policies

Create a clear policies section or `/policies` page.

Cancellation policy:
Your appointment time is reserved just for you. Please cancel or reschedule at least 24 hours before your appointment. Cancellations made with less than 24 hours' notice may be subject to a fee of 50% of the scheduled service total.

No-show policy:
Clients who do not arrive for their appointment without notice may be charged up to 100% of the scheduled service total and may be required to prepay for future appointments.

Late policy:
Please arrive on time. If you are more than 10 minutes late, your service may need to be shortened or rescheduled to avoid affecting the next client. If the appointment cannot be completed due to lateness, it may be treated as a late cancellation.

Booking policy:
Appointments are booked through Calendly. Some services may require a card on file or deposit, depending on Monica's current booking settings.

## Design system guidance

Keep the Editorial Atelier feel, but rebrand for The Skin Sanctuary Co.

Mood:
- Warm ivory
- Soft clay/blush
- Cocoa brown
- Taupe
- Muted champagne
- Clean editorial whitespace
- Feminine but not childish
- Luxury but not cold

Suggested palette:
```css
@theme {
  --color-porcelain: #fbf8f3;
  --color-ivory: #f7efe7;
  --color-linen: #eadfd5;
  --color-clay: #b79b8b;
  --color-blush: #d4a59b;
  --color-cocoa: #4a352b;
  --color-espresso: #251d17;
  --color-champagne: #d8bf9c;
  --color-hairline: #d8c9b3;
}
```

Typography:
- Keep or use an elegant serif for headings.
- Keep or use a clean sans for body.
- Favor lowercase CTA styling only where intentional, especially `book my lash lift`.

Visual style:
- Soft hero imagery with real lash/brow/detail shots.
- Treatment-room imagery if available.
- Use rounded image corners sparingly; avoid bubbly salon aesthetics.
- Add subtle editorial numbers for service categories.
- Use gentle hover zooms and scroll reveals from the template.

## Components to create or update

### `BookingButton`
Props:
- label?: string
- variant?: "primary" | "secondary" | "text"
- trackingId?: string

Defaults:
- label: "book my lash lift"
- href: "https://calendly.com/theskinsanctuary"

Use external link behavior:
- Open in same tab unless design system currently opens external booking links in a new tab.
- Add `rel="noopener noreferrer"` only if using target blank.

### `StickyBookingBar`
Mobile-first sticky bottom bar.

Must include:
- Primary button: book my lash lift -> Calendly
- Secondary phone link: 619-458-2483 -> tel:+16194582483

Desktop behavior:
- Optional subtle floating CTA after scroll.

### `ServiceCard`
Fields:
- category
- name
- price
- description
- featured
- ctaLabel
- bookingUrl

Featured services should have stronger editorial layout.

### `ServiceMenu`
Group services by category.
Use exact prices.
Do not show durations unless Monica confirms them.

### `ReviewCard`
Use short quote, reviewer first name/full name as provided, and optional service tag if known.

### `TrustStrip`
Items:
- Licensed in VA
- Chesapeake, VA
- 5.0-star client rating
- Korean Lash Lifts
- Brows
- Waxing
- 619-458-2483

### `LocationDisplay`
Return only `Chesapeake, VA`.
Never render street address.

## SEO implementation

Target local SEO without displaying the full address.

Primary SEO phrases:
- Korean lash lift Chesapeake VA
- lash lift Chesapeake VA
- brow lamination Chesapeake VA
- brow wax and tint Chesapeake VA
- waxing Chesapeake VA
- esthetician Chesapeake VA
- beauty studio Chesapeake VA

Homepage title:
The Skin Sanctuary Co | Korean Lash Lifts & Brows in Chesapeake, VA

Homepage meta description:
Book Korean lash lifts, brow transformations, and waxing with Monica Talbot, a licensed esthetician in Chesapeake, VA. Schedule your appointment through Calendly.

Lash Lift page title:
Korean Lash Lift & Tint in Chesapeake, VA | The Skin Sanctuary Co

Lash Lift meta description:
Book a Korean Lash Lift & Tint with Monica Talbot in Chesapeake, VA. Designed for a naturally lifted, low-maintenance lash look with longer-lasting results.

Brows page title:
Brow Wax, Lamination & Tint in Chesapeake, VA | The Skin Sanctuary Co

Brows meta description:
Book brow wax, lamination, and tint services with Monica Talbot at The Skin Sanctuary Co in Chesapeake, VA.

Services page title:
Services & Pricing | The Skin Sanctuary Co in Chesapeake, VA

Services meta description:
View current pricing for Korean lash lifts, brow services, waxing, and signature packages at The Skin Sanctuary Co in Chesapeake, VA.

### Structured data
Use LocalBusiness/BeautySalon schema carefully.

Do include:
- name: The Skin Sanctuary Co
- url: https://theskinsanctuary.co
- telephone: +16194582483
- areaServed: Chesapeake, VA
- founder/employee/person: Monica Talbot if schema supports it
- openingHoursSpecification
- sameAs Instagram URL
- aggregateRating only if implemented honestly as 5.0 and 12 reviews and if allowed by current schema strategy

Do not include:
- Full streetAddress
- PostalCode
- Geo coordinates
- Map URL

If the current `JsonLd.tsx` only emits LocalBusiness schema when address is confirmed, modify it so it can emit a no-street-address schema safely, or disable LocalBusiness schema until a compliant partial schema is supported. Do not set address confirmed true.

## Accessibility requirements

- All buttons and links need descriptive accessible labels.
- Phone links should be keyboard accessible.
- Sticky CTA must not cover content; add bottom padding on mobile.
- Use visible focus styles.
- Maintain color contrast on blush/clay buttons.
- Alt text should describe the actual image, not keyword-stuffed SEO text.
- Do not put important service/pricing text only inside images.

## Performance requirements

- Static generation for all pages.
- Optimize local images with Next Image.
- Use responsive sizes for hero and service imagery.
- Keep third-party scripts minimal.
- Do not embed Calendly widget by default if it hurts performance. Prefer CTA links to Calendly.
- If embedding Calendly is requested later, lazy-load it only on the contact/booking section.

## Tracking and analytics hooks

Add data attributes for future analytics:

- `data-track="header_book_now"`
- `data-track="hero_book_my_lash_lift"`
- `data-track="sticky_book_my_lash_lift"`
- `data-track="service_korean_lash_lift"`
- `data-track="service_brow_wax_lami_tint"`
- `data-track="phone_click"`
- `data-track="instagram_click"`

No analytics vendor is required unless already installed.

## Content cleanup tasks

Remove or replace all references to:
- Bridal
- Wedding
- Photographer
- Portfolio if it implies photography
- Request Availability
- Square
- Welcome Facial
- Full street address
- Get Directions
- Map block
- Old Square service names not in the new menu

Replace with:
- Korean lash lift
- Brow transformation
- Waxing
- Beauty studio
- Chesapeake, VA
- Calendly
- Book my lash lift
- 619-458-2483

## Image implementation

The user will dump Monica's best Instagram/camera roll photos into assets.

Recommended image mapping:
- Hero: best lash/brow/treatment-room image
- Signature lash section: close-up lash lift result
- Brow section: brow result/detail image
- About: Monica portrait or studio image
- Reviews: optional client-result images only if appropriate
- OG image: branded logo or best soft beauty image with readable crop

Do not use client names with images unless permission is confirmed.

## Footer requirements

Footer must include:
- The Skin Sanctuary Co
- Chesapeake, VA
- 619-458-2483 as a tel link
- Instagram link
- Calendly booking link
- Hours
- Copyright

Footer must not include:
- Full street address
- Map/directions link

## Contact page requirements

Contact page should be conversion-focused, not a heavy form page.

Recommended sections:
1. Book with Monica
2. Calendly CTA button
3. Phone number
4. Hours
5. Chesapeake, VA location display only
6. Policies summary
7. Instagram link

If the template includes a contact form, either:
- Keep it only if it is wired correctly, or
- Replace primary contact path with phone + Calendly.

## QA checklist

Before finishing, verify:
- `npm run typecheck` passes
- `npm run lint` passes
- `npm run build` passes
- No full street address appears in code-rendered public pages
- No Square links appear
- No $35 Welcome Facial appears
- Sticky CTA says exactly `book my lash lift`
- Sticky CTA links to `https://calendly.com/theskinsanctuary`
- Phone number is visible in header/footer/mobile sticky/contact areas
- Services and prices match the Calendly menu exactly
- Homepage prioritizes Korean Lash Lift & Tint
- Brow Wax, Lami, Tint is treated as the main signature brow service
- SEO titles and descriptions reference Chesapeake, VA but not the full address
- Images have meaningful alt text
- Calendly is linked, not eagerly embedded sitewide

## Final implementation priority

1. Update `lib/site.ts`
2. Replace placeholder/demo content
3. Rename/remove `/bridal` route group
4. Build `/`, `/services`, `/lash-lift`, `/brows`, `/reviews`, `/about`, `/contact`
5. Update service data
6. Update header/footer/sticky CTA
7. Rebrand `app/globals.css`
8. Replace images when assets are available
9. Update SEO/JSON-LD safely
10. Run typecheck/lint/build

