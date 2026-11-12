# Calendly service-link verification checklist

## Purpose

The website's **Book** button for each service should open the corresponding
Calendly **event detail and appointment availability**, not the general list of
services. The displayed title and price must match the current public menu.

**Official account:** https://calendly.com/theskinsanctuary

**Source:** Direct event URLs preserved in the repository before the November
2026 menu synchronization. The November 12, 2026 Calendly screenshots supplied
by the business owner confirm **event names and prices**, but do not expose the
destination URLs. The public Calendly site could not be read by the automation
environment, so these URLs **require live QA before merging**.

## Live event QA (16 event types)

Open each booking link and confirm: page loads, event title corresponds to the
website service, displayed price matches (if Calendly shows it), and an
appointment slot can be selected.

| Website service | Price | Historical booking link | Live checked |
| --- | ---: | --- | :---: |
| Korean Lash Lift & Tint | $130 | https://calendly.com/theskinsanctuary/kll | [ ] |
| Brow Wax, Lami, Tint | $130 | https://calendly.com/theskinsanctuary/new-meeting | [ ] |
| The Skin Sanctuary Soft Girl | $255 | https://calendly.com/theskinsanctuary/soft-girl-summer-255 | [ ] |
| Lash Fill — Existing Clients | $95 | https://calendly.com/theskinsanctuary/lash-fill-existing-clients-95 | [ ] |
| Patch Test | $0 | https://calendly.com/theskinsanctuary/patch-test-0 | [ ] |
| Brow Lami + Wax | $95 | https://calendly.com/theskinsanctuary/browlami | [ ] |
| Brow Wax + Tint | $55 | https://calendly.com/theskinsanctuary/brow-wax-tint | [ ] |
| Brow Wax | $25 | https://calendly.com/theskinsanctuary/brow-wax | [ ] |
| Full Leg Wax | $90 | https://calendly.com/theskinsanctuary/full-leg-wax | [ ] |
| Half Leg Wax | $50 | https://calendly.com/theskinsanctuary/half-leg-wax | [ ] |
| Full Arm Wax | $60 | https://calendly.com/theskinsanctuary/half-arm-wax-30-clone | [ ] |
| Half Arm Wax | $35 | https://calendly.com/theskinsanctuary/underarm-wax-30-clone | [ ] |
| Underarm Wax | $30 | https://calendly.com/theskinsanctuary/underarm-wax | [ ] |
| Lip Wax | $10 | https://calendly.com/theskinsanctuary/lip-wax | [ ] |
| Bikini Wax | $55 | https://calendly.com/theskinsanctuary/brazilian-wax- | [ ] |
| Brazilian Wax | $65 | https://calendly.com/theskinsanctuary/brazilian-wax | [ ] |

### Pay extra attention to inherited Calendly slugs

- **Full Arm Wax** uses `half-arm-wax-30-clone`.
- **Half Arm Wax** uses `underarm-wax-30-clone`.
- **Bikini Wax** uses `brazilian-wax-`.
- **Brow Wax, Lami, Tint** uses `new-meeting`.
- **The Skin Sanctuary Soft Girl** uses the former name `soft-girl-summer-255`.

Calendly event URLs may retain their original slug when event types are
renamed or cloned; a misleading slug is **not proof** of a wrong event, but must
be verified. Do **not** invent a replacement slug. Obtain the exact “Copy link”
URL from Calendly if any mapping is incorrect and update
`lib/service-booking.ts`.

### Other booking buttons

- **Homepage lash-lift hero**, **lash feature**, **sticky mobile CTA** and all
  named signature-service cards open the **specific event**.
- **Header, footer, contact, reviews, about and general ready-to-book buttons**
  intentionally open the **general Calendly services page** so visitors can
  choose an event.
- The Calendly popup loads lazily; test desktop, mobile, opening and closing the
  modal, and standard link navigation with modifier keys.

## Changes and maintenance

- Single event URL map: `lib/service-booking.ts`.
- Service labels, prices and booking URL associations: `lib/data.ts`.
- Generic booking URL: `lib/site.ts` -> `site.booking.url`.
- Specific homepage CTAs: `app/page.tsx`.
- Mobile sticky CTA: `components/StickyBookingBar.tsx`.

Do not change public service prices based on slug text; use the live event title
and pricing. Never merge with a known wrong-service destination.
