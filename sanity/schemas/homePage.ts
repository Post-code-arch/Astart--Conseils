import { defineType, defineField } from "sanity";

// Page d'accueil — texte + images. Singleton.
export const homePage = defineType({
  name: "homePage",
  title: "Accueil",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "approche", title: "Approche" },
    { name: "chiffres", title: "Chiffres & partenaires" },
    { name: "why", title: "Pourquoi Astarté" },
    { name: "cta", title: "Contact" },
  ],
  fields: [
    defineField({ name: "heroEyebrow", title: "Surtitre hero", type: "string", group: "hero" }),
    defineField({ name: "heroTitle", title: "Titre hero", type: "string", group: "hero" }),
    defineField({ name: "heroTitleEm", title: "Titre hero — partie en italique", type: "string", group: "hero" }),
    defineField({ name: "heroLead", title: "Chapô hero", type: "text", rows: 3, group: "hero" }),
    defineField({ name: "heroImage", title: "Image de fond du hero", type: "image", options: { hotspot: true }, group: "hero" }),
    defineField({ name: "marqueeWords", title: "Bandeau défilant (mots)", type: "array", of: [{ type: "string" }], group: "hero" }),

    defineField({ name: "approcheEyebrow", title: "Surtitre approche", type: "string", group: "approche" }),
    defineField({ name: "approcheTitle", title: "Titre approche", type: "string", group: "approche" }),
    defineField({ name: "approcheTitleEm", title: "Titre approche — italique", type: "string", group: "approche" }),
    defineField({ name: "approcheLead", title: "Texte approche", type: "text", rows: 3, group: "approche" }),

    defineField({
      name: "stats",
      title: "Chiffres-clés",
      type: "array",
      group: "chiffres",
      of: [{
        type: "object",
        fields: [
          { name: "value", title: "Valeur", type: "string" },
          { name: "label", title: "Libellé", type: "string" },
        ],
        preview: { select: { title: "value", subtitle: "label" } },
      }],
    }),
    defineField({ name: "partnersEyebrow", title: "Surtitre partenaires", type: "string", group: "chiffres" }),

    defineField({ name: "whyTitle", title: "Titre « Pourquoi Astarté »", type: "string", group: "why" }),
    defineField({ name: "whyTitleEm", title: "Titre — italique", type: "string", group: "why" }),
    defineField({
      name: "whyItems",
      title: "Arguments (i, ii, iii)",
      type: "array",
      group: "why",
      of: [{
        type: "object",
        fields: [
          { name: "marker", title: "Numéro (i, ii…)", type: "string" },
          { name: "title", title: "Titre", type: "string" },
          { name: "body", title: "Texte", type: "text", rows: 3 },
        ],
        preview: { select: { title: "title", subtitle: "marker" } },
      }],
    }),

    defineField({ name: "ctaEyebrow", title: "Surtitre CTA", type: "string", group: "cta" }),
    defineField({ name: "ctaTitle", title: "Titre CTA", type: "string", group: "cta" }),
    defineField({ name: "ctaTitleEm", title: "Titre CTA — italique", type: "string", group: "cta" }),
    defineField({ name: "ctaLead", title: "Texte CTA", type: "text", rows: 3, group: "cta" }),
    defineField({ name: "ctaPhone", title: "Téléphone CTA", type: "string", group: "cta" }),
  ],
  preview: { prepare: () => ({ title: "Accueil" }) },
});
