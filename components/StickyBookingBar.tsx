"use client";

// components/StickyBookingBar.tsx — appears after first scroll; label adapts on Welcome Facial.
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useBooking } from "@/components/Booking";
import { business } from "@/lib/data";
import { PhoneIcon } from "@/components/icons";

export function StickyBookingBar() {
  const pathname = usePathname();
  const { open } = useBooking();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 180);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  const label = pathname === "/welcome-facial" ? "Book $35 Facial" : "Book Now";

  return (
    <div className="sbb" role="region" aria-label="Booking actions">
      <button className="sbb__p" onClick={open}>
        {label}
      </button>
      <a className="sbb__s" href={business.phoneHref}>
        <PhoneIcon width={16} height={16} />
        Call
      </a>
    </div>
  );
}
