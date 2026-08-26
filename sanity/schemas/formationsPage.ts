import { defineType, defineField } from "sanity";

export const formationsPage = defineType({
  name: "formationsPage",
  title: "Formations (page)",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Surtitre hero", type: "string" }),
    defineField({ name: "heroTitle", title: "Titre hero", type: "string" }),
    defineField({ name: "heroTitleEm", title: "Titre hero — italique", type: "string" }),
    defineField({ name: "heroLead", title: "Chapô hero", type: "text", rows: 3 }),
    defineField({ name: "heroCtaLabel", title: "Libellé bouton hero", type: "string" }),
    defineField({ name: "catalogueEyebrow", title: "Surtitre catalogue", type: "string" }),
    defineField({ name: "catalogueTitle", title: "Titre catalogue", type: "string" }),
    defineField({ name: "catalogueTitleEm", title: "Titre catalogue — italique", type: "string" }),
    defineField({ name: "catalogueLead", title: "Texte catalogue", type: "text", rows: 2 }),
    defineField({ name: "methodeEyebrow", title: "Surtitre méthode", type: "string" }),
    defineField({ name: "methodeTitle", title: "Titre méthode", type: "string" }),
    defineField({ name: "methodeTitleEm", title: "Titre méthode — italique", type: "string" }),
    defineField({ name: "methodeLead", title: "Texte méthode", type: "text", rows: 2 }),
    defineField({
      name: "methodeSteps",
      title: "Méthode — étapes",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "num", title: "Numéro", type: "string" },
          { name: "title", title: "Titre", type: "string" },
          { name: "body", title: "Texte", type: "text", rows: 2 },
        ],
        preview: { select: { title: "title", subtitle: "num" } },
      }],
    }),
    defineField({ name: "ctaEyebrow", title: "Surtitre CTA", type: "string" }),
    defineField({ name: "ctaTitle", title: "Titre CTA", type: "string" }),
    defineField({ name: "ctaTitleEm", title: "Titre CTA — italique", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Formations (page)" }) },
});
