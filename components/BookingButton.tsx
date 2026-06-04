import Link from "next/link";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { flowHoverButtonClasses } from "@/components/ui/flow-hover-button";
import BookingLink from "./BookingLink";

interface BookingButtonProps {
  label?: string;
  variant?: "primary" | "secondary" | "ghost" | "light" | "outline-light";
  trackingId?: string;
  href?: string;
  className?: string;
}

export default function BookingButton({
  label = site.cta.primary.label,
  variant = "primary",
  trackingId,
  href = site.booking.url,
  className = "",
}: BookingButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-full font-semibold uppercase tracking-widest text-xs";

  const variantClasses = {
    primary:
      "bg-accent text-white before:bg-porcelain hover:text-cocoa active:text-cocoa hover:shadow-lg",
    secondary:
      "border border-accent text-accent before:bg-accent hover:text-white active:text-white",
    ghost: "text-accent before:bg-accent hover:text-white active:text-white",
    light:
      "bg-porcelain text-cocoa before:bg-cocoa hover:text-porcelain active:text-porcelain hover:shadow-lg",
    "outline-light":
      "border border-white/70 text-white before:bg-white hover:text-cocoa active:text-cocoa",
  };

  const classes = cn(flowHoverButtonClasses, baseClasses, variantClasses[variant], className);

  // Internal routes (e.g. "view services") use client-side navigation and stay
  // on the site. Calendly booking links open the popup overlay.
  const isExternalLink = /^https?:\/\//.test(href);
  const isCalendlyLink = /^https?:\/\/(?:www\.)?calendly\.com/.test(href);

  if (!isExternalLink) {
    return (
      <Link
        href={href}
        className={classes}
        data-track={trackingId}
        aria-label={label}
      >
        {label}
      </Link>
    );
  }

  if (isCalendlyLink) {
    return (
      <BookingLink
        href={href}
        trackingId={trackingId}
        aria-label={label}
        className={classes}
      >
        {label}
      </BookingLink>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      data-track={trackingId}
      aria-label={label}
    >
      {label}
    </a>
  );
}
