import Link from "next/link";
import { site } from "@/lib/site";
import BookingLink from "./BookingLink";

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-hairline mt-24">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-cocoa mb-2">
              {site.brand}
            </h3>
            <p className="text-sm text-espresso mb-2">{site.tagline}</p>
            <p className="text-sm text-espresso">{site.contact.city}</p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-cocoa mb-4">Hours</h4>
            <div className="text-sm text-espresso space-y-1">
              <p>Mon-Thu: 10 AM - 5 PM</p>
              <p>Fri: 10 AM - 4 PM</p>
              <p>Sat-Sun: Closed</p>
            </div>
          </div>

          {/* Contact & Links */}
          <div>
            <h4 className="font-semibold text-cocoa mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <a
                href={site.contact.phoneHref}
                className="block text-clay hover:text-primary-dark transition-colors"
              >
                {site.contact.phone.value}
              </a>
              <a
                href={site.social.instagram.value}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-clay hover:text-primary-dark transition-colors"
              >
                Instagram
              </a>
              <BookingLink
                trackingId="footer_book"
                className="block text-clay hover:text-primary-dark transition-colors"
              >
                Book on Calendly
              </BookingLink>
            </div>
          </div>
        </div>

        {/* Footer Links & Copyright */}
        <div className="border-t border-hairline pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <div className="flex gap-6">
            <Link href="/shop" className="hover:text-clay transition-colors">
              Shop
            </Link>
            <Link href="/blog" className="hover:text-clay transition-colors">
              Blog
            </Link>
            <Link
              href="/policies"
              className="hover:text-clay transition-colors"
            >
              Policies
            </Link>
            <Link href="/contact" className="hover:text-clay transition-colors">
              Contact
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
