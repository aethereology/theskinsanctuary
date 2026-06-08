# Stripe Email Setup — Shop Purchases

Both purchase emails are handled by **Stripe**, not by the app. No email
service, API key, or webhook is required. There are two emails:

1. **Customer receipt** — sent automatically by Stripe to the buyer.
2. **Owner order alert** — sent by Stripe to Monica when a payment succeeds.

Configure both in the Stripe Dashboard once. Do this for **both** the test and
live environments (settings are per-mode).

## 1. Customer receipt (buyer)

Stripe → **Settings → Customer emails**
(https://dashboard.stripe.com/settings/emails)

- Turn **"Successful payments"** ON.
- Optional: add the business name / logo / brand color so the receipt matches
  The Skin Sanctuary Co.

The app already collects the customer's email during Checkout, so Stripe has an
address to send the receipt to — nothing else is needed in code.

> ⚠️ **Live mode only:** Stripe sends receipt emails for real payments in **live
> mode**. In **test mode**, receipts are suppressed by design, so the buyer will
> not get an email for a test purchase. To verify the receipt end to end, use a
> real live-mode card (you can refund it afterward).

## 2. Owner order alert (Monica → monicaemm7@gmail.com)

Stripe → **Settings → Team and security**
(https://dashboard.stripe.com/settings/team)

- Make sure **monicaemm7@gmail.com** is the account owner **or** an added team
  member on the account.

Then, signed in as that user, go to **Personal → Notifications**
(https://dashboard.stripe.com/settings/user/notifications) and enable email
notifications for **"Successful payments"**.

- Each successful payment will email monicaemm7@gmail.com with the amount and a
  link to the payment in the dashboard.
- The buyer's phone number (collected at Checkout) and the item appear on the
  payment / Checkout Session detail in the dashboard for pickup coordination.

## Environment variables (already used by the app)

In `.env.local` (and in the hosting provider's env settings):

- `STRIPE_SECRET_KEY` — server-side Stripe API key.
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — publishable key.
- `NEXT_PUBLIC_APP_URL` — base URL used to build the success/cancel redirect
  URLs (e.g. `https://theskinsanctuary.co`). Must be set correctly in production
  so the thank-you page link works.

`STRIPE_WEBHOOK_SECRET` is present in the env file but is **not used** by this
design (emails are dashboard-driven; there is no webhook handler).

## What the app does

- `app/api/checkout/route.ts` creates the Stripe Checkout Session, collects the
  buyer's email + phone, and redirects to
  `/shop/success?session_id={CHECKOUT_SESSION_ID}` on success or
  `/shop?canceled=true` on cancel.
- `app/shop/success/page.tsx` retrieves the paid session and shows the order
  summary + pickup reminder.
