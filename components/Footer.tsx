// components/Footer.tsx — closing CTA, link columns, contact, base bar.
import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { BookButton } from "@/components/Booking";
import { business } from "@/lib/data";
import { PinIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="container ftr__top">
        <div className="ftr__hero reveal">
          <div className="eyebrow" style={{ color: "rgba(61,44,36,.6)" }}>
            Visit the studio
          </div>
          <h2 className="display display--xl italic" style={{ marginTop: 18, color: "var(--tss-ink)" }}>
            See you soon.
          </h2>
          <p className="lede" style={{ marginTop: 18, color: "var(--tss-ink-70)", maxWidth: 480 }}>
            Booking takes about a minute. Monica will take it from there.
          </p>
          <div className="ftr__hero-cta">
            <BookButton className="btn btn--primary btn--lg">Book Now</BookButton>
            <a className="btn btn--secondary btn--lg" href={business.mapsUrl} target="_blank" rel="noreferrer">
              <PinIcon />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <div className="container ftr__cols">
        <div className="ftr__col ftr__col--brand">
          <Wordmark size="sm" />
          <p className="small" style={{ maxWidth: 280, marginTop: 16 }}>
            Personalized facials, lashes, brows, and waxing in a calm Chesapeake studio.
          </p>
          <a
            className="small ftr__ig"
            href={business.instagramUrl}
            target="_blank"
            rel="noreferrer"
            style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            <InstagramIcon />
            @theskinsanctuary_co
          </a>
        </div>
        <div className="ftr__col">
          <div className="ftr__h">Explore</div>
          <Link href="/services">Services</Link>
          <Link href="/welcome-facial">Welcome Facial</Link>
          <Link href="/about">About Monica</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/policies">Policies</Link>
        </div>
        <div className="ftr__col">
          <div className="ftr__h">Visit</div>
          <p className="small" style={{ margin: "0 0 6px" }}>
            1009 Greenbrier Pkwy
            <br />
            Chesapeake, VA 23320
          </p>
          <a className="small" href={business.phoneHref}>
            {business.phoneDisplay}
          </a>
          <p className="small" style={{ margin: "10px 0 0" }}>
            Mon–Thu 10 AM–5 PM
            <br />
            Fri 10 AM–4 PM
            <br />
            Sat–Sun Closed
          </p>
        </div>
        <div className="ftr__col">
          <div className="ftr__h">Book</div>
          <BookButton className="btn btn--primary btn--sm">Book Now</BookButton>
          <a
            className="small ftr__rev"
            href={business.googleProfileUrl}
            target="_blank"
            rel="noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14 }}
          >
            <span className="stars">★★★★★</span>
            <span style={{ color: "var(--tss-fg-muted)" }}>Leave a review</span>
          </a>
        </div>
      </div>

      <div className="ftr__base">
        <div className="container ftr__base-inner small">
          <span>© {new Date().getFullYear()} The Skin Sanctuary Co · All rights reserved</span>
          <span>Designed for Monica Talbot · Licensed in Virginia</span>
        </div>
      </div>
    </footer>
  );
}
