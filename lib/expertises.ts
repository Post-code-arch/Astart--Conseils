// Single ordered source of truth for the "Expertises" section.
// Kept deliberately minimal (no CMS yet). When Sanity is introduced later,
// this same shape maps cleanly onto documents (servicesParent + servicePage)
// without touching the routing or the components that consume it.

export type Expertise = {
  slug: "analyser" | "accompagner" | "developper";
  index: string; // "01" | "02" | "03"
  title: string;
  /** Short hook shown on the parent page card. */
  accroche: string;
};

export const expertisesParent = {
  title: "Trois portes,\nune même exigence.",
  // Intro qui ouvre sur le problème client — pas sur Astarté.
  intro:
    "Une décision à éclairer, un programme à évaluer, une équipe à outiller : chaque enjeu appelle une réponse différente. Nos trois expertises s'articulent selon la phase de votre projet — vous entrez par la porte qui correspond à votre besoin, et nous mobilisons les autres quand c'est utile.",
};

// Order of this array = display order on the parent page and in navigation.
export const expertises: Expertise[] = [
  {
    slug: "analyser",
    index: "01",
    title: "Analyser",
    accroche:
      "Comprendre avant d'agir : études, diagnostics et analyses qui éclairent vos décisions sur les terrains nord-africains.",
  },
  {
    slug: "accompagner",
    index: "02",
    title: "Accompagner",
    accroche:
      "Mesurer ce qui compte : évaluations, stratégies et pilotage qui produisent des décisions — pas seulement des rapports.",
  },
  {
    slug: "developper",
    index: "03",
    title: "Développer",
    accroche:
      "Transmettre ce que nous savons faire : formations et renforcement de capacités ancrés dans vos dossiers réels.",
  },
];
