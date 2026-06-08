import Link from "next/link";
import { Metadata } from "next";
import Stripe from "stripe";
import { cn } from "@/lib/utils";
import { flowHoverButtonClasses } from "@/components/ui/flow-hover-button";

export const metadata: Metadata = {
  title: "Thank You for Your Purchase | The Skin Sanctuary Co",
  description:
    "Your order with The Skin Sanctuary Co is confirmed. A receipt has been emailed to you.",
  robots: { index: false, follow: false },
};

// Order details depend on the live Stripe session, so never cache this page.
export const dynamic = "force-dynamic";

interface OrderSummary {
  itemName: string | null;
  amountFormatted: string | null;
  email: string | null;
}

async function fetchOrderSummary(
  sessionId: string | undefined,
): Promise<OrderSummary | null> {
  if (!sessionId) {
    return null;
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    return null;
  }

  try {
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2026-05-27.dahlia",
    });

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    // Only treat the order as confirmed once Stripe reports it paid.
    if (session.payment_status !== "paid") {
      return null;
    }

    const lineItemName = session.line_items?.data?.[0]?.description ?? null;
    const itemName =
      lineItemName ?? (session.metadata?.productName as string | undefined) ?? null;

    const amountFormatted =
      typeof session.amount_total === "number"
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: (session.currency ?? "usd").toUpperCase(),
          }).format(session.amount_total / 100)
        : null;

    return {
      itemName,
      amountFormatted,
      email: session.customer_details?.email ?? null,
    };
  } catch (error) {
    console.error("Failed to retrieve Stripe checkout session", error);
    return null;
  }
}

export default async function ShopSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const order = await fetchOrderSummary(sessionId);

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container max-w-2xl text-center">
          <p className="text-sm font-medium text-clay uppercase tracking-widest mb-4">
            Order Confirmed
          </p>
          <h1 className="font-serif text-5xl text-cocoa mb-6">
            Thank you for your purchase
          </h1>
          <p className="text-lg text-espresso">
            Your order is confirmed
            {order?.email ? (
              <>
                {" "}
                and a receipt is on its way to{" "}
                <span className="font-semibold text-cocoa">{order.email}</span>
              </>
            ) : (
              <> and a receipt has been emailed to you</>
            )}
            .
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-2xl">
          {order ? (
            <div className="bg-white rounded-lg border border-hairline/40 shadow-sm p-8">
              <h2 className="font-serif text-2xl text-cocoa mb-6">
                Order summary
              </h2>
              <dl className="space-y-4">
                {order.itemName ? (
                  <div className="flex items-baseline justify-between gap-6 border-b border-hairline/50 pb-4">
                    <dt className="text-sm uppercase tracking-widest text-clay">
                      Item
                    </dt>
                    <dd className="text-espresso text-right">{order.itemName}</dd>
                  </div>
                ) : null}
                {order.amountFormatted ? (
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-sm uppercase tracking-widest text-clay">
                      Total paid
                    </dt>
                    <dd className="font-semibold text-cocoa text-right">
                      {order.amountFormatted}
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-hairline/40 shadow-sm p-8 text-center">
              <p className="text-espresso">
                We couldn&rsquo;t load your order details here, but if your
                payment went through, your receipt has been emailed to you.
                Please check your inbox, and reach out if anything looks off.
              </p>
            </div>
          )}

          <div className="mt-8 rounded-lg border border-clay/30 bg-ivory p-6">
            <p className="text-sm font-semibold text-clay uppercase tracking-widest mb-2">
              Before pickup
            </p>
            <p className="text-espresso text-sm">
              These products are available for pickup by licensed estheticians
              or esthetician students only. Please bring valid credentials to
              present at or before pickup. Monica will reach out using the phone
              number you provided to arrange your pickup.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/shop"
              className={cn(
                flowHoverButtonClasses,
                "inline-block px-8 py-3 rounded-full bg-accent text-white before:bg-porcelain hover:text-cocoa font-semibold uppercase tracking-widest text-xs",
              )}
            >
              Back to shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
