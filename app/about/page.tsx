import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { credentials, loves } from "@/lib/data";
import { GalleryStrip, CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Meet Monica Talbot",
  description:
    "Meet Monica Talbot, a Virginia-licensed esthetician offering facials, lashes, brows, and waxing in Chesapeake, VA.",
  alternates: { canonical: "/about" },
};

const delay = (ms: number): CSSProperties => ({ ["--reveal-delay" as string]: ms + "ms" });

export default function AboutPage() {
  return (
    <main>
      <section className="aph">
        <div className="container aph__inner">
          <div className="aph__copy">
            <div className="phero__num reveal">/ 04 — Meet your esthetician</div>
            <h1 className="display display--xxl reveal" style={{ ...delay(80), marginTop: 14 }}>
              Meet
              <br />
              <span className="italic">Monica Talbot.</span>
            </h1>
            <p className="lede reveal" style={{ ...delay(160), marginTop: 24 }}>
              Monica is a Virginia-licensed esthetician and the owner of The Skin Sanctuary Co in
              Chesapeake. She offers facials, Korean lash lifts, brow services, and waxing in a space
              designed to feel calm, welcoming, and easy to return to.
            </p>
            <div className="aph__creds reveal" style={delay(220)}>
              {credentials.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
          <div className="aph__photo reveal" style={delay(160)}>
            <div className="photo photo--portrait photo--v1" data-cap="MONICA TALBOT" />
            <div className="aph__sig">
              <span className="display display--md italic">Monica.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section band-canvas-soft">
        <div className="container abp">
          <div className="abp__pull reveal">
            <div className="sec-num">/ Studio philosophy</div>
            <p className="pull" style={{ marginTop: 14 }}>
              Beauty appointments should feel personal, relaxing, and worth coming back for.
            </p>
          </div>
          <div className="reveal" style={delay(120)}>
            <p className="body" style={{ fontSize: 18 }}>
              At The Skin Sanctuary Co, the goal is simple: help every client feel comfortable, cared
              for, and confident. Monica&apos;s approach is personal and detail-oriented, with
              services that support both self-care and everyday beauty.
            </p>
            <p className="body" style={{ marginTop: 18, fontSize: 18 }}>
              Clients consistently mention Monica&apos;s warmth, attention to detail, and the relaxing
              feel of her studio. That balance of professionalism and personality is what makes the
              experience memorable — polished results without a rushed or impersonal feel.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="aw__head reveal">
            <div className="sec-num">/ What clients love most</div>
            <h2 className="display display--lg" style={{ marginTop: 10 }}>
              Why clients return.
            </h2>
          </div>
          <div className="aw__grid">
            {loves.map(([t, p], i) => (
              <div key={i} className="aw__c reveal" style={delay(i * 80)}>
                <div className="aw__n">0{i + 1}</div>
                <div>
                  <h4 className="display display--md" style={{ margin: "0 0 6px" }}>
                    {t}
                  </h4>
                  <p className="body" style={{ margin: 0, color: "var(--tss-fg-muted)" }}>
                    {p}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryStrip />

      <CTABanner title="Book a visit with Monica." sub="See you soon" />
    </main>
  );
}
