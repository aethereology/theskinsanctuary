import { site } from "@/lib/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand,
    url: site.baseUrl,
    telephone: site.contact.phone.value,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chesapeake",
      addressRegion: "VA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Chesapeake, VA",
    },
    priceRange: "$10-$255",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "10:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.trust.rating,
      reviewCount: site.trust.reviewCount,
    },
    sameAs: [site.social.instagram.value],
    description: site.description,
    knowsAbout: [
      "Korean Lash Lift",
      "Brow Services",
      "Waxing",
      "Lash Aftercare",
      "Brow Aftercare",
      "Beauty Products",
      "Beauty Services",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
