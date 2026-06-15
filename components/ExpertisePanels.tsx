import Link from "next/link";
import type { Expertise } from "@/lib/expertises";

// Full-screen stacking cards: each expertise is a 100vh sticky card; as you
// scroll, each card pins and the next slides up over it.
export default function ExpertisePanels({ items }: { items: Expertise[] }) {
  return (
    <div className="expertise-stack">
      {items.map((e) => (
        <article key={e.slug} className={`xcard tone-${e.slug}`}>
          <div className="xcard-inner">
            <h2 className="xcard-title">{e.title}</h2>
            <p className="xcard-accroche">{e.accroche}</p>
            <Link href={`/expertises/${e.slug}`} className="xcard-cta">
              Explorer ce pilier <span className="arrow">→</span>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
