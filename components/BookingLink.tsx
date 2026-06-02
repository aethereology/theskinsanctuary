"use client";

import { MouseEvent, ReactNode } from "react";
import { site } from "@/lib/site";
import { openCalendly } from "@/lib/calendly";

interface BookingLinkProps {
  href?: string;
  className?: string;
  children: ReactNode;
  trackingId?: string;
  "aria-label"?: string;
}

export default function BookingLink({
  href = site.booking.url,
  className = "",
  children,
  trackingId,
  "aria-label": ariaLabel,
}: BookingLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    // Let modified clicks (cmd/ctrl/middle click) open a new tab natively.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    if (openCalendly(href)) {
      e.preventDefault();
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-track={trackingId}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
