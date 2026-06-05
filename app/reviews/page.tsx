import Image from "next/image";
import { Metadata } from "next";
import { site } from "@/lib/site";
import { reviews } from "@/lib/data";
import ReviewCard from "@/components/ReviewCard";
import BookingButton from "@/components/BookingButton";
import reviewsHeroImage from "@/assets/reviewsimage2.png";

export const metadata: Metadata = {
  title: "Reviews | The Skin Sanctuary Co",
  description: "Real client reviews for The Skin Sanctuary Co in Chesapeake, VA — a 5.0-star studio for Korean lash lifts, brow work, and waxing with Monica Talbot.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[80vh] pt-28 pb-20 overflow-hidden bg-linen">
        {/* Full-bleed background image — woman sits on the right; mobile shifts focus right to keep her face in frame */}
        <Image
          src={reviewsHeroImage}
          alt="A client relaxing with skincare in The Skin Sanctuary Co's calm, light-filled studio"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[82%_center] md:object-[center_top]"
        />
        {/* Scrim anchored on the left so the copy stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/45 to-espresso/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/10 via-transparent to-espresso/35" />

        <div className="container relative z-10">
          <div className="max-w-xl text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Client Mail
            </h1>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex justify-start gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-champagne text-2xl">★</span>
                ))}
              </div>
              <BookingButton
                label="Leave me a review"
                href="https://www.google.com/search?client=safari&hs=wkLV&sca_esv=6253cd38f2fad33d&hl=en-us&cs=0&output=search&kgmid=/g/11nbqlgfqc&q=The+Skin+Sanctuary+Co&shem=dlvsc,epsd1,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=c65a82c198bd3a22&utm_source=dlvsc,epsd1,rimspwouoe,sh/x/loc/uni/m1/1"
                trackingId="reviews_leave_a_review"
              />
            </div>
            <p className="text-lg text-porcelain/90 leading-relaxed">
              A perfect {site.trust.rating} stars across {site.trust.reviewCount} client reviews — here's what they had to say.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} quote={review.quote} reviewer={review.reviewer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory text-center">
        <div className="container">
          <h2 className="font-serif text-3xl text-cocoa mb-6">
            Ready to see for yourself?
          </h2>
          <BookingButton trackingId="reviews_cta" />
        </div>
      </section>
    </>
  );
}
