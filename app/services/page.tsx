import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { services, prepFaq } from "@/lib/data";
import { ServiceTable, FAQAccordion } from "@/components/atoms";
import { Marquee, CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services and Pricing",
  description:
    "View facials, brow services, Korean lash lifts, waxing, pricing, and appointment times at The Skin Sanctuary Co in Chesapeake, VA.",
  alternates: { canonical: "/services" },
};

const delay = (ms: number): CSSProperties => ({ ["--reveal-delay" as string]: ms + "ms" });

export default function ServicesPage() {
  return (
    <main>
      <section className="phero">
        <div className="container">
          <div className="phero__num reveal">/ 02 — Services and pricing</div>
          <h1 className="display display--xxl reveal" style={{ ...delay(80), marginTop: 14 }}>
            The full <span className="italic">menu.</span>
          </h1>
          <p className="lede reveal" style={{ ...delay(160), marginTop: 24, maxWidth: "60ch" }}>
            Relax, reset, and leave glowing. Below is the current service menu — durations and prices
            are transcribed directly from the studio&apos;s Square listing.
          </p>
          <div className="sp__jumps reveal" style={delay(220)}>
            {services.map((c) => (
              <a key={c.category} href={`#${c.category.toLowerCase()}`} className="sp__jump">
                <span className="sp__jump-n">{c.n}</span>
                {c.category}
              </a>
            ))}
          </div>
        </div>
      </section>
      <Marquee />
      <section className="section">
        <div className="container spg">
          {services.map((cat) => (
            <div key={cat.category} id={cat.category.toLowerCase()} className="spg__cat reveal">
              <ServiceTable
                title={cat.category}
                tagline={cat.tagline}
                intro={cat.intro}
                n={`— ${cat.n}`}
                rows={cat.items}
                note={cat.note}
              />
              {cat.category === "Facials" && (
                <div className="spg__welcome" style={{ marginTop: 24 }}>
                  <div className="spg__welcome-l">
                    <div className="eyebrow">New here?</div>
                    <h4 className="display display--md italic" style={{ marginTop: 8 }}>
                      Try the $35 Welcome Facial.
                    </h4>
                  </div>
                  <Link className="btn btn--primary" href="/welcome-facial">
                    Learn more
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="section--tight band-sage">
        <div className="container">
          <div className="sec-num reveal">/ 06 — Before your appointment</div>
          <h2 className="display display--lg reveal" style={{ ...delay(80), marginTop: 10, marginBottom: 32 }}>
            What to know.
          </h2>
          <div className="reveal" style={delay(160)}>
            <FAQAccordion items={prepFaq} columns={2} />
          </div>
        </div>
      </section>
      <CTABanner title="Ready to book?" sub="Reserve through Square" />
    </main>
  );
}
