"use client";

// components/Header.tsx — sticky header with primary nav, mobile drawer, Book Now.
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/Wordmark";
import { useBooking } from "@/components/Booking";
import { business } from "@/lib/data";
import { BurgerIcon, CloseIcon, PhoneIcon } from "@/components/icons";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const MENU = [
  { href: "/", label: "Home" },
  ...NAV,
  { href: "/welcome-facial", label: "Welcome Facial" },
  { href: "/policies", label: "Policies" },
];

export function Header() {
  const pathname = usePathname();
  const { open: openBooking } = useBooking();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={"hdr" + (scrolled ? " hdr--scrolled" : "")}>
      <div className="container hdr__inner">
        <Link href="/" className="hdr__mark" aria-label="The Skin Sanctuary Co — home">
          <Wordmark size="md" />
        </Link>
        <nav className="hdr__nav" aria-label="Primary">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={"hdr__lnk" + (pathname === l.href ? " is-active" : "")}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hdr__cta">
          <button className="btn btn--primary btn--sm" onClick={openBooking}>
            Book Now
          </button>
          <button className="hdr__burger" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <BurgerIcon />
          </button>
        </div>
      </div>
      {menuOpen && (
        <MobileMenu
          pathname={pathname}
          onClose={() => setMenuOpen(false)}
          onBook={() => {
            setMenuOpen(false);
            openBooking();
          }}
        />
      )}
    </header>
  );
}

function MobileMenu({
  pathname,
  onClose,
  onBook,
}: {
  pathname: string;
  onClose: () => void;
  onBook: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="mm" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="mm__top">
        <Wordmark size="sm" />
        <button className="mm__close" aria-label="Close menu" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <nav className="mm__nav">
        {MENU.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            className={"mm__lnk" + (pathname === l.href ? " is-active" : "")}
            style={{ transitionDelay: i * 40 + "ms" }}
            onClick={onClose}
          >
            <span className="mm__lnk-n">0{i + 1}</span>
            <span className="mm__lnk-l">{l.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mm__cta">
        <button className="btn btn--primary btn--block btn--lg" onClick={onBook}>
          Book Now
        </button>
        <a href={business.phoneHref} className="btn btn--secondary btn--block">
          <PhoneIcon width={14} height={14} />
          Call / Text
        </a>
        <div className="mm__foot small">
          1009 Greenbrier Pkwy, Chesapeake VA
          <br />
          Mon–Thu 10–5 · Fri 10–4
        </div>
      </div>
    </div>
  );
}
