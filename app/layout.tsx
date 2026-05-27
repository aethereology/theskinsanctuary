import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/data";
import { BookingProvider } from "@/components/Booking";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBookingBar } from "@/components/StickyBookingBar";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "The Skin Sanctuary Co | Chesapeake Esthetician",
    template: "%s | The Skin Sanctuary Co",
  },
  description:
    "Personalized facials, Korean lash lifts, brows, and waxing in Chesapeake, VA. Book with Monica Talbot at The Skin Sanctuary Co.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large" } as Metadata["robots"],
  openGraph: {
    type: "website",
    siteName: "The Skin Sanctuary Co",
    title: "The Skin Sanctuary Co | Chesapeake Esthetician",
    description:
      "Personalized facials, Korean lash lifts, brows, and waxing in Chesapeake, VA.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Skin Sanctuary Co | Chesapeake Esthetician",
    description:
      "Personalized facials, Korean lash lifts, brows, and waxing in Chesapeake, VA.",
  },
};

export const viewport: Viewport = {
  themeColor: "#1F3229",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: business.name,
  url: business.siteUrl,
  telephone: "+1-619-458-2483",
  description:
    "The Skin Sanctuary Co offers facials, Korean lash lifts, brow services, and waxing in Chesapeake, Virginia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: "US",
  },
  sameAs: [business.instagramUrl],
  priceRange: "$$",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "10:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "10:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "10:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "10:00", closes: "16:00" },
  ],
  founder: { "@type": "Person", name: "Monica Talbot" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BookingProvider>
          <AnnouncementBar />
          <Header />
          {children}
          <Footer />
          <StickyBookingBar />
          <RevealOnScroll />
          <div className="float-monogram" aria-hidden="true">
            tss
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
