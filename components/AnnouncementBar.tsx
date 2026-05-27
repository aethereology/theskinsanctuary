"use client";

// components/AnnouncementBar.tsx — dismissible promo bar.
import { useState } from "react";
import Link from "next/link";

export function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="anno">
      <div className="container anno__inner">
        <span className="anno__msg">
          <span className="anno__dot" aria-hidden="true" />
          New clients: book the <strong>&nbsp;$35 Welcome Facial</strong>
          {" — "}
          <Link href="/welcome-facial">Learn more →</Link>
        </span>
        <button className="anno__close" aria-label="Dismiss announcement" onClick={() => setOpen(false)}>
          ×
        </button>
      </div>
    </div>
  );
}
