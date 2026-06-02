import { site } from "@/lib/site";

export default function TrustStrip() {
  const trustItems = [
    "Licensed in VA",
    "Chesapeake, VA",
    `${site.trust.rating}-star rating`,
    "Korean Lash Lifts",
    "Brows",
    "Waxing",
  ];

  return (
    <div className="bg-surface border-y border-hairline/40 py-6">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-8 text-center text-xs sm:text-sm text-text-secondary font-medium tracking-wide">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6">
              {idx > 0 && <span className="text-hairline/60">·</span>}
              <span className="uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
