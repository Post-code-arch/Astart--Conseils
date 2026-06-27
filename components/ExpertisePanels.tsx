import Link from "next/link";
import type { Expertise } from "@/lib/expertises";

// Desktop: doctrine heading band + 3-column grid.
// Mobile: 100vh sticky stacking cards.
export default function ExpertisePanels({ items }: { items: Expertise[] }) {
  return (
    <>
      {/* DESKTOP */}
      <section className="x-desktop">
        <div className="x-head">
          <h2 className="x-head-title">
            Trois interventions, <em>/ une seule approche.</em>
          </h2>
        </div>
        <div className="x-grid">
          {items.map((e) => (
            <Link key={e.slug} href={`/expertises/${e.slug}`} className={`x-col tone-${e.slug}`}>
              <h3 className="x-col-title">{e.title}</h3>
              <div className="x-col-foot">
                <p className="x-col-accroche">{e.accroche}</p>
                <span className="x-col-cta">
                  Explorer ce pilier <span className="arrow">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MOBILE — 100vh stacking cards */}
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
    </>
  );
}
