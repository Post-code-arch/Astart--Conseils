"use client";

import Link from "next/link";
import { useState } from "react";
import type { Expertise } from "@/lib/expertises";

// Full-screen expertise selector.
// Desktop: horizontal panels expand on hover (CSS).
// Mobile: diagonal stacked bands — tap a band to expand and reveal its idea.
export default function ExpertisePanels({ items }: { items: Expertise[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="expertise-panels">
      <span className="ep-overline">Nos trois pôles — choisissez votre porte</span>
      {items.map((e, i) => (
        <div
          key={e.slug}
          className={`expertise-panel tone-${e.slug}${open === i ? " is-open" : ""}`}
        >
          <span
            className="ep-media"
            aria-hidden="true"
            style={{
              backgroundImage: `linear-gradient(165deg, rgba(20,8,10,0.38), rgba(20,8,10,0.66)), url(${e.image})`,
            }}
          />
          <button
            type="button"
            className="ep-head"
            aria-expanded={open === i}
            onClick={() => setOpen(i)}
          >
            <span className="ep-title">{e.title}</span>
          </button>
          <div className="ep-body">
            <p className="ep-accroche">{e.accroche}</p>
            <Link href={`/expertises/${e.slug}`} className="ep-cta">
              Explorer ce pilier <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
