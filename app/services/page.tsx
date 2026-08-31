import Image from "next/image";
import { Metadata } from "next";
import { connection } from "next/server";
import { site } from "@/lib/site";
import { getVisibleServiceCategories } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import BookingButton from "@/components/BookingButton";
import servicesPageBg from "@/assets/servicespagebg.png";

export const metadata: Metadata = {
  title: "Services & Pricing | The Skin Sanctuary Co",
  description:
    "Current pricing for Korean lash lifts, brow lamination, waxing, and signature packages at The Skin Sanctuary Co in Chesapeake, VA. Booked directly with Monica through Calendly.",
};

export default async function ServicesPage() {
  await connection();

  const visibleServices = getVisibleServiceCategories(new Date());
  const signatureServices =
    visibleServices.find((category) => category.category === "Signature Services")?.items ?? [];

  return (
    <>
      {/* Header */}
      <section className="relative flex items-center min-h-[70vh] pt-28 pb-20 overflow-hidden bg-linen">
        <Image
          src={servicesPageBg}
          alt="Soft beauty texture background for the services page header"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/45 to-espresso/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/10 via-transparent to-espresso/35" />

        <div className="container relative z-10 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-4">
            Services &amp; Pricing
          </h1>
          <p className="text-lg text-porcelain/90 max-w-2xl mx-auto">
            Every service is performed with intent and transparency. The future you will wish you had booked sooner.
          </p>
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-3xl text-cocoa mb-8">Sanctuary Signatures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureServices.map((service) => (
              <ServiceCard
                key={service.name}
                {...service}
                ctaLabel={service.ctaLabel || site.cta.primary.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {visibleServices
        .filter((category) => category.category !== "Signature Services")
        .map((category) => (
          <section
            key={category.category}
            id={category.promotional ? "back2school" : undefined}
            className={`py-16 ${category.promotional ? "bg-champagne/15" : ""}`}
          >
            <div className="container max-w-3xl">
              {category.promotional && (
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-clay">
                  Limited-time offer
                </p>
              )}
              <h2 className="font-serif text-2xl text-cocoa mb-8">
                {category.category}
              </h2>
              {category.description && (
                <p className="-mt-5 mb-8 text-sm text-espresso">
                  {category.description}
                </p>
              )}
              <div className="divide-y divide-hairline">
                {category.items.map((item) => (
                  <ServiceCard
                    key={item.name}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    bookingUrl={item.bookingUrl}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

      {/* CTA */}
      <section className="py-24 bg-ivory">
        <div className="container text-center">
          <h2 className="font-serif text-5xl sm:text-6xl text-cocoa mb-8 font-bold leading-tight">Ready to book?</h2>
          <BookingButton trackingId="services_book_cta" />
        </div>
      </section>
    </>
  );
}
