// Coordonnées globales (pied de page / contact). Fallback + source de seed
// pour le singleton Sanity `siteSettings`.
export type SiteSettings = {
  tagline: string;
  foundedLine: string;
  emails: string[];
  phone: string;
  address: string;
  contactEmail: string;
};

export const siteSettings: SiteSettings = {
  tagline: "Bureau d'études & de Conseils — Algérie · Afrique du Nord · Sahel",
  foundedLine: "Fondé en 2021 à Alger",
  emails: [
    "contact@astarte-conseils.com",
    "kessai@astarte-conseils.org",
    "hamadouche@astarte-conseils.org",
  ],
  phone: "+213 553 47 45 97",
  address: "25, Rue Rabah Bourbia, El Biar (près du balcon Saint Raphaël), Alger, Algérie",
  contactEmail: "contact@astarte-conseils.com",
};
