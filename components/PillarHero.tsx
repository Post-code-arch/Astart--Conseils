import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type Tone = "analyser" | "accompagner" | "developper";

// Brand-mark placeholder. Swap <StarMark /> for <Image src="/assets/logo-mark.png" .../>
// once the real logo asset is provided.
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

export default function PillarHero(props: {
  tone: Tone;
  title: ReactNode;
  lead: string;
  ctaLabel: string;
  ctaHref: string;
  /** Optional — drop in the real square visual later; a placeholder shows until then. */
  imageSrc?: string;
  imageAlt?: string;
  // Accepted for call-site compatibility; not rendered in this spare layout.
  eyebrow?: string;
  index?: string;
  name?: string;
}) {
  const { tone, title, lead, ctaLabel, ctaHref, imageSrc, imageAlt } = props;

  return (
    <section className={`pillar-hero tone-${tone}`}>
      <div className="pillar-hero-panel">
        <span className="pillar-hero-mark" aria-hidden="true">
          <StarMark />
        </span>

        <div className="pillar-hero-media reveal">
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
      </div>

      <div className="pillar-hero-text">
        <h1 className="pillar-hero-title reveal">{title}</h1>
        <p className="pillar-hero-lead reveal d1">{lead}</p>
        <Link href={ctaHref} className="btn-pill outline-dark reveal d2">
          {ctaLabel} <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
