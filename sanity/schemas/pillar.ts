import { defineType, defineField } from "sanity";

// Pilier (Analyser / Accompagner / Développer) — source unique consommée par
// l'Accueil (bulle), la page mère (colonne) et /expertises/[slug].
export const pillar = defineType({
  name: "pillar",
  title: "Pilier d'expertise",
  type: "document",
  groups: [
    { name: "id", title: "Identité" },
    { name: "home", title: "Accueil & colonne" },
    { name: "hero", title: "Hero pilier" },
    { name: "approche", title: "Approche" },
    { name: "prestations", title: "Prestations" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required(), group: "id" }),
    defineField({ name: "index", title: "Numéro (01, 02, 03)", type: "string", group: "id" }),
    defineField({ name: "name", title: "Nom", type: "string", validation: (r) => r.required(), group: "id" }),
    defineField({ name: "order", title: "Ordre", type: "number", initialValue: 0, group: "id" }),

    // Accueil (MethodSection) + colonne page mère
    defineField({ name: "homeEyebrow", title: "Surtitre bulle (Accueil)", type: "string", group: "home" }),
    defineField({ name: "homeTitle", title: "Titre bulle (Accueil)", type: "string", group: "home" }),
    defineField({ name: "homeTitleEm", title: "Titre bulle — italique", type: "string", group: "home" }),
    defineField({ name: "homeBody", title: "Texte bulle (Accueil)", type: "text", rows: 3, group: "home" }),
    defineField({ name: "homeList", title: "Liste bulle (Accueil)", type: "array", of: [{ type: "string" }], group: "home" }),
    defineField({ name: "accroche", title: "Accroche colonne (page Expertises)", type: "text", rows: 2, group: "home" }),

    // Hero de la page pilier
    defineField({ name: "heroEyebrow", title: "Surtitre hero", type: "string", group: "hero" }),
    defineField({ name: "heroTitle", title: "Titre hero", type: "string", group: "hero" }),
    defineField({ name: "heroTitleEm", title: "Titre hero — italique", type: "string", group: "hero" }),
    defineField({ name: "heroLead", title: "Chapô hero", type: "text", rows: 4, group: "hero" }),
    defineField({ name: "heroImage", title: "Image hero", type: "image", options: { hotspot: true }, group: "hero" }),
    defineField({ name: "heroCtaLabel", title: "Libellé bouton hero", type: "string", group: "hero" }),

    // Approche
    defineField({ name: "approcheTitle", title: "Titre approche", type: "string", group: "approche" }),
    defineField({ name: "approcheTitleEm", title: "Titre approche — italique", type: "string", group: "approche" }),
    defineField({ name: "approcheLead", title: "Texte approche", type: "text", rows: 3, group: "approche" }),
    defineField({
      name: "steps",
      title: "Étapes (01, 02…)",
      type: "array",
      group: "approche",
      of: [{
        type: "object",
        fields: [
          { name: "num", title: "Numéro", type: "string" },
          { name: "title", title: "Titre", type: "string" },
          { name: "body", title: "Texte", type: "text", rows: 3 },
        ],
        preview: { select: { title: "title", subtitle: "num" } },
      }],
    }),

    // Prestations
    defineField({ name: "prestationsTitle", title: "Titre prestations", type: "string", group: "prestations" }),
    defineField({ name: "prestationsTitleEm", title: "Titre prestations — italique", type: "string", group: "prestations" }),
    defineField({ name: "prestationsLead", title: "Texte prestations", type: "text", rows: 3, group: "prestations" }),
    defineField({
      name: "prestations",
      title: "Prestations",
      type: "array",
      group: "prestations",
      of: [{
        type: "object",
        fields: [
          { name: "duree", title: "Durée", type: "string" },
          { name: "langue", title: "Langue", type: "string" },
          { name: "effectif", title: "Effectif", type: "string" },
          { name: "title", title: "Titre", type: "string" },
          { name: "body", title: "Texte", type: "text", rows: 3 },
          { name: "modules", title: "Modules", type: "array", of: [{ type: "string" }] },
        ],
        preview: { select: { title: "title", subtitle: "duree" } },
      }],
    }),

    // CTA
    defineField({ name: "ctaEyebrow", title: "Surtitre CTA", type: "string", group: "cta" }),
    defineField({ name: "ctaTitle", title: "Titre CTA", type: "string", group: "cta" }),
    defineField({ name: "ctaTitleEm", title: "Titre CTA — italique", type: "string", group: "cta" }),
    defineField({ name: "ctaLead", title: "Texte CTA", type: "text", rows: 3, group: "cta" }),
  ],
  orderings: [{ title: "Ordre", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "index" } },
});
