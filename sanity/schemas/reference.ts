import { defineType, defineField } from "sanity";

const PILLARS = [
  { title: "Analyser", value: "analyser" },
  { title: "Accompagner", value: "accompagner" },
  { title: "Développer", value: "developper" },
];

export const reference = defineType({
  name: "reference",
  title: "Référence / mission",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre de la mission", type: "string", validation: (r) => r.required() }),
    defineField({ name: "client", title: "Client / financeur (· année)", type: "string", description: 'ex. "GIZ · Algérie" ou "GIZ Algérie · Ministère de l\'Industrie · 2024-2025"' }),
    defineField({
      name: "pillar",
      title: "Pilier",
      type: "string",
      options: { list: PILLARS, layout: "radio" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "group",
      title: "Groupe (page Analyser)",
      type: "string",
      description: 'Optionnel — ex. "Études & diagnostics", "Évaluations"… Pour la liste catégorisée du pilier Analyser.',
    }),
    defineField({ name: "result", title: "Résultat / description", type: "text", rows: 3 }),
    defineField({
      name: "featured",
      title: "Mise en avant sur la page du pilier",
      type: "boolean",
      initialValue: false,
      description: "Coché = apparaît dans la grille « Quelques missions » de la page du pilier.",
    }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Ordre", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "client", pillar: "pillar" },
    prepare: ({ title, subtitle, pillar }) => ({ title, subtitle: `[${pillar}] ${subtitle ?? ""}` }),
  },
});
