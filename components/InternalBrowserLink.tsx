"use client";

import { ReactNode, useEffect, useState } from "react";

interface InternalBrowserLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  trackingId?: string;
  ariaLabel?: string;
}

export default function InternalBrowserLink({
  href,
  className = "",
  children,
  trackingId,
  ariaLabel,
}: InternalBrowserLinkProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={className}
        data-track={trackingId}
        aria-label={ariaLabel}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true">
          <div className="relative h-[92vh] w-full max-w-[1100px] overflow-hidden rounded-[1.5rem] bg-white shadow-2xl ring-1 ring-black/10">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-accent/60"
              aria-label="Close form"
            >
              ✕
            </button>
            <iframe
              src={href}
              title="Training inquiry form"
              className="h-full w-full border-0"
              allow="camera; microphone; fullscreen; geolocation; clipboard-read; clipboard-write"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
