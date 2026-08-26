import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "À propos",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "manifeste", title: "Manifeste" },
    { name: "fondatrices", title: "Fondatrices & réseau" },
    { name: "reperes", title: "Repères" },
  ],
  fields: [
    defineField({ name: "heroEyebrow", title: "Surtitre hero", type: "string", group: "hero" }),
    defineField({ name: "heroTitle", title: "Titre hero", type: "string", group: "hero" }),
    defineField({ name: "heroTitleEm", title: "Titre hero — italique", type: "string", group: "hero" }),
    defineField({ name: "heroLead", title: "Chapô hero", type: "text", rows: 3, group: "hero" }),

    defineField({ name: "manifesteEyebrow", title: "Surtitre manifeste", type: "string", group: "manifeste" }),
    defineField({ name: "manifesteTitle", title: "Titre manifeste", type: "string", group: "manifeste" }),
    defineField({ name: "manifesteTitleEm", title: "Titre manifeste — italique", type: "string", group: "manifeste" }),
    defineField({ name: "manifesteParagraphs", title: "Paragraphes", type: "array", of: [{ type: "text", rows: 4 }], group: "manifeste" }),
    defineField({ name: "manifestePull", title: "Citation en exergue", type: "text", rows: 3, group: "manifeste" }),

    defineField({ name: "foundersEyebrow", title: "Surtitre fondatrices", type: "string", group: "fondatrices" }),
    defineField({ name: "foundersTitle", title: "Titre fondatrices", type: "string", group: "fondatrices" }),
    defineField({ name: "foundersTitleEm", title: "Titre fondatrices — italique", type: "string", group: "fondatrices" }),
    defineField({
      name: "founders",
      title: "Fondatrices",
      type: "array",
      group: "fondatrices",
      of: [{
        type: "object",
        fields: [
          { name: "initials", title: "Initiales", type: "string" },
          { name: "role", title: "Rôle", type: "string" },
          { name: "name", title: "Nom", type: "string" },
          { name: "bio", title: "Biographie", type: "text", rows: 5 },
          { name: "portrait", title: "Portrait (optionnel)", type: "image", options: { hotspot: true } },
        ],
        preview: { select: { title: "name", subtitle: "role" } },
      }],
    }),
    defineField({ name: "reseauEyebrow", title: "Surtitre réseau", type: "string", group: "fondatrices" }),
    defineField({ name: "reseauTitle", title: "Titre réseau", type: "string", group: "fondatrices" }),
    defineField({ name: "reseauTitleEm", title: "Titre réseau — italique", type: "string", group: "fondatrices" }),
    defineField({ name: "reseauParagraphs", title: "Paragraphes réseau", type: "array", of: [{ type: "text", rows: 3 }], group: "fondatrices" }),

    defineField({ name: "reperesEyebrow", title: "Surtitre repères", type: "string", group: "reperes" }),
    defineField({ name: "reperesTitle", title: "Titre repères", type: "string", group: "reperes" }),
    defineField({ name: "reperesTitleEm", title: "Titre repères — italique", type: "string", group: "reperes" }),
    defineField({ name: "reperesLead", title: "Texte repères", type: "text", rows: 3, group: "reperes" }),
    defineField({
      name: "stats",
      title: "Chiffres",
      type: "array",
      group: "reperes",
      of: [{
        type: "object",
        fields: [
          { name: "value", title: "Valeur", type: "string" },
          { name: "label", title: "Libellé", type: "string" },
        ],
        preview: { select: { title: "value", subtitle: "label" } },
      }],
    }),
    defineField({ name: "ctaEyebrow", title: "Surtitre CTA", type: "string", group: "reperes" }),
    defineField({ name: "ctaTitle", title: "Titre CTA", type: "string", group: "reperes" }),
    defineField({ name: "ctaTitleEm", title: "Titre CTA — italique", type: "string", group: "reperes" }),
  ],
  preview: { prepare: () => ({ title: "À propos" }) },
});
