// Mapping central de l'admin cliente. L'UI /admin est générée à partir de ces
// tableaux — pour ajouter un champ éditable, il suffit d'ajouter une entrée ici
// (voir app/admin/README.md).

export type AdminFieldType = "text" | "textarea" | "richtext" | "image" | "list";

// Champ d'un document singleton (chemin fixe).
export type AdminField = {
  id: string;
  docId: string; // _id du document Sanity ciblé
  docType?: string; // _type Sanity (défaut = docId, pour les singletons)
  path: string; // chemin pointé (objets imbriqués)
  label: string; // label FR affiché à la cliente
  group: string; // slug de groupe (voir adminGroups)
  type: AdminFieldType;
  required?: boolean;
  help?: string;
};

// Champ d'un item de collection.
export type AdminItemFieldType = "text" | "textarea" | "select" | "list";
export type AdminItemField = {
  path: string;
  label: string;
  type: AdminItemFieldType;
  options?: { value: string; label: string }[];
  required?: boolean;
};

// Collection éditable (ajout / suppression / édition d'items).
export type AdminCollection = {
  id: string;
  docType: string; // _type Sanity
  label: string;
  group: string;
  titleField: string; // champ servant de titre dans la liste
  fields: AdminItemField[];
};

// Navigation de l'admin — par page/section métier, pas par type technique.
export const adminGroups: { slug: string; label: string; description: string }[] = [
  { slug: "accueil", label: "Accueil — Hero", description: "Titre, sous-titre et image d'accroche de la page d'accueil." },
  { slug: "expertise-analyser", label: "Expertise — Analyser", description: "Bulle Accueil + hero de la page Analyser." },
  { slug: "expertise-accompagner", label: "Expertise — Accompagner", description: "Bulle Accueil + hero de la page Accompagner." },
  { slug: "expertise-developper", label: "Expertise — Développer", description: "Bulle Accueil + hero de la page Développer." },
  { slug: "references", label: "Références — Missions", description: "Les missions réalisées (page Références)." },
  { slug: "formations", label: "Formations", description: "Le catalogue de formations." },
  { slug: "ressources", label: "Publications", description: "Articles & contributions (page Ressources)." },
  { slug: "partenaires", label: "Partenaires", description: "Logos/noms des partenaires (Accueil)." },
  { slug: "contact", label: "Contact & pied de page", description: "Coordonnées, adresse, emails, téléphone." },
];

// Génère les champs d'un pilier (docId stable = pillar-<slug>, _type = pillar).
function pillarFields(slug: string, group: string): AdminField[] {
  const doc = `pillar-${slug}`;
  const f = (path: string, label: string, type: AdminFieldType = "text"): AdminField => ({
    id: `${doc}-${path}`, docId: doc, docType: "pillar", path, label, group, type,
  });
  return [
    f("homeTitle", "Bulle Accueil — titre"),
    f("homeTitleEm", "Bulle Accueil — titre (italique)"),
    f("homeBody", "Bulle Accueil — texte", "textarea"),
    f("homeList", "Bulle Accueil — liste (une par ligne)", "list"),
    f("accroche", "Colonne (page Expertises) — accroche", "textarea"),
    f("heroEyebrow", "Hero — surtitre"),
    f("heroTitle", "Hero — titre"),
    f("heroTitleEm", "Hero — titre (italique)"),
    f("heroLead", "Hero — chapô", "textarea"),
    f("heroCtaLabel", "Hero — libellé du bouton"),
    f("heroImage", "Hero — image", "image"),
  ];
}

