import { Metadata } from "next";
import { site } from "@/lib/site";
import BookingButton from "@/components/BookingButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Booking | The Skin Sanctuary Co",
  description: "Book with Monica Talbot at The Skin Sanctuary Co in Chesapeake, VA. Reserve your lash lift, brow service, or waxing appointment through Calendly, or call the studio directly.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container max-w-3xl text-center">
          <h1 className="font-serif text-5xl text-cocoa mb-6">Let's get you booked</h1>
          <p className="text-lg text-espresso max-w-xl mx-auto">
            The fastest way to reserve your spot is through Calendly. Prefer to talk it through first? Monica is just a phone call away.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-2xl">
          <div className="bg-ivory rounded-lg p-8 mb-8">
            <h2 className="font-serif text-2xl text-cocoa mb-6">Book Your Appointment</h2>
            <p className="text-espresso mb-6">
              Browse Monica's live availability and reserve your service in a few taps. You'll receive a confirmation right away, and your time is held the moment you book.
            </p>
            <BookingButton trackingId="contact_book" />
          </div>

          <div className="bg-surface rounded-lg p-8 mb-8">
            <h2 className="font-serif text-2xl text-cocoa mb-6">Call Monica</h2>
            <a
              href={site.contact.phoneHref}
              className="text-lg text-clay font-semibold hover:text-primary-dark transition-colors block mb-4"
            >
              {site.contact.phone.value}
            </a>
            <p className="text-espresso">
              Curious which service is right for you? Call during studio hours and Monica will happily talk you through it.
            </p>
          </div>

          <div className="bg-ivory rounded-lg p-8 mb-8">
            <h2 className="font-serif text-2xl text-cocoa mb-6">Studio Hours</h2>
            <div className="text-espresso space-y-2">
              <p>Monday - Thursday: 10 AM - 5 PM</p>
              <p>Friday: 10 AM - 4 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-surface rounded-lg p-8">
            <h2 className="font-serif text-2xl text-cocoa mb-6">Connect on Instagram</h2>
            <a
              href={site.social.instagram.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay hover:text-primary-dark font-medium transition-colors"
            >
              @theskinsanctuary_co
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-ivory">
        <div className="container max-w-2xl text-center">
          <Link href="/policies" className="text-clay hover:text-primary-dark font-medium transition-colors">
            Read our studio policies →
          </Link>
        </div>
      </section>
    </>
  );
}
