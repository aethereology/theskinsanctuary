import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { welcomeFaq } from "@/lib/data";
import { BookButton } from "@/components/Booking";
import { ReviewCard, FAQAccordion } from "@/components/atoms";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "$35 Welcome Facial",
  description:
    "New to The Skin Sanctuary Co? Start with the $35 Welcome Facial and book your first visit in Chesapeake, VA.",
  alternates: { canonical: "/welcome-facial" },
};

const delay = (ms: number): CSSProperties => ({ ["--reveal-delay" as string]: ms + "ms" });

const benefits: [string, string][] = [
  ["Low-commitment first visit", "A simple way to dip in without a big appointment or upsell pressure."],
  ["Experience the studio", "See the space, meet Monica, and get a feel for the vibe."],
  ["A refresh when you don’t know where to start", "Perfect for skin that just needs a little reset."],
  ["An easy entry point", "Into facials and skin-focused self-care, with care tailored to you."],
];

export default function WelcomePage() {
  return (
    <main>
      <section className="wph">
        <div className="container wph__inner">
          <div className="wph__copy">
            <div className="phero__num reveal">/ 03 — New client offer · $35</div>
            <h1 className="display display--xxl reveal" style={{ ...delay(80), marginTop: 14 }}>
              Start here
              <br />
              <span className="italic" style={{ color: "var(--tss-mushroom)" }}>
                with the
                <br />
                $35 Welcome
                <br />
                Facial.
              </span>
            </h1>
            <p className="lede reveal" style={{ ...delay(160), marginTop: 28, maxWidth: "46ch" }}>
              If you&apos;ve been wanting to try The Skin Sanctuary Co, this is the perfect first
              appointment. The Welcome Facial gives new clients an easy way to experience
              Monica&apos;s space, approach, and care at an introductory price.
            </p>
            <div className="wph__cta reveal" style={delay(220)}>
              <BookButton className="btn btn--primary btn--lg">Book the Welcome Facial</BookButton>
              <Link className="btn btn--secondary btn--lg" href="/services">
                View Full Pricing
              </Link>
            </div>
          </div>
          <div className="wph__photo reveal" style={delay(160)}>
            <div className="photo photo--tall photo--v2" data-cap="WELCOME FACIAL" />
            <div className="wph__price-tag">
              <span className="eyebrow">Introductory</span>
              <span className="display display--lg" style={{ marginTop: 4, lineHeight: 1 }}>
                $35
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section band-canvas-soft">
        <div className="container">
          <div className="wb__head reveal">
            <div className="sec-num">/ Why new clients love it</div>
            <h2 className="display display--lg" style={{ marginTop: 10 }}>
              An easy first visit.
            </h2>
          </div>
          <div className="wb__grid">
            {benefits.map(([t, p], i) => (
              <div key={i} className="wb__c reveal" style={delay(i * 80)}>
                <div className="wb__n">0{i + 1}</div>
                <h4 className="display display--md" style={{ margin: "12px 0 8px" }}>
                  {t}
                </h4>
                <p className="body" style={{ margin: 0, color: "var(--tss-fg-muted)" }}>
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="we__inner reveal">
            <div>
              <div className="sec-num">/ What to expect</div>
              <h2 className="display display--xl italic" style={{ marginTop: 14 }}>
                A calm, unhurried welcome.
              </h2>
            </div>
            <p className="lede">
              You can expect a warm, relaxed appointment experience with thoughtful care and a focus
              on making your first visit feel comfortable from the moment you arrive — from a personal
              skin consult to a curated routine you can take home.
            </p>
          </div>
        </div>
      </section>

      <section className="section--tight band-sage">
        <div className="container" style={{ maxWidth: 820 }}>
          <ReviewCard
            large
            quote="The facial was just what I needed, and I left feeling refreshed and new."
            author="Candy Robertson"
            theme="Facial result"
          />
        </div>
      </section>

      <section className="section--tight">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="sec-num reveal">/ Quick FAQ</div>
          <h2 className="display display--lg reveal" style={{ ...delay(80), marginTop: 10, marginBottom: 24 }}>
            Good to know.
          </h2>
          <div className="reveal" style={delay(160)}>
            <FAQAccordion items={welcomeFaq} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Treat your skin to a fresh start."
        sub="The Welcome Facial is active for new clients today"
        label="Book the Welcome Facial"
      />
    </main>
  );
}
