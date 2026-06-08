import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/lib/data";

function getStripe() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    throw new Error("Stripe secret key is not configured.");
  }

  return new Stripe(stripeSecretKey, {
    apiVersion: "2026-05-27.dahlia",
  });
}

function parseAmount(price: string) {
  const numeric = Number(price.replace(/[^\d.]/g, ""));
  if (Number.isNaN(numeric)) {
    throw new Error(`Invalid price value: ${price}`);
  }
  return Math.round(numeric * 100);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const productName = body?.productName;

  if (!productName || typeof productName !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid productName." },
      { status: 400 },
    );
  }

  const product = products.find((item) => item.name === productName);
  if (!product) {
    return NextResponse.json(
      { error: "Product not found." },
      { status: 404 },
    );
  }

  const domain = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const stripe = getStripe();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: parseAmount(product.price),
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    phone_number_collection: { enabled: true },
    metadata: { productName: product.name },
    success_url: `${domain}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domain}/shop?canceled=true`,
  });

  return NextResponse.json({ url: session.url });
}
