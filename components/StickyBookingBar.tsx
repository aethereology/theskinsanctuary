"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { flowHoverButtonClasses } from "@/components/ui/flow-hover-button";
import { cn } from "@/lib/utils";
import BookingLink from "./BookingLink";

export default function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 96);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden bg-clay text-white border-t border-primary-dark/40 shadow-2xl pb-[env(safe-area-inset-bottom)] transition-[transform,opacity] duration-300 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="container flex items-center justify-between py-3 gap-3">
        {/* Phone Link */}
        <a
          href={site.contact.phoneHref}
          className={cn(
            flowHoverButtonClasses,
            "flex-1 py-3 px-3 text-porcelain before:bg-porcelain hover:text-clay rounded-full font-bold",
          )}
          data-track="sticky_phone_click"
        >
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-base">{site.contact.phone.value}</span>
        </a>

        {/* Book CTA */}
        <BookingLink
          className={cn(
            flowHoverButtonClasses,
            "flex-1 bg-white text-clay before:bg-clay hover:text-white font-bold uppercase text-xs px-4 py-3 rounded-full tracking-widest text-center",
          )}
          trackingId="sticky_book_my_service"
        >
          book my service
        </BookingLink>
      </div>
    </div>
  );
}
