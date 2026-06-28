// Publications (page Ressources). Fallback + source de seed pour `publication`.
export type Publication = {
  year: string;
  tag: string;
  title: string;
  body: string;
  href?: string;
  order?: number;
};

export const publications: Publication[] = [
  {
    year: "2025",
    tag: "Essai",
    title: "L'épreuve du temps long — sur le rythme du conseil",
    body: "Conférence à l'École nationale d'administration de Tunis. Sur la compression du temps dans les missions de conseil et ce qu'elle coûte à la qualité.",
    order: 1,
  },
  {
    year: "2024",
    tag: "Note",
    title: "Lire un terrain — note méthodologique",
    body: "Pourquoi l'observation directe reste irremplaçable. Sur la discipline du carnet de terrain et le silence comme outil.",
    order: 2,
  },
  {
    year: "2024",
    tag: "Méthode",
    title: "Évaluation contributive en contexte fragile",
    body: "Quand l'attribution stricte est impossible : documenter la contribution avec rigueur. Cas pratique d'un programme régional.",
    order: 3,
  },
  {
    year: "2023",
    tag: "Tribune",
    title: "Genre et politiques publiques en Algérie — un état des lieux",
    body: "Synthèse de cinq ans de missions sur les dispositifs publics d'inclusion. Tribune publiée dans la revue Maghreb-Machrek.",
    order: 4,
  },
  {
    year: "2023",
    tag: "Essai",
    title: "Pourquoi nous refusons certaines missions",
    body: "Sur la déontologie du conseil et les raisons qui justifient un refus. Trois cas concrets.",
    order: 5,
  },
  {
    year: "2022",
    tag: "Méthode",
    title: "Penser le suivi-évaluation au-delà des indicateurs",
    body: "Critique constructive des cadres logiques. Vers une approche qui articule indicateurs et apprentissage.",
    order: 6,
  },
];
