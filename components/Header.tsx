"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import logo from "@/assets/Logotssc.svg";
import { cn } from "@/lib/utils";
import { flowHoverButtonClasses } from "@/components/ui/flow-hover-button";
import BookingButton from "./BookingButton";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string; detail: string }[];
};

const navigationLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  {
    label: "Training",
    href: "/training",
    children: [
      { label: "Korean Lash Lift Training", href: "/training", detail: "1:1 · Full day · $1,100" },
      { label: "Brow Lamination Training", href: "/training/brows", detail: "1:1 · Full day · $950" },
    ],
  },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed w-full top-0 z-50 bg-porcelain/95 backdrop-blur transition-all duration-300">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" aria-label={site.brand} className="flex items-center">
          <Image
            src={logo}
            alt={site.brand}
            priority
            className="h-8 w-auto md:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => setOpenDropdown(link.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                    setOpenDropdown(null);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setOpenDropdown(null);
                }}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm text-espresso hover:text-clay transition-colors"
                  aria-expanded={openDropdown === link.label}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.label ? null : link.label)
                  }
                >
                  {link.label}
                  <svg
                    aria-hidden
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      openDropdown === link.label && "rotate-180",
                    )}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* pt-3 bridges the gap so hover doesn't drop between trigger and panel */}
                <div
                  className={cn(
                    "absolute left-1/2 top-full -translate-x-1/2 pt-3",
                    openDropdown === link.label ? "block" : "hidden",
                  )}
                >
                  <ul className="w-72 overflow-hidden rounded-2xl border border-hairline/60 bg-porcelain p-2 shadow-lg">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-ivory focus-visible:bg-ivory"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <span className="block font-serif text-base text-cocoa">
                            {child.label}
                          </span>
                          <span className="mt-0.5 block text-[0.65rem] uppercase tracking-widest text-text-secondary">
                            {child.detail}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-espresso hover:text-clay transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <BookingButton label="book my service" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            flowHoverButtonClasses,
            "md:hidden p-2 rounded-md text-cocoa before:bg-cocoa hover:text-porcelain",
          )}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-t border-hairline">
          <div className="container py-4 flex flex-col gap-4">
            {navigationLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <p className="text-espresso py-2">{link.label}</p>
                  <ul className="ml-1 flex flex-col gap-1 border-l border-hairline pl-4">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 text-sm text-espresso/90 hover:text-clay transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                          <span className="block text-[0.65rem] uppercase tracking-widest text-text-secondary">
                            {child.detail}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-espresso hover:text-clay transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="pt-4 border-t border-hairline">
              <a
                href={site.contact.phoneHref}
                data-track="phone_click"
                className="block text-clay font-medium py-2 mb-4"
              >
                {site.contact.phone.value}
              </a>
              <BookingButton label="book my service" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
