import { defineType, defineField } from "sanity";

export const publication = defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "string", validation: (r) => r.required() }),
    defineField({ name: "year", title: "Année", type: "string" }),
    defineField({ name: "tag", title: "Catégorie", type: "string", description: 'ex. "Essai", "Note", "Méthode", "Tribune"' }),
    defineField({ name: "body", title: "Résumé", type: "text", rows: 3 }),
    defineField({ name: "href", title: "Lien (optionnel)", type: "url" }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Ordre", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "year" } },
});
