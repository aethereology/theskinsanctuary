"use client";

// components/Booking.tsx — global booking modal: context, provider, hook, BookButton.
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { business } from "@/lib/data";
import { CloseIcon, CheckIcon } from "@/components/icons";

type BookingContextValue = { open: () => void; close: () => void; isOpen: boolean };
const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <BookingContext.Provider value={{ open, close, isOpen }}>
      {children}
      <BookingModal open={isOpen} onClose={close} />
    </BookingContext.Provider>
  );
}

/** Button that opens the booking modal. Renders <button> styled as a .btn. */
export function BookButton({
  className = "btn btn--primary",
  children = "Book Now",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { open } = useBooking();
  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}

function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [confirmed, setConfirmed] = useState(false);
  const [service, setService] = useState("welcome");

  useEffect(() => {
    if (!open) {
      setConfirmed(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="bm" onClick={onClose} role="dialog" aria-modal="true" aria-label="Book an appointment">
      <div className="bm__panel" onClick={(e) => e.stopPropagation()}>
        <button className="bm__close" aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </button>
        {!confirmed ? (
          <>
            <div className="eyebrow">Book through Square</div>
            <h3 className="display display--lg italic" style={{ marginTop: 10 }}>
              Reserve your visit.
            </h3>
            <p className="body" style={{ marginTop: 10, color: "var(--tss-fg-muted)" }}>
              Booking takes about 60 seconds. You&apos;ll choose your service, time, and confirm
              directly with Monica&apos;s calendar.
            </p>
            <form className="bm__form" onSubmit={(e) => { e.preventDefault(); setConfirmed(true); }}>
              <label className="bm__f">
                <span>Service</span>
                <select value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="welcome">Welcome Facial — $35</option>
                  <option value="lash">Korean Lash Lift &amp; Tint — $130</option>
                  <option value="skin">Skin-n-out Facial — $55</option>
                  <option value="back">Behind the Scenes (Back Facial) — $100</option>
                  <option value="brow">Brow Babe Trio — $125</option>
                  <option value="lami">Brow Lamination — $75</option>
                  <option value="package">Soft Girl Summer — $255</option>
                </select>
              </label>
              <div className="bm__row">
                <label className="bm__f">
                  <span>Your name</span>
                  <input required type="text" placeholder="First & last" />
                </label>
                <label className="bm__f">
                  <span>Mobile</span>
                  <input required type="tel" placeholder="(___) ___-____" />
                </label>
              </div>
              <label className="bm__f">
                <span>Email</span>
                <input required type="email" placeholder="you@example.com" />
              </label>
              <a
                className="btn btn--primary btn--block"
                style={{ marginTop: 10 }}
                href={business.bookingUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setConfirmed(true)}
              >
                Continue to Square →
              </a>
              <p className="small" style={{ marginTop: 12, textAlign: "center", color: "var(--tss-fg-subtle)" }}>
                Clicking opens Monica&apos;s Square booking page.
              </p>
            </form>
          </>
        ) : (
          <div className="bm__done">
            <div className="bm__check">
              <CheckIcon width={40} height={40} strokeWidth={1.8} />
            </div>
            <h3 className="display display--lg italic" style={{ marginTop: 20 }}>
              You&apos;re on Monica&apos;s calendar.
            </h3>
            <p className="body" style={{ marginTop: 10, color: "var(--tss-fg-muted)", maxWidth: "40ch", marginInline: "auto" }}>
              A confirmation email is on the way. Looking forward to seeing you in the studio.
            </p>
            <button className="btn btn--secondary" style={{ marginTop: 28 }} onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
