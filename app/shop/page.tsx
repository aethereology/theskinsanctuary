import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
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
                  <h2 className="font-serif text-2xl text-cocoa mb-3">
                    {product.name}
                  </h2>
                  <p className="text-clay font-semibold text-sm mb-4">
                    {product.price}
                  </p>
                  <p className="text-text-secondary text-sm mb-6">
                    {product.description}
                  </p>
                  {product.details?.length ? (
                    <ul className="space-y-3 mb-6">
                      {product.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-3 text-sm text-espresso"
                        >
                          <span className="text-clay">+</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {product.sections?.length ? (
                    <details className="group border-y border-hairline/50 py-4 mb-8">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold uppercase tracking-widest text-clay [&::-webkit-details-marker]:hidden">
                        <span>View lotion details</span>
                        <span className="text-lg leading-none transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <div className="space-y-5 pt-5">
                        {product.sections.map((section) => (
                          <section
                            key={section.title}
                            className="border-t border-hairline/50 pt-5 first:border-t-0 first:pt-0"
                          >
                            <div className="mb-2 flex items-baseline justify-between gap-4">
                              <h3 className="font-serif text-xl text-cocoa">
                                {section.title}
                              </h3>
                              {section.price ? (
                                <p className="text-sm font-semibold text-clay whitespace-nowrap">
                                  {section.price}
                                </p>
                              ) : null}
                            </div>
                            {section.description ? (
                              <p className="text-sm text-text-secondary mb-4">
                                {section.description}
                              </p>
                            ) : null}
                            {section.details?.length ? (
                              <ul className="space-y-2">
                                {section.details.map((detail) => (
                                  <li
                                    key={detail}
                                    className="flex gap-3 text-sm text-espresso"
                                  >
                                    <span className="text-clay">+</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                            {section.timing?.length ? (
                              <div className="mt-4 border-l-2 border-clay/40 pl-4">
                                <p className="text-[0.68rem] font-semibold text-clay uppercase tracking-widest mb-2">
                                  Processing time
                                </p>
                                <ul className="space-y-1">
                                  {section.timing.map((time) => (
                                    <li
                                      key={time}
                                      className="text-sm text-text-secondary"
                                    >
                                      {time}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </section>
                        ))}
                      </div>
                    </details>
                  ) : null}
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
