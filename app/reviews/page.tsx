import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { reviewsAll, business } from "@/lib/data";
import { ReviewCard } from "@/components/atoms";
import { Marquee, ThemesGrid, CTABanner } from "@/components/sections";
import { BookButton } from "@/components/Booking";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "See what clients are saying about The Skin Sanctuary Co in Chesapeake, VA, from lash lifts to facials, brows, and the relaxing studio experience.",
  alternates: { canonical: "/reviews" },
};

const delay = (ms: number): CSSProperties => ({ ["--reveal-delay" as string]: ms + "ms" });

export default function ReviewsPage() {
  return (
    <main>
      <section className="rph">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="phero__num reveal">/ 05 — Client reviews</div>
          <h1 className="display display--xxl reveal" style={{ ...delay(80), marginTop: 14 }}>
            <span className="italic">5.0 stars</span>
            <br />
            on Google.
          </h1>
          <p className="lede reveal" style={{ ...delay(160), margin: "24px auto 0", maxWidth: "60ch" }}>
            Clients describe The Skin Sanctuary Co as welcoming, relaxing, detailed, and worth coming
            back to.
          </p>
          <div className="rph__rating reveal" style={delay(220)}>
            <span className="rph__n">5.0</span>
            <div className="rph__r-meta">
              <span className="stars" style={{ fontSize: 18, letterSpacing: "4px" }}>★★★★★</span>
              <span className="small" style={{ marginTop: 2 }}>
                12 Google reviews
              </span>
            </div>
          </div>
        </div>
      </section>
      <Marquee />
      <section className="section">
        <div className="container">
          <div className="rp__feat reveal">
            <ReviewCard
              large
              quote="The suite feels like a luxurious oasis!"
              author="Jessica Conley"
              theme="Environment"
            />
          </div>
          <div className="rp__grid">
            {reviewsAll.map((r, i) => (
              <div key={i} className="reveal" style={delay(i * 40)}>
                <ReviewCard {...r} dark={i === 4} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ThemesGrid />

      <section className="section--tight">
        <div className="container" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <BookButton className="btn btn--primary btn--lg">Book Now</BookButton>
          <a className="btn btn--secondary btn--lg" href={business.googleProfileUrl} target="_blank" rel="noreferrer">
            <span className="stars">★★★★★</span>
            Leave a Review
          </a>
        </div>
      </section>

      <CTABanner title="Want results like these?" sub="Reserve your visit" />
    </main>
  );
}
