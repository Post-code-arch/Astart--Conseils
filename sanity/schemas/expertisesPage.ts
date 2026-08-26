import { defineType, defineField } from "sanity";

export const expertisesPage = defineType({
  name: "expertisesPage",
  title: "Expertises (page mère)",
  type: "document",
  fields: [
    defineField({ name: "introTitle", title: "Titre d'intro", type: "string" }),
    defineField({ name: "introText", title: "Chapô", type: "text", rows: 3 }),
    defineField({ name: "doctrineTitle", title: "Titre bande doctrine", type: "string" }),
    defineField({ name: "doctrineTitleEm", title: "Titre doctrine — italique", type: "string" }),
    defineField({ name: "ctaEyebrow", title: "Surtitre CTA", type: "string" }),
    defineField({ name: "ctaTitle", title: "Titre CTA", type: "string" }),
    defineField({ name: "ctaTitleEm", title: "Titre CTA — italique", type: "string" }),
    defineField({ name: "ctaLead", title: "Texte CTA", type: "text", rows: 3 }),
  ],
  preview: { prepare: () => ({ title: "Expertises (page mère)" }) },
});
