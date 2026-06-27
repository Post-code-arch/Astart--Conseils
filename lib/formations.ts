// Single ordered source of truth for the "Formations" catalogue.
// Kept deliberately minimal (no CMS yet). The shape mirrors the proposed Sanity
// `formation` document (title, kind, accroche, duree, langue, effectif, modules[])
// so it can be migrated to Sanity later without touching the page or components.

export type Formation = {
  title: string;
  /** "catalogue" = programme du catalogue · "surMesure" = programme dédié (rendu à part). */
  kind: "catalogue" | "surMesure";
  accroche: string;
  duree: string; // "2 jours" | "Sur mesure"
  langue: string; // "FR / AR"
  effectif: string; // "12-20 pers." (vide pour le sur-mesure)
  modules: string[];
};

// Order of this array = display order on /formations.
export const formations: Formation[] = [
  {
    title:
      "Création d'entreprise : démarches administratives, juridiques et réglementaires",
    kind: "catalogue",
    accroche:
      "Clarifier les étapes de création en Algérie, sécuriser ses choix dès le départ et lancer son activité sur des bases solides.",
    duree: "2 jours",
    langue: "FR / AR",
    effectif: "12-20 pers.",
    modules: [
      "Cadre administratif, juridique et réglementaire",
      "Structures et dispositifs d'accompagnement",
      "Choix du statut juridique",
      "Formalités, dossiers et premiers coûts",
    ],
  },
  {
    title: "Structurer son projet entrepreneurial : de l'idée au plan d'action",
    kind: "catalogue",
    accroche:
      "Passer d'une idée à un projet structuré, réaliste et actionnable — avec des outils simples, réutilisables, et une approche lucide des ressources et des risques.",
    duree: "3 jours",
    langue: "FR",
    effectif: "10-18 pers.",
    modules: [
      "Proposition de valeur",
      "Analyse de marché",
      "Modèle économique",
      "Plan d'action et outils numériques",
    ],
  },
  {
    title: "Étude de marché : analyser les données pour orienter sa stratégie",
    kind: "catalogue",
    accroche:
      "Dépasser l'étude théorique pour se concentrer sur les données vraiment utiles aux décisions : tendances, acteurs, positionnement.",
    duree: "2 jours",
    langue: "FR / AR",
    effectif: "10-18 pers.",
    modules: [
      "Sources et collecte de données",
      "Analyse des tendances, clients, concurrence",
      "Outils d'analyse (matrices, synthèses visuelles)",
      "Exploitation et positionnement stratégique",
    ],
  },
  {
    title:
      "Faire évoluer son modèle économique : adapter son business model au marché",
    kind: "catalogue",
    accroche:
      "Prendre du recul sur la manière dont l'entreprise crée et capte de la valeur — et identifier des ajustements concrets pour gagner en viabilité.",
    duree: "2 jours",
    langue: "FR",
    effectif: "10-16 pers.",
    modules: [
      "Composantes clés du modèle économique",
      "Analyse de la performance actuelle",
      "Scénarios d'évolution",
      "Indicateurs de suivi des ajustements",
    ],
  },
  {
    title: "Piloter ses finances : comptabilité et trésorerie pour entrepreneurs",
    kind: "catalogue",
    accroche:
      "Donner aux dirigeants les repères nécessaires pour suivre leur activité financière, anticiper les décalages de caisse et dialoguer sereinement avec leur comptable.",
    duree: "2 jours",
    langue: "FR / AR",
    effectif: "10-18 pers.",
    modules: [
      "Obligations comptables et fiscales de base",
      "Organisation des pièces comptables",
      "Outil de suivi de trésorerie",
      "Indicateurs financiers essentiels",
    ],
  },
  {
    title: "Leadership, cohésion et performance collective",
    kind: "catalogue",
    accroche:
      "Clarifier sa posture managériale, renforcer la coopération et installer un climat de travail plus engageant — sans recettes toutes faites, ancré dans la réalité du terrain.",
    duree: "3 jours",
    langue: "FR",
    effectif: "10-18 pers.",
    modules: [
      "Analyse de sa posture managériale",
      "Accompagnement et développement d'équipe",
      "Animation de temps collectifs",
      "Intelligence collective et co-construction",
    ],
  },
  {
    title: "Qualité de vie au travail et prévention des risques psychosociaux",
    kind: "catalogue",
    accroche:
      "Aider les organisations à améliorer la QVT tout en intégrant sérieusement la prévention des RPS : pratiques managériales, organisation, responsabilité émotionnelle.",
    duree: "3 jours",
    langue: "FR / AR",
    effectif: "10-18 pers.",
    modules: [
      "Liens QVT / santé / fonctionnement organisationnel",
      "Facteurs de risques psychosociaux",
      "Signaux de tension et d'épuisement",
      "Démarche de prévention et circuits d'alerte",
    ],
  },
  {
    title: "Communiquer de manière professionnelle à l'écrit et à l'oral",
    kind: "catalogue",
    accroche:
      "Gagner en clarté, en impact et en sérénité dans les communications du quotidien — mails, comptes rendus, réunions, prises de parole.",
    duree: "2 jours",
    langue: "FR",
    effectif: "12–20 pers.",
    modules: [
      "Écrits professionnels (mails, notes, rapports, synthèses)",
      "Structure d'un message oral",
      "Sources de malentendus et ajustements",
      "Communication assertive",
    ],
  },
  {
    title: "Programme dédié",
    kind: "surMesure",
    accroche:
      "Si vos besoins ne correspondent à aucun catalogue, nous concevons un parcours sur mesure : diagnostic, ingénierie pédagogique, animation, évaluation à 6 mois.",
    duree: "Sur mesure",
    langue: "FR / AR",
    effectif: "",
    modules: [
      "Diagnostic des besoins",
      "Architecture pédagogique",
      "Animation & supports",
      "Évaluation post-formation",
    ],
  },
];
