import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { policies, business } from "@/lib/data";
import { CTABanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Booking Policies",
  description:
    "Review cancellation, late, and no-show policies before your appointment at The Skin Sanctuary Co.",
  alternates: { canonical: "/policies" },
};

const delay = (ms: number): CSSProperties => ({ ["--reveal-delay" as string]: ms + "ms" });

export default function PoliciesPage() {
  return (
    <main>
      <section className="phero">
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="phero__num reveal">/ 07 — Booking policies</div>
          <h1 className="display display--xxl reveal" style={{ ...delay(80), marginTop: 14 }}>
            Booking
            <br />
            <span className="italic">policies.</span>
          </h1>
          <p className="lede reveal" style={{ ...delay(160), marginTop: 24 }}>
            To respect Monica&apos;s time and other clients, please review the appointment policies
            below before booking.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 880 }}>
          <div className="pol__list">
            {policies.map((p, i) => (
              <article key={p.h} className="pol__item reveal" style={delay(i * 80)}>
                <div className="pol__num">{p.n}</div>
                <div className="pol__body">
                  <h3 className="display display--md">{p.h}</h3>
                  <p className="body" style={{ marginTop: 10, color: "var(--tss-fg-muted)" }}>
                    {p.p}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight band-sage">
        <div className="container" style={{ maxWidth: 760, textAlign: "center" }}>
          <div className="sec-num reveal">/ Questions?</div>
          <h2 className="display display--xl italic reveal" style={{ ...delay(80), marginTop: 10 }}>
            Reach out before booking.
          </h2>
          <p className="lede reveal" style={{ ...delay(160), margin: "18px auto 28px", maxWidth: "50ch" }}>
            If you have questions before your appointment, please call or text — Monica is happy to
            help you choose the right service.
          </p>
          <div
            className="reveal"
            style={{ ...delay(220), display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a className="btn btn--primary btn--lg" href={business.phoneHref}>
              Call / Text Monica
            </a>
            <Link className="btn btn--secondary btn--lg" href="/contact">
              Contact info
            </Link>
          </div>
        </div>
      </section>

      <CTABanner title="Ready when you are." sub="Reserve your visit" />
    </main>
  );
}
