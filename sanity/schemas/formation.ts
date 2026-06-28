import { defineType, defineField } from "sanity";

export const formation = defineType({
  name: "formation",
  title: "Formation",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "kind",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Catalogue", value: "catalogue" },
          { title: "Sur mesure (programme dédié)", value: "surMesure" },
        ],
        layout: "radio",
      },
      initialValue: "catalogue",
      validation: (r) => r.required(),
    }),
    defineField({ name: "accroche", title: "Accroche", type: "text", rows: 3 }),
    defineField({ name: "duree", title: "Durée", type: "string", description: 'ex. "2 jours" ou "Sur mesure"' }),
    defineField({ name: "langue", title: "Langue", type: "string", description: 'ex. "FR / AR"' }),
    defineField({ name: "effectif", title: "Effectif", type: "string", description: 'ex. "12-20 pers." (vide pour le sur-mesure)' }),
    defineField({ name: "modules", title: "Modules", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Ordre", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "duree" } },
});
