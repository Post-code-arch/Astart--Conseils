"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import type { Formation } from "@/lib/formations";

// Index éditorial extensible : chaque formation est une ligne pleine largeur
// (numéro + titre + méta). Au clic, la ligne se déplie et révèle l'accroche
// et les modules. Un seul panneau ouvert à la fois.
export default function FormationsIndex({ items }: { items: Formation[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="fx-index">
      {items.map((f, i) => {
        const isOpen = open === i;
        const panelId = `fx-panel-${i}`;
        return (
          <div key={f.title} className={`fx-row${isOpen ? " open" : ""}`}>
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
              <span className="fx-chevron" aria-hidden="true">▾</span>
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
                    <p className="fx-accroche">{f.accroche}</p>
                    <div className="fx-modules-wrap">
                      <span className="fx-modules-label">Au programme</span>
                      <ul className="fx-modules">
                        {f.modules.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                      <Link href="/#contact" className="fx-cta">
                        Programmer cette session <span className="arrow">→</span>
                      </Link>
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
