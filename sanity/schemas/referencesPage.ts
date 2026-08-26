import { defineType, defineField } from "sanity";

export const referencesPage = defineType({
  name: "referencesPage",
  title: "Références (page)",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Surtitre hero", type: "string" }),
    defineField({ name: "heroTitle", title: "Titre hero", type: "string" }),
    defineField({ name: "heroTitleEm", title: "Titre hero — italique", type: "string" }),
    defineField({ name: "heroLead", title: "Chapô hero", type: "text", rows: 3 }),
    defineField({ name: "filterEyebrow", title: "Surtitre section filtres", type: "string" }),
    defineField({ name: "filterTitle", title: "Titre section filtres", type: "string" }),
    defineField({ name: "filterTitleEm", title: "Titre filtres — italique", type: "string" }),
    defineField({ name: "filterLead", title: "Texte filtres", type: "text", rows: 2 }),
    defineField({ name: "partnersEyebrow", title: "Surtitre partenaires", type: "string" }),
    defineField({ name: "partnersTitle", title: "Titre partenaires", type: "string" }),
    defineField({ name: "partnersTitleEm", title: "Titre partenaires — italique", type: "string" }),
    defineField({ name: "partnersLead", title: "Texte partenaires", type: "text", rows: 2 }),
    defineField({ name: "ctaEyebrow", title: "Surtitre CTA", type: "string" }),
    defineField({ name: "ctaTitle", title: "Titre CTA", type: "string" }),
    defineField({ name: "ctaTitleEm", title: "Titre CTA — italique", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Références (page)" }) },
});
