import { defineType, defineField } from "sanity";

export const partner = defineType({
  name: "partner",
  title: "Partenaire",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nom", type: "string", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Catégorie", type: "string", description: 'ex. "Coopération régionale"' }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Ordre", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "category" } },
});
