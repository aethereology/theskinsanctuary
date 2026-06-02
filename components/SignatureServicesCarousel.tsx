"use client";

import { useRef, useState } from "react";
import ServiceCard from "@/components/ServiceCard";
import type { Service } from "@/lib/data";
import { site } from "@/lib/site";

interface SignatureServicesCarouselProps {
  services: Service[];
}

export default function SignatureServicesCarousel({
  services,
}: SignatureServicesCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToService(index: number) {
    const nextIndex = Math.max(0, Math.min(index, services.length - 1));
    const scroller = scrollerRef.current;
    const slide = scroller?.children.item(nextIndex) as HTMLElement | null;

    if (!scroller || !slide) {
      return;
    }

    scroller.scrollTo({
      left: slide.offsetLeft - scroller.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(nextIndex);
  }

  function handleScroll() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const slides = Array.from(scroller.children) as HTMLElement[];
    const current = slides.reduce(
      (closest, slide, index) => {
        const distance = Math.abs(
          slide.offsetLeft - scroller.offsetLeft - scroller.scrollLeft,
        );

        return distance < closest.distance ? { distance, index } : closest;
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 },
    );

    setActiveIndex(current.index);
  }

  return (
    <>
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Signature services"
      >
        {services.map((service) => (
          <div
            key={service.name}
            className="flex min-w-[82%] snap-center sm:min-w-[64%]"
          >
            <ServiceCard
              {...service}
              ctaLabel={service.ctaLabel || site.cta.primary.label}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
        <button
          type="button"
          onClick={() => scrollToService(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="flex h-11 w-11 items-center justify-center text-2xl leading-none text-clay transition-colors hover:text-primary-dark disabled:pointer-events-none disabled:opacity-35"
          aria-label="Previous signature service"
        >
          <span aria-hidden="true">&larr;</span>
        </button>
        <button
          type="button"
          onClick={() => scrollToService(activeIndex + 1)}
          disabled={activeIndex === services.length - 1}
          className="flex h-11 w-11 items-center justify-center text-2xl leading-none text-clay transition-colors hover:text-primary-dark disabled:pointer-events-none disabled:opacity-35"
          aria-label="Next signature service"
        >
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>

      <div className="hidden grid-cols-3 gap-8 md:grid">
        {services.map((service) => (
          <ServiceCard
            key={service.name}
            {...service}
            ctaLabel={service.ctaLabel || site.cta.primary.label}
          />
        ))}
      </div>
    </>
  );
}
