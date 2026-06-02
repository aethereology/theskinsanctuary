import { Metadata } from "next";
import { policies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Studio Policies | The Skin Sanctuary Co",
  description: "The Skin Sanctuary Co's cancellation, no-show, late arrival, and booking policies — a few simple guidelines that keep the studio calm and running on time.",
};

export default function PoliciesPage() {
  return (
    <section className="pt-32 pb-16">
      <div className="container max-w-3xl">
        <h1 className="font-serif text-5xl text-cocoa mb-4 text-center">Studio policies</h1>
        <p className="text-espresso text-center max-w-xl mx-auto mb-12">
          A calm, unhurried appointment depends on a little structure. These guidelines keep things fair for every guest — and for Monica.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-cocoa mb-4">Cancellation Policy</h2>
            <p className="text-espresso leading-relaxed">{policies.cancellation}</p>
          </div>

          <div className="bg-ivory p-6 rounded-lg">
            <h2 className="font-serif text-2xl text-cocoa mb-4">No-Show Policy</h2>
            <p className="text-espresso leading-relaxed">{policies.noShow}</p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-cocoa mb-4">Late Arrival Policy</h2>
            <p className="text-espresso leading-relaxed">{policies.late}</p>
          </div>

          <div className="bg-ivory p-6 rounded-lg">
            <h2 className="font-serif text-2xl text-cocoa mb-4">Booking Policy</h2>
            <p className="text-espresso leading-relaxed">{policies.booking}</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-champagne/10 rounded-lg text-center">
          <p className="text-espresso">
            Have questions about our policies? Please call{" "}
            <a href="tel:+16194582483" className="text-clay font-semibold hover:text-primary-dark">
              619-458-2483
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
