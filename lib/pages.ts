// Contenu éditorial des pages (singletons). Fallback + source de seed.
// Phase 2 (incrément 1) : hero de l'Accueil. Les autres sections/pages
// s'ajoutent progressivement, toujours en fallback-safe.

export type HomePage = {
  heroEyebrow: string;
  heroTitle: string;
  heroTitleEm: string;
  heroLead: string;
  heroImageUrl?: string; // optionnel — sinon l'image CSS par défaut reste
};

export const homePage: HomePage = {
  heroEyebrow: "Bureau d'études & de Conseils — Algérie · Afrique du Nord · Sahel",
  heroTitle: "Vos décisions méritent des analyses",
  heroTitleEm: "que vous pouvez porter et défendre.",
  heroLead:
    "Les organisations et entreprises qui opèrent en Afrique du Nord et au Sahel font face à des terrains complexes. Nous produisons les études, évaluations et formations qui leur permettent d'agir en pleine maîtrise de leurs enjeux.",
};
