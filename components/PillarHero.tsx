import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type Tone = "analyser" | "accompagner" | "developper";

function StarMark() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="2" />
      <g stroke="currentColor" strokeWidth="6">
        <line x1="50" y1="16" x2="50" y2="84" />
        <line x1="16" y1="50" x2="84" y2="50" />
        <line x1="26" y1="26" x2="74" y2="74" />
        <line x1="74" y1="26" x2="26" y2="74" />
      </g>
    </svg>
  );
}

export default function PillarHero({
  tone,
  index,
  name,
  eyebrow,
  title,
  lead,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
}: {
  tone: Tone;
  index: string;
  name: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
  ctaLabel: string;
  ctaHref: string;
  /** Optional — drop in the real visual later; a placeholder shows until then. */
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`pillar-hero tone-${tone}`}>
      <div className="pillar-hero-text on-light">
        <p className="eyebrow reveal">
          <span className="dot"></span> {eyebrow}
        </p>
        <h1 className="pillar-hero-title reveal d1">{title}</h1>
        <p className="pillar-hero-lead reveal d2">{lead}</p>
        <Link href={ctaHref} className="btn-pill outline-dark reveal d3">
          {ctaLabel} <span className="arrow">→</span>
        </Link>
      </div>

      <div className="pillar-hero-panel">
        <span className="pillar-hero-star">
          <StarMark />
        </span>

        <div className="pillar-hero-media reveal d2">
          {imageSrc ? (
            <Image src={imageSrc} alt={imageAlt ?? ""} fill sizes="(max-width: 980px) 90vw, 45vw" />
          ) : (
            <div className="pillar-hero-ph" aria-label="Emplacement du visuel — à venir">
              <span className="pillar-hero-ph-star">
                <StarMark />
              </span>
              <span>Visuel à venir</span>
            </div>
          )}
        </div>

        <span className="pillar-hero-index">
          {index} — {name}
        </span>
      </div>
    </section>
  );
}
