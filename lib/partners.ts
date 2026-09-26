// Partenaires (bandeau Accueil). Fallback + source de seed pour `partner`.
export type Partner = {
  name: string;
  category?: string;
  order?: number;
};

export const partners: Partner[] = [
  { name: "Délégation de l'Union Européenne en Algérie", category: "Coopération régionale", order: 1 },
  { name: "GIZ", category: "Coopération allemande", order: 2 },
  { name: "SCAC", category: "Ambassade de France", order: 3 },
  { name: "FES", category: "Friedrich-Ebert-Stiftung", order: 4 },
  { name: "Ministère de l'Industrie", category: "État algérien", order: 5 },
  { name: "SECDEV Foundation", category: "Recherche & numérique", order: 6 },
  { name: "Croix Rouge Espagnole", category: "Humanitaire", order: 7 },
  { name: "CERAI", category: "Coopération espagnole", order: 8 },
];
