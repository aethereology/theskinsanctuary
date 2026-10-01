import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { TrainingCourse as Course, trainingCourses } from "@/lib/data";
import { cn } from "@/lib/utils";
import InternalBrowserLink from "@/components/InternalBrowserLink";
import { flowHoverButtonClasses } from "@/components/ui/flow-hover-button";

// Shared CTA styling, mirroring the site's BookingButton variants.
const btnPrimary = cn(
  flowHoverButtonClasses,
  "px-7 py-3.5 rounded-full font-semibold uppercase tracking-widest text-xs bg-accent text-white before:bg-porcelain hover:text-cocoa active:text-cocoa hover:shadow-lg",
);
const btnSecondary = cn(
  flowHoverButtonClasses,
  "px-7 py-3.5 rounded-full font-semibold uppercase tracking-widest text-xs border border-clay text-clay before:bg-clay hover:text-white active:text-white",
);
const btnLight = cn(
  flowHoverButtonClasses,
  "px-7 py-3.5 rounded-full font-semibold uppercase tracking-widest text-xs bg-porcelain text-cocoa before:bg-cocoa hover:text-porcelain active:text-porcelain hover:shadow-lg",
);

interface TrainingCourseProps {
  course: Course;
  images: {
    hero: StaticImageData;
    instructor: StaticImageData;
    product?: StaticImageData;
  };
}

