// components/atoms.tsx — ServiceTable, ReviewCard, ReviewGrid, FAQAccordion.
// All presentational (server components); FAQ uses native <details> so needs no JS.
import Link from "next/link";
import type { Faq, Review, ServiceItem } from "@/lib/data";
import { ChevronDownIcon } from "@/components/icons";

export function ServiceTable({
  title,
  intro,
  tagline,
  n,
  rows,
  note,
}: {
  title: string;
  intro?: string;
  tagline?: string;
  n?: string;
  rows: ServiceItem[];
  note?: string;
}) {
  return (
    <div className="stbl">
      <div className="stbl__head">
        <div className="spread">
          <h3 className="display display--lg">{title}</h3>
          {n && <span className="stbl__num">{n}</span>}
        </div>
        {tagline && (
          <p className="display display--sm italic" style={{ color: "var(--tss-mushroom)", marginTop: 6 }}>
            {tagline}
          </p>
        )}
        {intro && (
          <p className="body" style={{ marginTop: 10, color: "var(--tss-fg-muted)", maxWidth: "52ch" }}>
            {intro}
          </p>
        )}
      </div>
      <table>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="stbl__c-name">
                <div className="stbl__name">
                  {r.name}
                  {r.tag && <span className="chip chip--mushroom stbl__tag">{r.tag}</span>}
                </div>
                {r.subtitle && <div className="stbl__sub">{r.subtitle}</div>}
                {r.description && <div className="stbl__desc">{r.description}</div>}
              </td>
              <td className="stbl__dur">{r.duration || "—"}</td>
              <td className="stbl__price">{r.price ? `$${r.price}` : "TBD"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {note && (
        <p className="small" style={{ marginTop: 18, fontStyle: "italic", color: "var(--tss-fg-subtle)" }}>
          {note}
        </p>
      )}
    </div>
  );
}

export function ReviewCard({
  quote,
  author,
  theme,
  large = false,
  dark = false,
}: Review & { large?: boolean; dark?: boolean }) {
  return (
    <article className={"rc" + (large ? " rc--lg" : "") + (dark ? " rc--dark" : "")}>
      <div className="rc__stars stars" aria-label="5 stars">★★★★★</div>
      <blockquote>“{quote}”</blockquote>
      <div className="rc__foot">
        <span className="rc__author">— {author}</span>
        {theme && <span className="rc__theme">{theme}</span>}
      </div>
    </article>
  );
}

export function ReviewGrid({ reviews }: { reviews: Review[] }) {
  return (
    <section className="section rg">
      <div className="container">
        <div className="rg__head reveal">
          <div className="sec-num">08 / Client love</div>
          <h2 className="display display--xl" style={{ marginTop: 14 }}>
            <span className="italic">Why clients</span>
            <br />
            keep coming back.
          </h2>
          <div className="rg__rating">
            <span className="rg__r-n">5.0</span>
            <div className="rg__r-meta">
              <span className="stars" style={{ fontSize: 16, letterSpacing: "3px" }}>★★★★★</span>
              <span className="small">12 Google reviews</span>
            </div>
          </div>
        </div>
        <div className="rg__grid">
          {reviews.map((r, i) => (
            <div key={i} className="reveal" style={{ "--reveal-delay": i * 80 + "ms" } as React.CSSProperties}>
              <ReviewCard {...r} />
            </div>
          ))}
        </div>
        <div className="rg__foot">
          <Link className="btn btn--ghost" href="/reviews">
            Read all reviews →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FAQAccordion({ items, columns = 1 }: { items: Faq[]; columns?: 1 | 2 }) {
  return (
    <div className={"faq" + (columns === 2 ? " faq--2col" : "")}>
      {items.map((it, i) => (
        <details key={i}>
          <summary>
            <span className="faq__q">{it.q}</span>
            <span className="faq__chev" aria-hidden="true">
              <ChevronDownIcon />
            </span>
          </summary>
          <div className="faq__body">{it.a}</div>
        </details>
      ))}
    </div>
  );
}
