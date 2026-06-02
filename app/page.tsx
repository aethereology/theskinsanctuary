import Image from "next/image";
import { Metadata } from "next";
import { site } from "@/lib/site";
import { services, reviews, about, products, blogPosts } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import SignatureServicesCarousel from "@/components/SignatureServicesCarousel";
import ReviewCard from "@/components/ReviewCard";
import BookingButton from "@/components/BookingButton";
import Link from "next/link";
import lashResultImage from "@/assets/koreanlashliftfeatured.jpg";
import browResultImage from "@/assets/browresultimage11.png";
import softGirlSummerImage from "@/assets/softgirlfeatured.jpg";
import monicaPortraitImage from "@/assets/monica3.jpg";

export const metadata: Metadata = {
  title: `${site.brand} | Beauty Studio, Shop & Blog in Chesapeake, VA`,
  description: site.description,
};

export default function Home() {
  const signatureServices = services[0].items;

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[88vh] pt-28 pb-20 overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-facial.png"
          alt="A relaxing facial treatment in a warm spa room"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] md:object-center"
        />
        {/* Scrim for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/45 to-espresso/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/15 via-transparent to-espresso/45" />
        {/* Mobile-only: dim the image further so the copy stays readable */}
        <div className="absolute inset-0 md:hidden bg-espresso/35" />

        <div className="container relative z-10">
          <div className="max-w-2xl text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Lashes lifted, brows defined, skin at ease — in one quietly luxurious studio.
            </h1>
            <p className="text-lg text-porcelain/90 leading-relaxed mb-8">
              The Skin Sanctuary Co is Monica Talbot's boutique studio in Chesapeake, VA, devoted to Korean lash lifts, sculpted brows, and refined waxing. Every appointment is unhurried and entirely your own — the kind of low-maintenance beauty that still looks intentional.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 mb-8">
              <BookingButton trackingId="hero_book_my_lash_lift" />
              <BookingButton label="view services" variant="outline-light" href="/services" />
            </div>

            {/* Phone Line */}
            <a
              href={site.contact.phoneHref}
              className="inline-block text-sm text-porcelain/80 hover:text-white transition-colors"
              data-track="hero_phone_click"
            >
              Questions? Call {site.contact.phone.value}
            </a>
          </div>
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-clay uppercase tracking-widest mb-4">
              The Signature Menu
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cocoa">
              Three services, endlessly requested
            </h2>
            <p className="mt-4 text-espresso">
              The lash and brow work Monica is known for — designed for a polished look that asks very little of your morning.
            </p>
          </div>
          <SignatureServicesCarousel services={signatureServices} />
        </div>
      </section>

      {/* Lash Lift Feature */}
      <section className="py-20 bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cocoa mb-6">
                Your own lashes, beautifully lifted.
              </h2>
              <p className="text-espresso mb-6 leading-relaxed">
                The Korean Lash Lift & Tint coaxes a soft, upward curl from your natural lashes and sets it with a deep tint. The Korean method is gentler on the hair and holds longer — a wide-awake look made for fine, straight, or stubborn lashes, with mornings that no longer need mascara.
              </p>
              <div className="flex gap-2 mb-8">
                <span className="inline-block px-3 py-1 bg-champagne/20 text-clay text-xs rounded-full">
                  $130 service
                </span>
              </div>
              <BookingButton label="book my lash lift" trackingId="lash_lift_cta" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={lashResultImage}
                alt="Close-up of a Korean lash lift and tint result"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brow Feature */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden order-2 md:order-1">
              <Image
                src={browResultImage}
                alt="Close-up of a brow lamination and lash result"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cocoa mb-6">
                Brows, beautifully redefined.
              </h2>
              <p className="text-espresso mb-6 leading-relaxed">
                Shape, lift, and define in one appointment. Monica combines precise waxing, lamination, and a custom tint for fuller, brushed-up brows mapped to the architecture of your face — and a daily routine that all but disappears.
              </p>
              <div className="flex gap-2 mb-8">
                <span className="inline-block px-3 py-1 bg-champagne/20 text-clay text-xs rounded-full">
                  $125 service
                </span>
              </div>
              <BookingButton label="book my brow refresh" trackingId="brow_cta" />
            </div>
          </div>
        </div>
      </section>

      {/* Soft Girl Summer Feature */}
      <section className="py-20 bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cocoa mb-6">
                Lashes lifted, brows polished, all at once.
              </h2>
              <p className="text-espresso mb-6 leading-relaxed">
                Soft Girl Summer pairs Monica's signature brow transformation with a Korean lash lift in one unhurried appointment. The result is fuller, brushed-up brows and softly lifted lashes — a complete eye refresh that keeps your morning routine simple.
              </p>
              <div className="flex gap-2 mb-8">
                <span className="inline-block px-3 py-1 bg-champagne/20 text-clay text-xs rounded-full">
                  $255 package
                </span>
              </div>
              <BookingButton label="book the soft girl summer" trackingId="soft_girl_summer_cta" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={softGirlSummerImage}
                alt="Before and after brow and lash results from the Soft Girl Summer package"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cocoa text-center mb-16">
            The full menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {services.slice(1, 3).map((category) => (
              <div key={category.category}>
                <h3 className="font-semibold text-cocoa mb-4">
                  {category.category}
                </h3>
                <div className="divide-y divide-hairline">
                  {category.items.slice(0, 3).map((item) => (
                    <ServiceCard
                      key={item.name}
                      name={item.name}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-clay hover:text-primary-dark font-medium transition-colors"
            >
              View full menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Shop and Blog */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <p className="text-sm font-medium text-clay uppercase tracking-widest mb-4">
                Studio Shop
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cocoa mb-5">
                Aftercare products, curated by Monica
              </h2>
              <p className="text-espresso mb-8">
                Shop lash, brow, and skin essentials made for the days between
                your appointments.
              </p>
              <div className="space-y-4 mb-8">
                {products.slice(0, 2).map((product) => (
                  <Link
                    key={product.name}
                    href="/shop"
                    className="grid grid-cols-[88px_1fr] gap-4 items-center bg-white rounded-lg border border-hairline/40 p-3 shadow-sm"
                  >
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="88px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-cocoa mb-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-text-secondary">
                        {product.bestFor}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/shop"
                className="text-clay hover:text-primary-dark font-medium transition-colors"
              >
                Shop products &rarr;
              </Link>
            </div>

            <div>
              <p className="text-sm font-medium text-clay uppercase tracking-widest mb-4">
                Journal
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cocoa mb-5">
                Studio notes for better aftercare
              </h2>
              <p className="text-espresso mb-8">
                Read practical guidance for keeping your services fresh and your
                routine simple.
              </p>
              <div className="divide-y divide-hairline mb-8">
                {blogPosts.slice(0, 3).map((post) => (
                  <article key={post.slug} className="py-5 first:pt-0">
                    <p className="text-xs font-medium text-clay uppercase tracking-widest mb-2">
                      {post.category}
                    </p>
                    <h3 className="font-serif text-xl text-cocoa mb-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {post.excerpt}
                    </p>
                  </article>
                ))}
              </div>
              <Link
                href="/blog"
                className="text-clay hover:text-primary-dark font-medium transition-colors"
              >
                Read the blog &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cocoa text-center mb-16">
            In their words
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {reviews.slice(0, 6).map((review, idx) => (
              <ReviewCard key={idx} quote={review.quote} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/reviews"
              className="text-clay hover:text-primary-dark font-medium transition-colors"
            >
              Read all {reviews.length} reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* About Monica */}
      <section className="py-20 bg-ivory">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={monicaPortraitImage}
                alt="Portrait of Monica Talbot in her studio"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-cocoa mb-6">About Monica</h2>
              <p className="text-espresso mb-6 leading-relaxed">{about.bio}</p>
              <p className="text-espresso mb-8 leading-relaxed">{about.personality}</p>
              <Link
                href="/about"
                className="text-clay hover:text-primary-dark font-medium transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Teaser */}
      <section className="py-16">
        <div className="container max-w-2xl text-center">
          <h3 className="font-serif text-2xl text-cocoa mb-4">
            Before you book
          </h3>
          <p className="text-espresso mb-6">
            Your appointment is reserved exclusively for you, so we ask for at least 24 hours' notice to reschedule. A few simple guidelines on cancellations, late arrivals, and booking keep the studio calm and running on time.
          </p>
          <Link
            href="/policies"
            className="text-clay hover:text-primary-dark font-medium transition-colors"
          >
            View policies →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-espresso text-white">
        <div className="container text-center">
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl mb-8 text-white font-bold leading-tight">Ready to book?</h2>
          <p className="text-sm sm:text-base mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Choose your time with Monica in just a few taps — lash lift, brow transformation, or any service on the menu. Booking is quick, and your spot is held the moment you confirm.
          </p>
          <BookingButton variant="light" trackingId="final_cta" />
        </div>
      </section>
    </>
  );
}
