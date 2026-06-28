"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import type { Formation } from "@/lib/formations";

// Accent warm-earth par ligne (cycle) — donne de la couleur et du rythme
// sans inventer de catégories hors du copy validé.
const ACCENTS = [
  "#E8853A", // orange
  "#B8533A", // rust
  "#B8924A", // gold
  "#A23B2E", // terracotta
  "#C76A2E", // amber
  "#8A5A2B", // bronze
  "#9E3B47", // plum-red
  "#6E4A1F", // umber
];

// Index éditorial extensible, version enrichie : accent coloré par ligne,
// flood au survol, grand numéro, panneau ouvert riche.
export default function FormationsIndex({ items }: { items: Formation[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="fx-index">
      {items.map((f, i) => {
        const isOpen = open === i;
        const panelId = `fx-panel-${i}`;
        const accent = ACCENTS[i % ACCENTS.length];
        return (
          <div
            key={f.title}
            className={`fx-row${isOpen ? " open" : ""}`}
            style={{ "--fx-accent": accent } as CSSProperties}
          >
            <button
              type="button"
              className="fx-row-head"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="fx-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="fx-main">
                <span className="fx-title">{f.title}</span>
                <span className="fx-meta">
                  <span>{f.duree}</span>
                  <span>{f.langue}</span>
                  {f.effectif && <span>{f.effectif}</span>}
                </span>
              </span>
              <span className="fx-chevron" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  className="fx-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="fx-panel-inner">
                    <span className="fx-ghost" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <div className="fx-panel-lead">
                      <p className="fx-accroche">{f.accroche}</p>
                      <Link href="/#contact" className="fx-cta">
                        Programmer cette session <span className="arrow">→</span>
                      </Link>
                    </div>
                    <div className="fx-modules-wrap">
                      <span className="fx-modules-label">Au programme</span>
                      <ul className="fx-modules">
                        {f.modules.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
