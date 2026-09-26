// Publications (page Ressources). Fallback + source de seed pour `publication`.
export type Publication = {
  year: string;
  tag: string;
  title: string;
  body: string;
  href?: string;
  order?: number;
};

// Vide tant que le client n'a pas fourni de vraies publications (voir /admin
// pour en ajouter une fois disponibles).
export const publications: Publication[] = [];
