import Image from "next/image";
import { Metadata } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import BookingButton from "@/components/BookingButton";
import servicesPageBg from "@/assets/servicespagebg.png";

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
          <h1 className="font-serif text-5xl text-white mb-4">Services &amp; Pricing</h1>
          <p className="text-lg text-porcelain/90 max-w-2xl mx-auto">
            Every service is performed intentionally and with transparency. The future you will wish you had booked sooner.
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
