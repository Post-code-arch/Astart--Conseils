"use client";

import { useState } from "react";
import Link from "next/link";
import OrbitDiagram, { type PillarKey } from "./OrbitDiagram";
import type { Pillar } from "@/lib/pillars";

export default function MethodSection({ pillars }: { pillars: Pillar[] }) {
  const [active, setActive] = useState<PillarKey>((pillars[0]?.slug as PillarKey) ?? "analyser");

  return (
    <section className="method" id="methode">
      <div className="method-head">
        <p className="eyebrow"><span className="dot"></span> Notre approche</p>
        <h2 className="method-title">
          Trois interventions,<br />
          <em>une seule approche.</em>
        </h2>
        <p className="method-lead">
          Notre pratique s&apos;articule autour de trois pôles qui se complètent.
          Chaque mission entre par la porte qui correspond à son enjeu —
          et peut mobiliser les trois, selon les phases du projet.
        </p>
      </div>

      <div className="method-stage">
        <div className="method-panel" id="method-panel">
          {pillars.map((p) => (
            <div
              key={p.slug}
              className={`panel-content${active === p.slug ? " active" : ""}`}
              data-pillar={p.slug}
            >
              <div className="panel-num">{p.index}<span>/03</span></div>
              <p className="panel-eyebrow">{p.homeEyebrow}</p>
              <h3 className="panel-title">{p.homeTitle}<br /><em>{p.homeTitleEm}</em></h3>
              <p className="panel-body">{p.homeBody}</p>
              <ul className="panel-list">
                {p.homeList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={`/expertises/${p.slug}`} className="panel-link">
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
