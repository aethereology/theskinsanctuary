"use client";

// components/AnnouncementBar.tsx — dismissible promo bar.
// The whole message is a single tappable link to the Welcome Facial page;
// the close button sits pinned at the right edge, out of the text flow.
import { useState } from "react";
import Link from "next/link";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="anno">
      <div className="container anno__inner">
        <Link href="/welcome-facial" className="anno__msg">
          <span className="anno__dot" aria-hidden="true" />
          <span className="anno__text">
            New clients — book the <strong>$35 Welcome Facial</strong>
          </span>
          <span className="anno__arrow" aria-hidden="true">→</span>
        </Link>
        <button className="anno__close" aria-label="Dismiss announcement" onClick={() => setOpen(false)}>
          ×
        </button>
      </div>
    </div>
  );
}
