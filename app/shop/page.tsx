import Link from "next/link";
import { Metadata } from "next";
import ShopProductGrid from "@/components/ShopProductGrid";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop Aftercare Products | The Skin Sanctuary Co",
  description:
    "Shop lash, brow, and skin aftercare products curated by Monica Talbot at The Skin Sanctuary Co in Chesapeake, VA.",
};

export default function ShopPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container max-w-3xl text-center">
          <p className="text-sm font-medium text-clay uppercase tracking-widest mb-4">
            Sanctuary Shop
          </p>
          <h1 className="font-serif text-5xl text-cocoa mb-6">
            Shop our products from Korea
          </h1>
          <p className="text-lg text-espresso">
            These products are for purchase only by licensed estheticians or
            esthetician students. Valid credentials must be presented at or before pickup.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <ShopProductGrid products={products} />
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-cocoa mb-6">
            Need help choosing?
          </h2>
          <p className="text-espresso mb-8">
            Monica can match the right aftercare to your service, hair texture,
            and routine when you visit the studio.
          </p>
          <Link
            href="/blog"
            className="text-clay hover:text-primary-dark font-medium transition-colors"
          >
            Read aftercare notes &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
