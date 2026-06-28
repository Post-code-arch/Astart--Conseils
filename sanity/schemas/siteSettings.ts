import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nom interne", type: "string", initialValue: "Astarté Conseils", hidden: true }),
    defineField({ name: "tagline", title: "Accroche (pied de page)", type: "string" }),
    defineField({ name: "foundedLine", title: "Ligne de fondation", type: "string", description: 'ex. "Fondé en 2021 à Alger"' }),
    defineField({
      name: "emails",
      title: "Emails",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "phone", title: "Téléphone", type: "string" }),
    defineField({ name: "address", title: "Adresse", type: "text", rows: 2 }),
    defineField({ name: "contactEmail", title: "Email de contact principal (CTA)", type: "string" }),
  ],
  preview: { prepare: () => ({ title: "Paramètres du site" }) },
});
