import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import BookingButton from "@/components/BookingButton";
import { flowHoverButtonClasses } from "@/components/ui/flow-hover-button";
import { products } from "@/lib/data";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

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
            Shop our products straight from Korea
          </h1>
          <p className="text-lg text-espresso">
            These products are for purchase only by licensed estheticians or
            esthetician students. Valid credentials must be presented at or before pickup.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <article
                key={product.name}
                className="bg-white rounded-lg border border-hairline/40 overflow-hidden shadow-sm"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-clay uppercase tracking-widest mb-3">
                    {product.bestFor}
                  </p>
                  <h2 className="font-serif text-2xl text-cocoa mb-3">
                    {product.name}
                  </h2>
                  <p className="text-clay font-semibold text-sm mb-4">
                    {product.price}
                  </p>
                  <p className="text-text-secondary text-sm mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {product.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm text-espresso">
                        <span className="text-clay">+</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <a
                      href={site.social.instagram.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        flowHoverButtonClasses,
                        "px-6 py-3 rounded-full bg-accent text-white before:bg-porcelain hover:text-cocoa text-center font-semibold uppercase tracking-widest text-xs",
                      )}
                    >
                      Request to buy
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
