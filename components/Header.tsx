"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import logo from "@/assets/Logotssc.svg";
import { cn } from "@/lib/utils";
import { flowHoverButtonClasses } from "@/components/ui/flow-hover-button";
import BookingButton from "./BookingButton";

const navigationLinks = [
  { label: "Services", href: "/services" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-espresso hover:text-clay transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <BookingButton />
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
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-espresso hover:text-clay transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-hairline">
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="block text-clay font-medium py-2 mb-4"
              >
                {site.contact.phone.value}
              </a>
              <BookingButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
