"use client";

import { useState } from "react";

type Pillar = "all" | "analyser" | "accompagner" | "developper";

const tabs: { key: Pillar; label: string }[] = [
  { key: "all", label: "Toutes" },
  { key: "analyser", label: "Analyser" },
  { key: "accompagner", label: "Accompagner" },
  { key: "developper", label: "Développer" },
];

const refs: {
  pillar: Exclude<Pillar, "all">;
  tag: string;
  client: string;
  title: string;
  result: string;
  reveal: string;
}[] = [
  {
    pillar: "analyser",
    tag: "Analyser",
    client: "Union Européenne · Algérie",
    title: "Étude sur l'égalité de genre dans l'accès au marché de l'emploi",
    result: "Base de données utilisée pour orienter la politique de coopération UE-Algérie sur 3 ans.",
    reveal: "reveal d1",
  },
  {
    pillar: "accompagner",
    tag: "Accompagner",
    client: "GIZ · Maroc & Algérie",
    title: "Évaluation mi-parcours d'un programme d'entrepreneuriat féminin régional",
    result: "Recommandations adoptées à 80% par le comité de pilotage.",
    reveal: "reveal d2",
  },
  {
    pillar: "developper",
    tag: "Développer",
    client: "Oxfam · Algérie",
    title: "Formation des équipes terrain à l'approche genre et au suivi-évaluation sensible",
    result: "42 cadres formés. Outils intégrés au manuel opérationnel.",
    reveal: "reveal d3",
  },
  {
    pillar: "analyser",
    tag: "Analyser",
    client: "SCAC · Ambassade de France",
    title: "Diagnostic des dispositifs d'appui à la jeunesse universitaire algérienne",
    result: "18 acteurs cartographiés et 7 axes prioritaires pour le prochain cycle.",
    reveal: "reveal d1",
  },
  {
    pillar: "accompagner",
    tag: "Accompagner",
    client: "ONU Femmes · Maghreb",
    title: "Stratégie régionale pour l'autonomisation économique des femmes rurales",
    result: "Document stratégique 2024-2027 validé. Trois pays alignés sur un cadre commun.",
    reveal: "reveal d2",
  },
  {
    pillar: "developper",
    tag: "Développer",
    client: "GIZ · Algérie",
    title: "Cycle de formation au pilotage axé résultats pour cadres ministériels",
    result: "60 cadres formés sur 18 mois. Cadre logique adopté pour 2 directions.",
    reveal: "reveal d3",
  },
  {
    pillar: "analyser",
    tag: "Analyser",
    client: "Ministère de la Formation Professionnelle",
    title: "Étude sur l'adéquation formation-emploi dans le secteur des services",
    result: "1 200 entreprises et 800 stagiaires interrogés. Recommandations intégrées au plan sectoriel 2025.",
    reveal: "reveal d1",
  },
  {
    pillar: "accompagner",
    tag: "Accompagner",
    client: "Union Européenne · Tunisie & Algérie",
    title: "Évaluation finale d'un programme régional sur les droits économiques",
    result: "47 recommandations, dont 38 reprises dans la nouvelle phase de coopération.",
    reveal: "reveal d2",
  },
  {
    pillar: "developper",
    tag: "Développer",
    client: "FES · Algérie",
    title: "Programme de renforcement des capacités d'analyse politique d'OSC",
    result: "24 cadres associatifs formés. 6 organisations ont publié une note d'analyse dans l'année.",
    reveal: "reveal d3",
  },
];

export default function ReferencesFilter() {
  const [filter, setFilter] = useState<Pillar>("all");

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
        {refs.map((ref, i) => (
          <article
            key={i}
            className={`ref-card ${ref.reveal}`}
            style={{
              background: "rgba(42,20,24,0.04)",
              borderColor: "var(--line)",
              display: filter === "all" || filter === ref.pillar ? "" : "none",
            }}
          >
            <span className="ref-tag">{ref.tag}</span>
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
