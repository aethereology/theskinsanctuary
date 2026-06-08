"use client";

import { MouseEvent, ReactNode } from "react";

interface PopupLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  trackingId?: string;
  ariaLabel?: string;
  windowName?: string;
  windowFeatures?: string;
}

export default function PopupLink({
  href,
  className = "",
  children,
  trackingId,
  ariaLabel,
  windowName = "popupWindow",
  windowFeatures = "width=1000,height=900,toolbar=no,menubar=no,location=no,status=no,scrollbars=yes,resizable=yes",
}: PopupLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    const popup = window.open(href, windowName, windowFeatures);
    if (popup) {
      popup.focus();
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
