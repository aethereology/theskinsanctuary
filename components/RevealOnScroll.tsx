"use client";

// components/RevealOnScroll.tsx — fail-open scroll reveal.
// Elements with .reveal are visible by default; JS adds .reveal-out to those
// that start below the fold so they can fade in on scroll. A safety net strips
// the class after 1.5s no matter what. Respects prefers-reduced-motion.
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let ticking = false;

    const hideBelowFold = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (el.classList.contains("reveal-out")) return;
        if (el.dataset.revealSettled === "1") return;
        const r = el.getBoundingClientRect();
        if (r.top > vh * 0.88) el.classList.add("reveal-out");
        else el.dataset.revealSettled = "1";
      });
    };

    const revealVisible = () => {
      ticking = false;
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      const threshold = vh * 0.92;
      document.querySelectorAll<HTMLElement>(".reveal.reveal-out").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < threshold && r.bottom > 0) {
          el.classList.remove("reveal-out");
          el.dataset.revealSettled = "1";
        }
      });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(revealVisible);
    };

    hideBelowFold();
    const safetyT = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal.reveal-out").forEach((el) => {
        el.classList.remove("reveal-out");
        el.dataset.revealSettled = "1";
      });
    }, 1500);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(safetyT);
    };
  }, [pathname]);

  return null;
}
