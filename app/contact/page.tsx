import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { business, contactFaq } from "@/lib/data";
import { HoursDial } from "@/components/HoursDial";
import { FAQAccordion } from "@/components/atoms";
import { BookButton } from "@/components/Booking";
import { PinIcon, PhoneIcon, InstagramIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact and Hours",
  description:
    "Find The Skin Sanctuary Co at 1009 Greenbrier Pkwy in Chesapeake, VA. Get hours, contact details, and booking information.",
  alternates: { canonical: "/contact" },
};

const delay = (ms: number): CSSProperties => ({ ["--reveal-delay" as string]: ms + "ms" });

export default function ContactPage() {
  return (
    <main>
      <section className="cph">
        <div className="container">
          <div className="phero__num reveal">/ 06 — Contact and hours</div>
          <h1 className="display display--xxl reveal" style={{ ...delay(80), marginTop: 14 }}>
            Visit The
            <br />
            <span className="italic">Skin Sanctuary.</span>
          </h1>
          <p className="lede reveal" style={{ ...delay(160), marginTop: 24, maxWidth: "60ch" }}>
            Find the studio at 1009 Greenbrier Pkwy in Chesapeake, Virginia. Use the details below to
            book, call, or plan your visit.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container cp__grid">
          <div className="cp__cards">
            <div className="cp__c reveal">
              <div className="eyebrow">Address</div>
              <p className="display display--sm" style={{ marginTop: 10, lineHeight: 1.25 }}>
                1009 Greenbrier Pkwy
                <br />
                Chesapeake, VA 23320
              </p>
              <a
                className="btn btn--secondary btn--sm"
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 16 }}
              >
                <PinIcon width={13} height={13} />
                Get Directions
              </a>
            </div>
            <div className="cp__c reveal" style={delay(80)}>
              <div className="eyebrow">Phone</div>
              <p className="display display--sm" style={{ marginTop: 10 }}>
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
              </p>
              <a className="btn btn--secondary btn--sm" href={business.phoneHref} style={{ marginTop: 16 }}>
                <PhoneIcon width={13} height={13} />
                Call / Text
              </a>
            </div>
            <div className="cp__c cp__c--book reveal" style={delay(160)}>
              <div className="eyebrow" style={{ color: "rgba(255,253,252,.65)" }}>
                Booking
              </div>
              <p className="display display--md" style={{ marginTop: 10, color: "var(--tss-white)" }}>
                Reserve through Square.
              </p>
              <p className="small" style={{ marginTop: 8, color: "rgba(255,253,252,.7)" }}>
                Booking takes about 60 seconds.
              </p>
              <BookButton className="btn btn--white btn--sm">Book Now</BookButton>
            </div>
            <div className="cp__c reveal" style={delay(240)}>
              <div className="eyebrow">Follow along</div>
              <p className="display display--sm" style={{ marginTop: 10 }}>
                <a href={business.instagramUrl} target="_blank" rel="noreferrer">
                  @theskinsanctuary_co
                </a>
              </p>
              <a
                className="btn btn--secondary btn--sm"
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 16 }}
              >
                <InstagramIcon width={13} height={13} />
                Open Instagram
              </a>
            </div>
          </div>
          <div className="cp__side">
            <div className="reveal">
              <HoursDial />
            </div>
            <div
              className="cp__map photo photo--wide photo--v6 reveal"
              data-cap="MAP · 1009 GREENBRIER PKWY"
              style={delay(80)}
            />
          </div>
        </div>
      </section>

      <section className="section--tight band-canvas-soft">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="sec-num reveal">/ Frequently asked</div>
          <h2 className="display display--lg reveal" style={{ ...delay(80), marginTop: 10, marginBottom: 24 }}>
            Quick answers.
          </h2>
          <div className="reveal" style={delay(160)}>
            <FAQAccordion items={contactFaq} />
          </div>
        </div>
      </section>
    </main>
  );
}
