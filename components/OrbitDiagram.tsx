"use client";

export type PillarKey = "analyser" | "accompagner" | "developper";

const pillars: { key: PillarKey; num: string; name: string; sub: string; index: 1 | 2 | 3; transform: string }[] = [
  { key: "analyser", num: "01", name: "Analyser", sub: "Études & diagnostics", index: 1, transform: "translate(0, -280)" },
  { key: "accompagner", num: "02", name: "Accompagner", sub: "Évaluations", index: 2, transform: "translate(242.5, 140)" },
  { key: "developper", num: "03", name: "Développer", sub: "Formations", index: 3, transform: "translate(-242.5, 140)" },
];

export default function OrbitDiagram({
  active,
  onSelect,
}: {
  active: PillarKey;
  onSelect: (key: PillarKey) => void;
}) {
  return (
    <div className="diagram-wrap">
      <svg
        className="diagram has-active"
        viewBox="-400 -400 800 800"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Diagramme des trois piliers Astarté"
      >
        <g className="diagram-rings">
          <circle cx="0" cy="0" r="370" fill="none" />
          <circle cx="0" cy="0" r="300" fill="none" />
          <circle cx="0" cy="0" r="230" fill="none" />
          <circle cx="0" cy="0" r="160" fill="none" />
        </g>

        <g className="diagram-rotor">
          <g className="diagram-arcs">
            <path d="M 0,-280 A 280,280 0 0,1 242.5,140" fill="none" />
            <path d="M 242.5,140 A 280,280 0 0,1 -242.5,140" fill="none" />
            <path d="M -242.5,140 A 280,280 0 0,1 0,-280" fill="none" />
          </g>

          <g className="diagram-spokes">
            <line x1="0" y1="0" x2="0" y2="-280" />
            <line x1="0" y1="0" x2="242.5" y2="140" />
            <line x1="0" y1="0" x2="-242.5" y2="140" />
          </g>

          {pillars.map((p) => (
            <g
              key={p.key}
              className={`pillar pillar-${p.index}${active === p.key ? " active" : ""}`}
              data-pillar={p.key}
              transform={p.transform}
              onClick={() => onSelect(p.key)}
            >
              <circle className="pillar-bg" r="92" />
              <circle className="pillar-ring" r="105" fill="none" />
              <g className="pillar-label">
                <text className="pillar-num" y="-18">{p.num}</text>
                <text className="pillar-name" y="14">{p.name}</text>
                <text className="pillar-sub" y="38">{p.sub}</text>
              </g>
            </g>
          ))}
        </g>

        <g className="diagram-core">
          <circle className="core-bg" r="78" />
          <circle className="core-ring" r="92" fill="none" />
          <text className="core-label-top" y="-12">Astarté</text>
          <text className="core-label-bot" y="14">Conseils</text>
          <line className="core-bar" x1="-20" y1="0" x2="20" y2="0" />
        </g>

        <g className="diagram-stars">
          <circle cx="-340" cy="-180" r="3" />
          <circle cx="330" cy="-220" r="2" />
          <circle cx="-180" cy="350" r="2.5" />
          <circle cx="350" cy="280" r="3" />
          <circle cx="40" cy="-360" r="2" />
        </g>
      </svg>

      <div className="pillar-selectors">
        {pillars.map((p) => (
          <button
            key={p.key}
            className={`pillar-btn${active === p.key ? " active" : ""}`}
            data-pillar={p.key}
            onClick={() => onSelect(p.key)}
          >
            <span className="num">{p.num}</span>
            <span className="name">{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
