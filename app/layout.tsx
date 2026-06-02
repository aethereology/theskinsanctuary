import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import JsonLd from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: `${site.brand} | Beauty Studio, Shop & Blog in Chesapeake, VA`,
  description: site.description,
  keywords: [
    "Korean lash lift",
    "lash lift Chesapeake VA",
    "brow lamination",
    "esthetician Chesapeake VA",
    "beauty studio",
    "waxing services",
    "lash aftercare",
    "brow aftercare",
    "beauty products",
  ],
  openGraph: {
    title: `${site.brand} | Beauty Studio, Shop & Blog in Chesapeake, VA`,
    description: site.description,
    url: site.baseUrl,
    siteName: site.brand,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-porcelain text-espresso">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBookingBar />
      </body>
    </html>
  );
}