export default function TrainingCourse({ course, images }: TrainingCourseProps) {
  const otherCourses = trainingCourses.filter((c) => c.slug !== course.slug);

  // Course + FAQ structured data — location text only, no street address, no dates.
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.schemaDescription,
    url: `${site.baseUrl}${course.path}`,
    provider: {
      "@type": "Organization",
      name: site.brand,
      url: site.baseUrl,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseWorkload: "P1D",
      location: {
        "@type": "Place",
        name: "Greenbrier, Chesapeake, VA",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chesapeake",
          addressRegion: "VA",
          addressCountry: "US",
        },
      },
    },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: "USD",
      category: "Professional Training",
      availability: "https://schema.org/LimitedAvailability",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const interestLabel = `Express interest in ${course.title}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-linen pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Soft warm wash + grain handled globally; add a gentle radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-blush/20 blur-3xl"
        />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Copy */}
            <div className="text-center lg:text-left">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-clay">
                {course.eyebrow}
              </p>
              <h1 className="font-serif font-light text-cocoa leading-[0.95] tracking-tight text-[clamp(2.75rem,8vw,5.5rem)]">
                {course.heading.line1}
                <span className="block italic text-clay">{course.heading.line2}</span>
              </h1>
              <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-espresso/90 lg:mx-0 sm:text-lg">
                {course.subheadline}
              </p>

              {/* Detail row */}
              <dl className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
                <Detail label="Format" value={course.formatShort} />
                <span aria-hidden className="hidden h-4 w-px bg-hairline sm:inline-block" />
                <Detail label="Investment" value={course.investment} />
                <span aria-hidden className="hidden h-4 w-px bg-hairline sm:inline-block" />
                <Detail label="Location" value={course.location} />
              </dl>

              {/* CTAs */}
              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
                <InternalBrowserLink
                  href={course.inquiryUrl}
                  className={btnPrimary}
                  trackingId={`${course.trackingPrefix}_hero_express_interest`}
                  ariaLabel={interestLabel}
                >
                  {course.cta.primary}
                </InternalBrowserLink>
                <a href="#what-youll-learn" className={btnSecondary}>
                  {course.cta.secondary}
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-2xl">
                <Image
                  src={images.hero}
                  alt={course.heroImageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 28rem, 100vw"
                  className="object-cover"
                />
              </div>
              {/* Floating investment chip */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-hairline bg-porcelain/95 px-6 py-3 shadow-lg backdrop-blur lg:left-auto lg:right-6 lg:translate-x-0">
                <span className="font-serif text-2xl text-cocoa">{course.investment}</span>
                <span className="ml-2 text-xs uppercase tracking-widest text-text-secondary">
                  {course.chipLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-3xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-clay">
            The Masterclass
          </p>
          <h2 className="font-serif font-light text-cocoa">{course.overviewHeading}</h2>
          <p className="mt-6 text-base leading-relaxed text-espresso/90">{course.overview}</p>
        </div>

        {/* Highlight cards */}
        <div className="container mt-14">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {course.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-hairline/60 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <h3 className="font-serif text-xl text-cocoa">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What You'll Learn */}
      <section id="what-youll-learn" className="scroll-mt-24 bg-ivory py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-clay">
              Curriculum
            </p>
            <h2 className="font-serif font-light text-cocoa">What You&rsquo;ll Learn</h2>
            <p className="mt-5 text-espresso/90">{course.curriculumIntro}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {course.curriculum.map((section, index) => (
              <div
                key={section.group}
                className="relative rounded-2xl border border-hairline/60 bg-white p-8 shadow-sm"
              >
                <span className="font-serif text-5xl leading-none text-blush/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-cocoa">{section.group}</h3>
                <ul className="mt-5 space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-espresso/90">
                      <svg
                        aria-hidden
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-clay"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Investment */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-[1.75rem] border border-hairline/60 bg-white shadow-md">
            <div className="bg-cocoa px-8 py-10 text-center text-porcelain">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-champagne">
                Training Investment
              </p>
              <p className="mt-4 font-serif text-6xl leading-none text-porcelain sm:text-7xl">
                {course.investment}
              </p>
              <p className="mt-4 text-sm uppercase tracking-widest text-porcelain/70">
                {course.format}
              </p>
            </div>
            <div className="px-8 py-9 text-center">
              <p className="mx-auto max-w-md text-sm leading-relaxed text-text-secondary">
                {course.investmentNote}
              </p>
              <div className="mt-7">
                <a
                  href={course.inquiryAnchor}
                  className={btnPrimary}
                  data-track={`${course.trackingPrefix}_investment_express_interest`}
                >
                  {course.cta.primary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Who This Is For */}
      <section className="bg-ivory py-20 lg:py-24">
        <div className="container max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-clay">
              Is This You?
            </p>
            <h2 className="font-serif font-light text-cocoa">Who This Training Is For</h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {course.whoFor.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-hairline/50 bg-white p-5 text-sm leading-relaxed text-espresso/90"
              >
                <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Instructor */}
      <section className="py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
            <div className="relative order-1 aspect-[3/4] overflow-hidden rounded-2xl shadow-sm">
              <Image
                src={images.instructor}
                alt="Monica Talbot, licensed esthetician and owner of The Skin Sanctuary Co"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="order-2">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-clay">
                Your Instructor
              </p>
              <h2 className="font-serif font-light text-cocoa">Train with Monica Talbot</h2>
              <p className="mt-6 leading-relaxed text-espresso/90">{course.instructorBio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Product Knowledge (only for courses with a named product system) */}
      {course.product && images.product ? (
        <section className="bg-ivory py-20 lg:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
              <div className="order-2 md:order-1">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-clay">
                  Product Knowledge
                </p>
                <h2 className="font-serif font-light text-cocoa">{course.product.heading}</h2>
                <p className="mt-6 leading-relaxed text-espresso/90">{course.product.intro}</p>
                <ul className="mt-7 space-y-3">
                  {course.product.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-espresso/90">
                      <span aria-hidden className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-clay" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative order-1 aspect-square overflow-hidden rounded-2xl shadow-sm md:order-2">
                <Image
                  src={images.product}
                  alt={course.product.imageAlt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* 8. FAQ */}
      <section className="py-20 lg:py-24">
        <div className="container max-w-3xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-clay">
              Questions
            </p>
            <h2 className="font-serif font-light text-cocoa">Frequently Asked</h2>
          </div>
          <div className="divide-y divide-hairline border-y border-hairline">
            {course.faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-cocoa marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-5 w-5 flex-shrink-0 text-clay transition-transform duration-300 group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-3 pr-8 text-sm leading-relaxed text-text-secondary">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Other masterclasses */}
      {otherCourses.length > 0 ? (
        <section className="bg-ivory py-16 lg:py-20">
          <div className="container max-w-3xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-clay">
              Also Offered
            </p>
            <div className="flex flex-col gap-4">
              {otherCourses.map((other) => (
                <Link
                  key={other.slug}
                  href={other.path}
                  className="group flex flex-col items-center justify-between gap-2 rounded-2xl border border-hairline/60 bg-white px-8 py-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:flex-row sm:text-left"
                  data-track={`${course.trackingPrefix}_cross_link_${other.trackingPrefix}`}
                >
                  <span>
                    <span className="block font-serif text-2xl text-cocoa">{other.title}</span>
                    <span className="mt-1 block text-xs uppercase tracking-widest text-text-secondary">
                      {other.format} · {other.investment}
                    </span>
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-clay group-hover:text-cocoa">
                    View training →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 10. Inquiry CTA */}
      <section
        id="training-inquiry"
        className="scroll-mt-24 bg-espresso py-24 pb-32 text-porcelain md:pb-24"
      >
        <div className="container max-w-2xl text-center">
          <h2 className="font-serif font-light text-porcelain">{course.inquiryHeading}</h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-porcelain/80">
            {course.inquiryBody}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <InternalBrowserLink
              href={course.inquiryUrl}
              className={btnLight}
              trackingId={`${course.trackingPrefix}_inquiry_form`}
              ariaLabel={interestLabel}
            >
              {course.cta.inquiry}
            </InternalBrowserLink>
            <a
              href={site.contact.phoneHref}
              className={cn(
                flowHoverButtonClasses,
                "px-7 py-3.5 rounded-full font-semibold uppercase tracking-widest text-xs border border-porcelain/40 text-porcelain before:bg-porcelain hover:text-cocoa active:text-cocoa",
              )}
              data-track={`${course.trackingPrefix}_inquiry_phone`}
            >
              Call {site.contact.phone.value}
            </a>
          </div>
          <p className="mt-8 text-xs uppercase tracking-widest text-porcelain/50">
            <Link href="/services" className="text-porcelain/60 hover:text-porcelain">
              Or explore the full service menu →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center lg:text-left">
      <dt className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-text-secondary">
        {label}
      </dt>
      <dd className="mt-1 font-serif text-lg text-cocoa">{value}</dd>
    </div>
  );
}
