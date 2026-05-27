import { faq, reviewsFeatured } from "@/lib/data";
import {
  Hero,
  TrustStrip,
  Marquee,
  ServiceCardGrid,
  WelcomeFacialPromo,
  FeaturedService,
  AboutTeaser,
  GalleryStrip,
  VisitBlock,
  CTABanner,
} from "@/components/sections";
import { ReviewGrid, FAQAccordion } from "@/components/atoms";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Marquee />
      <ServiceCardGrid />
      <WelcomeFacialPromo />
      <FeaturedService />
      <AboutTeaser />
      <GalleryStrip />
      <ReviewGrid reviews={reviewsFeatured} />
      <VisitBlock />
      <section className="section--tight band-canvas-soft">
        <div className="container hfaq">
          <div className="hfaq__head reveal">
            <div className="sec-num">09 / Frequently asked</div>
            <h2 className="display display--lg" style={{ marginTop: 10 }}>
              Before you book.
            </h2>
          </div>
          <div className="reveal" style={{ ["--reveal-delay" as string]: "120ms" } as React.CSSProperties}>
            <FAQAccordion items={faq.slice(0, 4)} />
          </div>
        </div>
      </section>
      <CTABanner title="Ready to feel taken care of?" sub="Reserve your visit" />
    </main>
  );
}
