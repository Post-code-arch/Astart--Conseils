// Références / missions — grille groupée par catégorie (page /references et
// sections "Quelques missions" des pages piliers). Fallback + source de seed
// pour le type Sanity `reference`. Sanity fait foi si des documents existent
// (voir lib/content.ts::getReferences) ; ce tableau ne sert que de repli.
export type Pillar = "analyser" | "accompagner" | "developper";

export type Reference = {
  pillar: Pillar;
  group: string;
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
    group: "Études & diagnostics",
    client: "GIZ Algérie · Ministère de l'Industrie · 2024-2025",
    title: "État des lieux sur les besoins d'accompagnement des femmes entrepreneures dans le secteur industriel",
    result: "Cartographie des segments de femmes entrepreneures, analyse des motivations, obstacles et besoins spécifiques, identification des lacunes dans les dispositifs existants. Recommandations différenciées par segment.",
    order: 1,
  },
  {
    pillar: "analyser",
    group: "Études & diagnostics",
    client: "Programme S@lamat · The SecDev Foundation · 2021-2022",
    title: "Étude sur les effets psychosociaux de la violence numérique contre les femmes en Algérie",
    result: "Analyse contextuelle, identification des formes de violence numérique et de leurs effets psychologiques et sociaux sur les femmes et leur rapport au numérique.",
    order: 2,
  },
  {
    pillar: "analyser",
    group: "Études & diagnostics",
    client: "Délégation de l'Union Européenne · 2021",
    title: "Profil pays — Approche égalité · Algérie",
    result: "Synthèse socio-économique sur la condition des femmes, les stratégies gouvernementales et les cadres légaux.",
    order: 3,
  },
  {
    pillar: "analyser",
    group: "Évaluations",
    client: "CERAI · 2025",
    title: "Évaluation finale · Projet jardins familiaux durables",
    result: "Évaluation externe finale d'un projet d'amélioration de la sécurité alimentaire via des jardins familiaux agro-écologiques gérés par des femmes dans les camps sahraouis.",
    order: 4,
  },
  {
    pillar: "analyser",
    group: "Évaluations",
    client: "Cruz Roja Española · 2023",
    title: "Évaluation finale · Projet de distribution alimentaire · Camps sahraouis",
    result: "Évaluation externe d'un projet d'aide alimentaire dans les camps de réfugiés sahraouis",
    order: 5,
  },
  {
    pillar: "accompagner",
    group: "Accompagnement & stratégie",
    client: "Délégation UE Algérie · 2022",
    title: "Intégration de l'approche égalité dans deux programmes de coopération bilatérale",
    result: "Appui à l'intégration de l'approche dans la logique d'intervention, le cadre logique et les matrices d'indicateurs de deux programmes UE — secteurs climat et agribusiness.",
    order: 6,
  },
  {
    pillar: "accompagner",
    group: "Accompagnement & stratégie",
    client: "SCAC · Ambassade de France en Algérie · 2022-2025",
    title: "Mise en œuvre des projets NISSA et ECLAT-DZ",
    result: "Conception et mise en œuvre de deux programmes d'accompagnement dédiés aux porteuses de projets et aux femmes entrepreneures.",
    order: 7,
  },
  {
    pillar: "developper",
    group: "Formations",
    client: "GIZ Algérie · En cours · 2025-2026",
    title: "Conception d'un module de sensibilisation et d'information à l'entrepreneuriat des femmes et à l'économie verte",
    result: "Conception et animation d'un dispositif de sensibilisation destiné à des publics cibles spécifiques, visant à favoriser une acceptation positive du rôle des femmes dans le secteur entrepreneurial et l'économie verte.",
    order: 8,
  },
  {
    pillar: "developper",
    group: "Formations",
    client: "GIZ Algérie · 2023-2024",
    title: "Formation « Approche égalité et développement » · Algérie",
    result: "Conception et animation de sessions de formation sur l'intégration de l'approche égalité dans les projets de développement, et élaboration de la boîte à outils pédagogique pour en permettre la réplication.",
    order: 9,
  },
  {
    pillar: "developper",
    group: "Formations",
    client: "Délégation UE Algérie · 2023",
    title: "Ateliers de formation · Gestion des conflits et communication assertive",
    result: "Animation de 16 ateliers de formation pour l'ensemble du personnel de la Délégation.",
    order: 10,
  },
  {
    pillar: "developper",
    group: "Formations",
    client: "Friedrich-Ebert-Stiftung · 2021-2024",
    title: "Formation aux Intelligences Collectives et Citoyennes",
    result: "Animation de plusieurs sessions dans le cadre du projet RAJE.",
    order: 11,
  },
];
