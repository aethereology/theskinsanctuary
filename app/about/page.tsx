import Image from "next/image";
import { Metadata } from "next";
import { about } from "@/lib/data";
import BookingButton from "@/components/BookingButton";
import monicaImage from "@/assets/monica2.jpeg";

export const metadata: Metadata = {
  title: "About Monica | The Skin Sanctuary Co",
  description: "Meet Monica Talbot, the Virginia-licensed esthetician behind The Skin Sanctuary Co in Chesapeake, VA — a boutique studio built around soft, intentional, low-maintenance beauty.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container max-w-3xl text-center">
          <h1 className="font-serif text-5xl text-cocoa mb-6">About Monica</h1>
          <p className="text-lg text-espresso">{about.credential}</p>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={monicaImage}
                alt="Monica Talbot, licensed esthetician and owner of The Skin Sanctuary Co"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                placeholder="blur"
                className="object-cover object-top"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl text-cocoa mb-6">The studio, and the hands behind it</h2>
              <p className="text-espresso mb-6 leading-relaxed">{about.bio}</p>
              <p className="text-espresso leading-relaxed">{about.personality}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cocoa text-porcelain text-center">
        <div className="container">
          <h2 className="font-serif text-3xl text-porcelain mb-6">
            Come see Monica in studio
          </h2>
          <BookingButton label="book an appointment" variant="light" trackingId="about_cta" />
        </div>
      </section>
    </>
  );
}
