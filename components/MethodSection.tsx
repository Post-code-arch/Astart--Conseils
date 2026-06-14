"use client";

import { useState } from "react";
import Link from "next/link";
import OrbitDiagram, { type PillarKey } from "./OrbitDiagram";

const panels: {
  key: PillarKey;
  num: string;
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  list: string[];
  href: string;
}[] = [
  {
    key: "analyser",
    num: "01",
    eyebrow: "Pilier · Analyser",
    title: <>Études, recherches,<br /><em>diagnostics.</em></>,
    body: "Vous avez besoin de données fiables pour orienter vos décisions, justifier vos interventions ou comprendre un contexte avant d'agir. Nous menons l'enquête sur le terrain, croisons les sources, et livrons des analyses tracées jusqu'à leur source.",
    list: [
      "Études socio-économiques & sectorielles",
      "Recherches qualitatives & quantitatives",
      "Diagnostics organisationnels & territoriaux",
      "Analyses de contexte & veille stratégique",
    ],
    href: "/expertises/analyser",
  },
  {
    key: "accompagner",
    num: "02",
    eyebrow: "Pilier · Accompagner",
    title: <>Évaluations, stratégies,<br /><em>accompagnement.</em></>,
    body: "Vous conduisez un projet et avez besoin d'un regard externe pour mesurer ce qui fonctionne, ajuster, et maximiser l'impact. Nous travaillons à vos côtés sans dépossession — la décision reste vôtre.",
    list: [
      "Évaluations à mi-parcours & finales",
      "Stratégies opérationnelles & institutionnelles",
      "Suivi-évaluation & mesure d'impact",
      "Accompagnement au changement",
    ],
    href: "/expertises/accompagner",
  },
  {
    key: "developper",
    num: "03",
    eyebrow: "Pilier · Développer",
    title: <>Formations &amp; renforcement<br /><em>de capacités.</em></>,
    body: "Vous souhaitez monter en compétences vos équipes ou accompagner des bénéficiaires avec des outils ancrés dans les réalités locales. Nous concevons et animons des dispositifs sur mesure — pas des modules importés.",
    list: [
      "Formations pour ONG & institutions",
      "Programmes de renforcement de capacités",
      "Coaching individuel & collectif",
      "Ingénierie pédagogique & supports",
    ],
    href: "/expertises/developper",
  },
];

export default function MethodSection() {
  const [active, setActive] = useState<PillarKey>("analyser");

  return (
    <section className="method" id="methode">
      <div className="method-head">
        <p className="eyebrow"><span className="dot"></span> Notre approche</p>
        <h2 className="method-title">
          Trois gestes,<br />
          <em>une seule doctrine.</em>
        </h2>
        <p className="method-lead">
          Notre pratique articule trois pôles d&apos;intervention qui se complètent.
          Chaque mission entre par la porte qui correspond à son enjeu —
          et peut articuler les trois selon les phases du projet.
        </p>
      </div>

      <div className="method-stage">
        <div className="method-panel" id="method-panel">
          {panels.map((panel) => (
            <div
              key={panel.key}
              className={`panel-content${active === panel.key ? " active" : ""}`}
              data-pillar={panel.key}
            >
              <div className="panel-num">{panel.num}<span>/03</span></div>
              <p className="panel-eyebrow">{panel.eyebrow}</p>
              <h3 className="panel-title">{panel.title}</h3>
              <p className="panel-body">{panel.body}</p>
              <ul className="panel-list">
                {panel.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={panel.href} className="panel-link">
                Explorer ce pilier <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        <OrbitDiagram active={active} onSelect={setActive} />
      </div>
    </section>
  );
}
