"use client";

import { useState } from "react";
import { PILLAR_LABEL, type Pillar, type Reference } from "@/lib/references";

type Tab = "all" | Pillar;

const tabs: { key: Tab; label: string }[] = [
  { key: "all", label: "Toutes" },
  { key: "analyser", label: "Analyser" },
  { key: "accompagner", label: "Accompagner" },
  { key: "developper", label: "Développer" },
];

export default function ReferencesFilter({ items }: { items: Reference[] }) {
  const [filter, setFilter] = useState<Tab>("all");

  return (
    <>
      <div className="ref-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`ref-tab${filter === tab.key ? " active" : ""}`}
            onClick={() => setFilter(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="refs-page-grid">
        {items.map((ref, i) => (
          <article
            key={`${ref.title}-${i}`}
            className={`ref-card reveal d${(i % 3) + 1}`}
            style={{
              background: "rgba(42,20,24,0.04)",
              borderColor: "var(--line)",
              display: filter === "all" || filter === ref.pillar ? "" : "none",
            }}
          >
            <span className="ref-tag">{PILLAR_LABEL[ref.pillar]}</span>
            <div className="ref-client" style={{ color: "var(--aub-muted)" }}>{ref.client}</div>
            <h3 style={{ color: "var(--aubergine)" }}>{ref.title}</h3>
            <p className="ref-result" style={{ color: "var(--aub-muted)", borderTopColor: "var(--line)" }}>
              <strong style={{ color: "var(--orange)" }}>Résultat</strong>{ref.result}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
