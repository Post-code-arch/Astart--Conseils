"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { apiVersion, dataset, projectId } from "./sanity/env";

const SINGLETONS = [
  "homePage",
  "expertisesPage",
  "aboutPage",
  "referencesPage",
  "formationsPage",
  "ressourcesPage",
  "siteSettings",
];

const singleton = (S: any, id: string, title: string) =>
  S.listItem().title(title).id(id).child(S.document().schemaType(id).documentId(id));

export default defineConfig({
  name: "astarte",
  title: "Astarté Conseils",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            S.listItem().title("Pages").child(
              S.list().title("Pages").items([
                singleton(S, "homePage", "Accueil"),
                singleton(S, "expertisesPage", "Expertises (page mère)"),
                singleton(S, "aboutPage", "À propos"),
                singleton(S, "referencesPage", "Références (page)"),
                singleton(S, "formationsPage", "Formations (page)"),
                singleton(S, "ressourcesPage", "Ressources (page)"),
              ]),
            ),
            S.divider(),
            S.documentTypeListItem("pillar").title("Piliers d'expertise"),
            S.documentTypeListItem("reference").title("Références / missions"),
            S.documentTypeListItem("formation").title("Formations"),
            S.documentTypeListItem("publication").title("Publications"),
            S.documentTypeListItem("partner").title("Partenaires"),
            S.divider(),
            singleton(S, "siteSettings", "Paramètres du site"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    actions: (input, context) =>
      SINGLETONS.includes(context.schemaType)
        ? input.filter(({ action }) => action !== "unpublish" && action !== "delete" && action !== "duplicate")
        : input,
  },
});
