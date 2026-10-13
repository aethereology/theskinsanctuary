import type { ServiceCategory } from "@/lib/data";
import ServiceCard from "./ServiceCard";
import styles from "./HalloweenSpecials.module.css";

function Cobweb({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <path d="M0 0H180M0 0V180M0 0L172 55M0 0L130 130M0 0L55 172" />
      <path d="M0 35Q14 27 33 11Q32 29 25 25Q29 32 11 33Q27 14 35 0M0 75Q28 61 71 23Q66 55 53 53Q55 66 23 71Q61 28 75 0M0 120Q48 98 114 37Q102 83 85 85Q83 102 37 114Q98 48 120 0M0 165Q68 136 157 51Q141 116 117 117Q116 141 51 157Q136 68 165 0" />
    </svg>
  );
}

function Spider({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 70 170" fill="none">
      <path d="M35 0V109" stroke="currentColor" strokeWidth="1" />
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 124L15 113L10 99M26 130L10 124L3 115M27 136L11 140L5 152M29 140L21 151L20 163M42 124L55 113L60 99M44 130L60 124L67 115M43 136L59 140L65 152M41 140L49 151L50 163" />
      </g>
      <ellipse cx="35" cy="134" rx="12" ry="15" fill="currentColor" />
      <circle cx="35" cy="117" r="8" fill="currentColor" />
      <circle cx="32" cy="116" r="1.5" fill="#f8e7d4" />
      <circle cx="38" cy="116" r="1.5" fill="#f8e7d4" />
    </svg>
  );
}

function Pumpkin({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 150 140" fill="none">
      <path d="M73 32Q68 16 84 7L91 15Q78 19 82 34" fill="#7b8765" />
      <path d="M82 29Q101 17 112 26" stroke="#7b8765" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="45" cy="81" rx="34" ry="45" fill="#c76832" />
      <ellipse cx="106" cy="81" rx="34" ry="45" fill="#c76832" />
      <ellipse cx="61" cy="81" rx="32" ry="48" fill="#df8845" />
      <ellipse cx="90" cy="81" rx="32" ry="48" fill="#df8845" />
      <ellipse cx="75" cy="81" rx="25" ry="49" fill="#ed9b55" />
      <path d="M39 74L57 57L62 78ZM91 78L96 57L113 74ZM69 89L76 78L83 89Z" fill="#352520" />
      <path d="M39 92Q75 123 113 92L103 111L92 108L84 119H66L59 108L48 111Z" fill="#352520" />
      <path d="M45 96L50 105L57 102M96 102L103 105L108 96" stroke="#f6c57f" strokeWidth="2" />
    </svg>
  );
}

export default function HalloweenSpecials({ category }: { category: ServiceCategory }) {
  return (
    <section id="specials" className={styles.section} aria-labelledby="specials-heading">
      <div className={styles.decorations} aria-hidden="true">
        <Cobweb className={styles.webLeft} />
        <Cobweb className={styles.webRight} />
        <Spider className={styles.spiderLeft} />
        <Spider className={styles.spiderRight} />
        <span className={styles.moon} />
        <span className={styles.starOne}>✦</span>
        <span className={styles.starTwo}>✧</span>
        <span className={styles.starThree}>✦</span>
        <div className={styles.pumpkins}>
          <Pumpkin className={styles.pumpkinSmall} />
          <Pumpkin className={styles.pumpkinLarge} />
        </div>
      </div>
      <div className={`container ${styles.content}`}>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>A little spooky. A lot of savings.</p>
          <h2 id="specials-heading" className={`font-serif ${styles.title}`}>
            {category.category}
          </h2>
          <p className={styles.description}>{category.description}</p>
          <span className={styles.badge}>Treat yourself through October 31</span>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuLabel} aria-hidden="true">Your beauty treats</div>
          {category.items.map((item) => <ServiceCard key={item.name} {...item} />)}
        </div>
      </div>
    </section>
  );
}
