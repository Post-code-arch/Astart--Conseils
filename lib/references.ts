// Références / missions de la page /references (grille filtrable).
// Fallback + source de seed pour le type Sanity `reference`.
export type Pillar = "analyser" | "accompagner" | "developper";

export type Reference = {
  pillar: Pillar;
  client: string;
  title: string;
  result: string;
  order?: number;
};

export const PILLAR_LABEL: Record<Pillar, string> = {
  analyser: "Analyser",
  accompagner: "Accompagner",
  developper: "Développer",
};

export const references: Reference[] = [
  {
    pillar: "analyser",
    client: "Union Européenne · Algérie",
    title: "Étude sur l'égalité de genre dans l'accès au marché de l'emploi",
    result: "Base de données utilisée pour orienter la politique de coopération UE-Algérie sur 3 ans.",
    order: 1,
  },
  {
    pillar: "accompagner",
    client: "GIZ · Maroc & Algérie",
    title: "Évaluation mi-parcours d'un programme d'entrepreneuriat féminin régional",
    result: "Recommandations adoptées à 80% par le comité de pilotage.",
    order: 2,
  },
  {
    pillar: "developper",
    client: "Oxfam · Algérie",
    title: "Formation des équipes terrain à l'approche genre et au suivi-évaluation sensible",
    result: "42 cadres formés. Outils intégrés au manuel opérationnel.",
    order: 3,
  },
  {
    pillar: "analyser",
    client: "SCAC · Ambassade de France",
    title: "Diagnostic des dispositifs d'appui à la jeunesse universitaire algérienne",
    result: "18 acteurs cartographiés et 7 axes prioritaires pour le prochain cycle.",
    order: 4,
  },
  {
    pillar: "accompagner",
    client: "ONU Femmes · Maghreb",
    title: "Stratégie régionale pour l'autonomisation économique des femmes rurales",
    result: "Document stratégique 2024-2027 validé. Trois pays alignés sur un cadre commun.",
    order: 5,
  },
  {
    pillar: "developper",
    client: "GIZ · Algérie",
    title: "Cycle de formation au pilotage axé résultats pour cadres ministériels",
    result: "60 cadres formés sur 18 mois. Cadre logique adopté pour 2 directions.",
    order: 6,
  },
  {
    pillar: "analyser",
    client: "Ministère de la Formation Professionnelle",
    title: "Étude sur l'adéquation formation-emploi dans le secteur des services",
    result: "1 200 entreprises et 800 stagiaires interrogés. Recommandations intégrées au plan sectoriel 2025.",
    order: 7,
  },
  {
    pillar: "accompagner",
    client: "Union Européenne · Tunisie & Algérie",
    title: "Évaluation finale d'un programme régional sur les droits économiques",
    result: "47 recommandations, dont 38 reprises dans la nouvelle phase de coopération.",
    order: 8,
  },
  {
    pillar: "developper",
    client: "FES · Algérie",
    title: "Programme de renforcement des capacités d'analyse politique d'OSC",
    result: "24 cadres associatifs formés. 6 organisations ont publié une note d'analyse dans l'année.",
    order: 9,
  },
];
