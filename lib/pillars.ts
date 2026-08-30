// Piliers (Analyser / Accompagner / Développer) — source unique consommée par
// l'Accueil (bulles), la page mère (colonnes) et /expertises/[slug] (hero).
// Fallback + source de seed pour le type Sanity `pillar`.
export type PillarSlug = "analyser" | "accompagner" | "developper";

export type Pillar = {
  slug: PillarSlug;
  index: string;
  name: string;
  // Bulle Accueil (MethodSection)
  homeEyebrow: string;
  homeTitle: string;
  homeTitleEm: string;
  homeBody: string;
  homeList: string[];
  // Colonne page mère
  accroche: string;
  // Hero de la page pilier
  heroEyebrow: string;
  heroTitle: string;
  heroTitleEm: string;
  heroLead: string;
  heroCtaLabel: string;
  heroImageUrl?: string; // rempli depuis Sanity ; placeholder si absent
};

export const pillars: Pillar[] = [
  {
    slug: "analyser",
    index: "01",
    name: "Analyser",
    homeEyebrow: "Pilier · Analyser",
    homeTitle: "Études, recherches,",
    homeTitleEm: "diagnostics.",
    homeBody:
      "Vous avez besoin de données fiables pour orienter vos décisions, justifier vos interventions ou comprendre un contexte avant d'agir. Nous menons l'étude sur le terrain, croisons les sources, et livrons des analyses solides, documentées et directement utilisables.",
    homeList: [
      "Études socio-techniques & sectorielles",
      "Recherches qualitatives & quantitatives",
      "Diagnostics organisationnels & territoriaux",
      "Analyses de contexte & veille stratégique",
    ],
    accroche:
      "Comprendre avant d'agir : études, diagnostics et analyses qui éclairent vos décisions.",
    heroEyebrow: "Pilier 01 · Études · Recherches · Diagnostics",
    heroTitle: "Comprendre",
    heroTitleEm: "avant d'agir.",
    heroLead:
      "Les décisions stratégiques s'appuient sur des données fiables. Nous produisons les études, les diagnostics et les analyses qui éclairent vos choix — où la nuance contextuelle reste, selon nous, la première forme d'expertise.",
    heroCtaLabel: "Discuter d'une mission",
  },
  {
    slug: "accompagner",
    index: "02",
    name: "Accompagner",
    homeEyebrow: "Pilier · Accompagner",
    homeTitle: "Évaluations, stratégies,",
    homeTitleEm: "accompagnement.",
    homeBody:
      "Vous conduisez un projet et avez besoin d'un regard externe pour mesurer ce qui fonctionne, ajuster le cap et renforcer l'impact. Nous travaillons à vos côtés, sans dépossession — la décision reste la vôtre.",
    homeList: [
      "Évaluations à mi-parcours & finales",
      "Stratégies opérationnelles & institutionnelles",
      "Suivi-évaluation & mesure d'impact",
      "Accompagnement au changement",
    ],
    accroche:
      "Mesurer ce qui compte : évaluations, stratégies et pilotage qui appuient des décisions.",
    heroEyebrow: "Pilier 02 · Suivi-Évaluation · Stratégies · Pilotage",
    heroTitle: "Mesurer ce qui compte,",
    heroTitleEm: "ajuster ce qui doit l'être.",
    heroLead:
      "L'évaluation, la stratégie et l'accompagnement opérationnel doivent guider des décisions éclairées. Nous travaillons aux côtés des équipes pour transformer l'analyse en arbitrages concrets, sans dépossession.",
    heroCtaLabel: "Discuter d'une mission",
  },
  {
    slug: "developper",
    index: "03",
    name: "Développer",
    homeEyebrow: "Pilier · Développer",
    homeTitle: "Formations & renforcement",
    homeTitleEm: "de capacités.",
    homeBody:
      "Vous souhaitez monter en compétences, ou renforcer celles de vos équipes, avec des contenus et des outils ancrés dans vos réalités. Nous concevons et animons des dispositifs sur mesure pensés avec vous — pas du prêt à penser.",
    homeList: [
      "Formations pour institutions nationales et internationales",
      "Programmes de renforcement de capacités personnalisé",
      "Accompagnement individuel & collectif",
      "Ingénierie pédagogique & supports",
    ],
    accroche:
      "Renforcer ce que vos équipes peuvent faire : formations et montée en compétences ancrées dans vos contextes et réalités.",
    heroEyebrow: "Pilier 03 · Formations · Renforcement de capacités · Programmes",
    heroTitle: "Transmettre",
    heroTitleEm: "ce que nous savons faire.",
    heroLead:
      "Nos formations ne sont pas des modules importés. Elles sont conçues à partir de vos dossiers, vos données, vos terrains — et elles laissent à l'organisation des outils qu'elle peut redéployer en interne, sans nous.",
    heroCtaLabel: "Construire un programme",
  },
];

export function pillarBySlug(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}
