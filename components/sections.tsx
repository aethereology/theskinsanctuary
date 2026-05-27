// components/sections.tsx — editorial marketing sections.
// The shipped design uses the default tweaks: editorial hero + editorial service cards.
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { BookButton } from "@/components/Booking";
import { HoursDial } from "@/components/HoursDial";
import { business, marquee as marqueeItems, trustItems, themes } from "@/lib/data";
import { ArrowUpRightIcon, CheckIcon, PhoneIcon, PinIcon } from "@/components/icons";

const delay = (ms: number): CSSProperties => ({ ["--reveal-delay" as string]: ms + "ms" });

/* ───── Hero (editorial) ───── */
export function Hero() {
  return (
    <section className="hero hero--ed" id="home">
      <div className="container hero__inner">
        <div className="hero__meta reveal">
          <span className="hero__loc">
            <span className="hero__loc-dot" />
            Chesapeake, Virginia
          </span>
          <span className="hero__stars">
            <span className="stars">★★★★★</span>
            <span className="small" style={{ color: "var(--tss-fg-muted)" }}>
              5.0 · 12 reviews
            </span>
          </span>
        </div>

        <h1 className="display display--xxl hero__h1 reveal" style={delay(80)}>
          Facials, lashes,
          <br />
          brows &amp; waxing
          <br />
          <span className="italic" style={{ color: "var(--tss-mushroom)" }}>
            in Chesapeake, VA.
          </span>
        </h1>

        <div className="hero__bottom">
          <div className="hero__lede reveal" style={delay(160)}>
            <p className="lede">
              Personalized beauty and skincare services by Monica Talbot, a Virginia-licensed
              esthetician creating a calm, welcoming space for glowing skin and low-maintenance
              beauty.
            </p>
            <div className="hero__cta">
              <BookButton className="btn btn--primary btn--lg">Book Now</BookButton>
              <Link className="btn btn--secondary btn--lg" href="/services">
                View Services
              </Link>
            </div>
            <div className="small hero__promo">
              New here?{" "}
              <Link className="hero__promo-link" href="/welcome-facial">
                Start with the $35 Welcome Facial →
              </Link>
            </div>
          </div>
          <div className="hero__photos reveal" style={delay(220)}>
            <div className="photo photo--tall photo--v2 hero__photo-a" data-cap="MONICA · PORTRAIT" />
            <div className="hero__photo-b">
              <div className="photo photo--square photo--v3" data-cap="LASH RESULT" />
              <div className="hero__chip chip chip--ink">$35 · Welcome Facial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Trust strip ───── */
export function TrustStrip() {
  return (
    <section className="ts">
      <div className="container ts__inner">
        {trustItems.map((label, i) => (
          <div key={i} className="ts__item">
            <span className="ts__ic" aria-hidden="true">
              <CheckIcon />
            </span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───── Marquee ───── */
export function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((m, i) => (
          <span key={i} className="marquee__item">
            <span>{m}</span>
            <span className="marquee__sep" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───── Service card grid (editorial) ───── */
export function ServiceCardGrid() {
  const cards = [
    { cat: "Facials", n: "01", t: "From quick glow-ups to a full back facial — refreshed and confident, every time.", img: "v1" },
    { cat: "Brows", n: "02", t: "Waxing, tint, lamination, and combo services for clean shape and soft definition.", img: "v3" },
    { cat: "Lashes", n: "03", t: "A standout Korean lash lift and tint for a natural, low-maintenance look.", img: "v4" },
    { cat: "Waxing", n: "04", t: "Smooth, simple waxing services in a clean, welcoming setting.", img: "v5" },
  ];
  return (
    <section className="section scg" id="services-tease">
      <div className="container">
        <div className="scg__head reveal">
          <div>
            <div className="sec-num">02 / Signature services</div>
            <h2 className="display display--lg" style={{ marginTop: 14 }}>
              Your go-to spot for{" "}
              <span className="italic" style={{ color: "var(--tss-mushroom)" }}>
                skin, lashes, brows,
              </span>{" "}
              and waxing.
            </h2>
          </div>
          <p className="lede" style={{ marginTop: 12 }}>
            Whether you want a quick refresh, a relaxing facial, a polished brow appointment, or a
            longer-lasting lash lift, every service is designed to feel thoughtful, comfortable, and
            tailored to you.
          </p>
        </div>
        <div className="scg__grid">
          {cards.map((c, i) => (
            <Link key={c.cat} className="sc reveal" style={delay(i * 80)} href="/services">
              <div className={`photo photo--wide photo--${c.img}`} data-cap={c.cat.toUpperCase()} />
              <div className="sc__body">
                <div className="sc__row">
                  <h3 className="display display--md sc__t">{c.cat}</h3>
                  <span className="sec-num">{c.n}</span>
                </div>
                <p className="body sc__p">{c.t}</p>
                <span className="sc__cta">
                  View {c.cat.toLowerCase()}
                  <ArrowUpRightIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Welcome Facial promo ───── */
export function WelcomeFacialPromo() {
  return (
    <section className="wfp section--tight" id="welcome">
      <div className="container wfp__inner">
        <div className="wfp__copy reveal">
          <div className="sec-num">03 / New here?</div>
          <h2 className="display display--xl italic" style={{ marginTop: 18 }}>
            Start with the
            <br />
            $35 Welcome Facial.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            If it&apos;s your first visit, the Welcome Facial is the easiest way to get to know
            Monica, experience the space, and treat your skin to a fresh start.
          </p>
          <div className="wfp__cta">
            <BookButton className="btn btn--primary btn--lg">Book the Welcome Facial</BookButton>
            <Link className="btn btn--ghost" href="/welcome-facial">
              Learn more →
            </Link>
          </div>
        </div>
        <div className="wfp__photo reveal" style={delay(120)}>
          <div className="photo photo--tall photo--v2" data-cap="WELCOME · STUDIO" />
          <div className="wfp__price">
            <div className="eyebrow">Introductory offer</div>
            <div className="wfp__price-n">$35</div>
            <div className="small">New clients · book once</div>
          </div>
          <div className="wfp__tag">
            <div className="monogram monogram--lg">tss</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Featured service — Korean Lash Lift ───── */
export function FeaturedService() {
  return (
    <section className="section fs">
      <div className="container fs__inner">
        <div className="fs__photo reveal">
          <div className="photo photo--wide photo--v3" data-cap="KOREAN LASH LIFT & TINT" />
          <div className="fs__meta-card">
            <div className="stack-1">
              <span className="eyebrow">Duration</span>
              <span className="display display--sm">1 hr 10 min</span>
            </div>
            <div className="stack-1">
              <span className="eyebrow">Price</span>
              <span className="display display--sm">$130</span>
            </div>
          </div>
        </div>
        <div className="fs__copy reveal" style={delay(120)}>
          <div className="sec-num">04 / Client favorite</div>
          <h2 className="display display--xl italic" style={{ marginTop: 14 }}>
            Korean Lash Lift
            <br />
            &amp; Tint.
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            Loved by clients with straight or stubborn lashes, this service is designed to give you a
            natural, lifted look that lasts beautifully and keeps your routine easy.
          </p>
          <ul className="fs__bullets">
            <li>Longer-lasting than a standard lift</li>
            <li>Healthier on the lash than extensions</li>
            <li>Wakes up looking ready — no mascara required</li>
          </ul>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <BookButton className="btn btn--primary btn--lg">Book the Lash Lift</BookButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── About teaser ───── */
export function AboutTeaser() {
  return (
    <section className="section at" id="about-tease">
      <div className="container at__inner">
        <div className="at__photo reveal">
          <div className="photo photo--portrait photo--v1" data-cap="MONICA TALBOT" />
          <div className="at__sig">
            <span className="display display--md italic">Monica.</span>
          </div>
        </div>
        <div className="at__copy reveal" style={delay(120)}>
          <div className="sec-num">05 / Meet your esthetician</div>
          <h2 className="display display--xl" style={{ marginTop: 14 }}>
            <span className="italic">Sweet, funny,</span>
            <br />
            attentive to detail.
          </h2>
          <p className="lede" style={{ marginTop: 24 }}>
            Monica is a Virginia-licensed esthetician and the heart behind The Skin Sanctuary Co. Her
            clients describe her as sweet, funny, welcoming, and incredibly attentive to detail.
          </p>
          <p className="body" style={{ marginTop: 16, maxWidth: "52ch", color: "var(--tss-fg-muted)" }}>
            She&apos;s built a studio experience that feels relaxing, personal, and easy to come back
            to. Polished without ever feeling rushed.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link className="btn btn--secondary" href="/about">
              Meet Monica →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Gallery strip ───── */
export function GalleryStrip() {
  const tiles = [
    { v: "v1", cap: "STUDIO" },
    { v: "v3", cap: "LASH RESULT" },
    { v: "v4", cap: "BROW DETAIL" },
    { v: "v2", cap: "TREATMENT ROOM" },
    { v: "v5", cap: "FLAT-LAY" },
    { v: "v6", cap: "AFTER GLOW" },
  ];
  return (
    <section className="gs section--tight">
      <div className="container">
        <div className="gs__head reveal">
          <div className="sec-num">06 / The studio</div>
          <h3 className="display display--md" style={{ marginTop: 8 }}>
            Inside the space.
          </h3>
        </div>
        <div className="gs__grid">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`photo photo--square photo--${t.v} reveal`}
              style={delay(i * 60)}
              data-cap={t.cap}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── CTA banner ───── */
export function CTABanner({
  title,
  sub,
  label = "Book Now",
  secondary,
}: {
  title: string;
  sub?: string;
  label?: string;
  secondary?: ReactNode;
}) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div className="cta__copy reveal">
          {sub && (
            <div className="eyebrow" style={{ color: "rgba(255,253,252,.6)" }}>
              {sub}
            </div>
          )}
          <h2 className="display display--xl italic" style={{ color: "var(--tss-white)", marginTop: 14 }}>
            {title}
          </h2>
        </div>
        <div className="cta__actions reveal" style={delay(120)}>
          <BookButton className="btn btn--white btn--lg">{label}</BookButton>
          {secondary}
        </div>
      </div>
      <div className="cta__monogram" aria-hidden="true">
        tss
      </div>
    </section>
  );
}

/* ───── Visit block ───── */
export function VisitBlock() {
  return (
    <section className="vb section" id="visit">
      <div className="container vb__inner">
        <div className="vb__copy reveal">
          <div className="sec-num">07 / Visit the studio</div>
          <h2 className="display display--xl" style={{ marginTop: 14 }}>
            1009 Greenbrier Pkwy,
            <br />
            <span className="italic">Chesapeake.</span>
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            Appointments are available Monday through Thursday from 10 AM to 5 PM, and Friday from 10
            AM to 4 PM.
          </p>
          <div className="vb__actions">
            <BookButton className="btn btn--primary">Book Now</BookButton>
            <a className="btn btn--secondary" href={business.mapsUrl} target="_blank" rel="noreferrer">
              <PinIcon />
              Get Directions
            </a>
            <a className="btn btn--secondary" href={business.phoneHref}>
              <PhoneIcon width={14} height={14} />
              Call / Text
            </a>
          </div>
        </div>
        <div className="vb__side reveal" style={delay(120)}>
          <HoursDial />
        </div>
      </div>
    </section>
  );
}

/* ───── Themes grid (Reviews page) ───── */
export function ThemesGrid() {
  return (
    <section className="section thg">
      <div className="container">
        <div className="thg__head reveal">
          <div className="sec-num">02 / Popular for</div>
          <h3 className="display display--lg" style={{ marginTop: 10 }}>
            What clients love most.
          </h3>
        </div>
        <div className="thg__grid">
          {themes.map((t, i) => (
            <div key={t} className="thg__c reveal" style={delay(i * 60)}>
              <span className="sec-num">0{i + 1}</span>
              <span className="display display--sm">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
