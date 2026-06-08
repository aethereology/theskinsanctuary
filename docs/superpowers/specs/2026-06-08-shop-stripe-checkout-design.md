# Shop Stripe Checkout, Thank-You Page & Emails — Design

Date: 2026-06-08
Status: Approved

## Goal

Complete the shop purchase experience: the full checkout session runs through
Stripe, customers land on a branded "thank you for your purchase" page, and both
purchase emails (customer receipt + owner order alert) are wired correctly.

## Context

- Products are pickup-only, sold only to licensed estheticians / students who
  present valid credentials at pickup. **No shipping.**
- Products live in `lib/data.ts` (`products: Product[]`), prices are display
  strings like `"$45"`.
- `app/api/checkout/route.ts` already creates a Stripe Checkout Session
  (`mode: "payment"`, dynamic `price_data`) and currently redirects to
  `/shop?success=true`.
- `.env.local` has `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`,
  `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_APP_URL`.

## Decisions

- **Emails are handled entirely by the Stripe Dashboard** — no email library,
  no webhook, no order database.
  - Customer receipt: Stripe automatic "Successful payments" customer email.
  - Owner alert: Stripe team notification to `monicaemm7@gmail.com`.
- Thank-you page is a dedicated `/shop/success` route that retrieves the
  Checkout Session server-side to confirm the order.

## Scope

### 1. Harden checkout route — `app/api/checkout/route.ts`
- `success_url` → `${domain}/shop/success?session_id={CHECKOUT_SESSION_ID}`
- `cancel_url` → `${domain}/shop?canceled=true`
- Add `phone_number_collection: { enabled: true }` (pickup coordination).
- Add `metadata: { productName }` to the session.
- Keep existing validation (missing/invalid productName → 400, not found → 404).

### 2. Thank-you page — `app/shop/success/page.tsx`
- Server component. Reads `session_id` from search params.
- Retrieves the Checkout Session from Stripe server-side
  (`stripe.checkout.sessions.retrieve`).
- Renders, in the site's editorial style:
  - "Thank you for your purchase" headline + confirmation copy.
  - Order summary: item name, amount paid, email the receipt was sent to.
  - Pickup reminder: bring valid esthetician credentials to pick up.
  - Link back to `/shop`.
- Graceful fallback when `session_id` is missing/invalid or Stripe is
  unconfigured: show a friendly "we couldn't load your order details, but your
  payment may still be complete — check your email" message rather than crashing.
- Page is dynamic (no static caching of session data).

### 3. Email setup documentation — `docs/stripe-email-setup.md`
Document the dashboard steps (outside the code):
- Enable Stripe → Settings → Customer emails → "Successful payments" = ON
  (customer receipt).
- Enable owner notifications to `monicaemm7@gmail.com` (account owner or added
  team member with "Successful payments" notification enabled).
- Register the webhook endpoint is **not** required for this design.
- Caveat: Stripe sends receipt emails in **live mode only**; test-mode receipts
  are suppressed by design.

## Out of scope (YAGNI)
- Webhook handler (no code-side email or fulfillment work to trigger).
- Resend / custom transactional emails.
- Order persistence / database.

## Verification
- `npm run typecheck`, `npm run lint`, `npm run build` all pass.
- Manual: a test-mode purchase redirects to `/shop/success` and shows order
  details; cancel returns to `/shop?canceled=true`.
