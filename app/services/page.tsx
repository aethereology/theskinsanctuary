import { Metadata } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import BookingButton from "@/components/BookingButton";

export const metadata: Metadata = {
  title: "Services & Pricing | The Skin Sanctuary Co",
  description:
    "Current pricing for Korean lash lifts, brow lamination, waxing, and signature packages at The Skin Sanctuary Co in Chesapeake, VA. Booked directly with Monica through Calendly.",
};

export default function ServicesPage() {
  const signatureServices = services[0].items;

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12">
        <div className="container text-center">
          <h1 className="font-serif text-5xl text-cocoa mb-4">Services &amp; pricing</h1>
          <p className="text-lg text-espresso max-w-2xl mx-auto">
            Every service is performed personally by Monica, with transparent pricing and no upsells. Choose your time through Calendly whenever you're ready.
          </p>
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-3xl text-cocoa mb-8">Signature Services</h2>
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
      {services.slice(1).map((category) => (
        <section key={category.category} className="py-16">
          <div className="container max-w-3xl">
            <h2 className="font-serif text-2xl text-cocoa mb-8">
              {category.category}
            </h2>
            <div className="divide-y divide-hairline">
              {category.items.map((item) => (
                <ServiceCard
                  key={item.name}
                  name={item.name}
                  price={item.price}
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