// --- Champs singletons ---
export const adminFields: AdminField[] = [
  // Accueil — hero
  { id: "home-heroEyebrow", docId: "homePage", path: "heroEyebrow", label: "Surtitre", group: "accueil", type: "text" },
  { id: "home-heroTitle", docId: "homePage", path: "heroTitle", label: "Titre", group: "accueil", type: "text", required: true },
  { id: "home-heroTitleEm", docId: "homePage", path: "heroTitleEm", label: "Titre (partie en italique)", group: "accueil", type: "text" },
  { id: "home-heroLead", docId: "homePage", path: "heroLead", label: "Chapô", group: "accueil", type: "textarea" },
  { id: "home-heroImage", docId: "homePage", path: "heroImage", label: "Image de fond du hero", group: "accueil", type: "image" },
  // Piliers (bulles Accueil + hero)
  ...pillarFields("analyser", "expertise-analyser"),
  ...pillarFields("accompagner", "expertise-accompagner"),
  ...pillarFields("developper", "expertise-developper"),
  // Contact / pied de page
  { id: "settings-tagline", docId: "siteSettings", path: "tagline", label: "Accroche (pied de page)", group: "contact", type: "text", required: true },
  { id: "settings-founded", docId: "siteSettings", path: "foundedLine", label: "Ligne de fondation", group: "contact", type: "text" },
  { id: "settings-emails", docId: "siteSettings", path: "emails", label: "Emails (un par ligne)", group: "contact", type: "list" },
  { id: "settings-phone", docId: "siteSettings", path: "phone", label: "Téléphone", group: "contact", type: "text" },
  { id: "settings-address", docId: "siteSettings", path: "address", label: "Adresse", group: "contact", type: "textarea" },
  { id: "settings-contactEmail", docId: "siteSettings", path: "contactEmail", label: "Email de contact (bouton CTA)", group: "contact", type: "text" },
];

const PILLAR_OPTS = [
  { value: "analyser", label: "Analyser" },
  { value: "accompagner", label: "Accompagner" },
  { value: "developper", label: "Développer" },
];

// --- Collections ---
export const adminCollections: AdminCollection[] = [
  {
    id: "references",
    docType: "reference",
    label: "Missions",
    group: "references",
    titleField: "title",
    fields: [
      { path: "title", label: "Titre de la mission", type: "text", required: true },
      { path: "client", label: "Client / financeur (· année)", type: "text" },
      { path: "pillar", label: "Pilier", type: "select", options: PILLAR_OPTS, required: true },
      { path: "group", label: "Groupe (facultatif — page Analyser)", type: "text" },
      { path: "result", label: "Résultat / description", type: "textarea" },
    ],
  },
  {
    id: "formations",
    docType: "formation",
    label: "Formations",
    group: "formations",
    titleField: "title",
    fields: [
      { path: "title", label: "Titre", type: "text", required: true },
      { path: "kind", label: "Type", type: "select", options: [
        { value: "catalogue", label: "Catalogue" },
        { value: "surMesure", label: "Sur mesure (programme dédié)" },
      ], required: true },
      { path: "accroche", label: "Accroche", type: "textarea" },
      { path: "duree", label: "Durée", type: "text" },
      { path: "langue", label: "Langue", type: "text" },
      { path: "effectif", label: "Effectif", type: "text" },
      { path: "modules", label: "Modules (un par ligne)", type: "list" },
    ],
  },
  {
    id: "publications",
    docType: "publication",
    label: "Publications",
    group: "ressources",
    titleField: "title",
    fields: [
      { path: "title", label: "Titre", type: "text", required: true },
      { path: "year", label: "Année", type: "text" },
      { path: "tag", label: "Catégorie", type: "text" },
      { path: "body", label: "Résumé", type: "textarea" },
      { path: "href", label: "Lien (facultatif)", type: "text" },
    ],
  },
  {
    id: "partenaires",
    docType: "partner",
    label: "Partenaires",
    group: "partenaires",
    titleField: "name",
    fields: [
      { path: "name", label: "Nom", type: "text", required: true },
      { path: "category", label: "Catégorie", type: "text" },
    ],
  },
];

export function fieldsForGroup(group: string): AdminField[] {
  return adminFields.filter((f) => f.group === group);
}
export function collectionsForGroup(group: string): AdminCollection[] {
  return adminCollections.filter((c) => c.group === group);
}
