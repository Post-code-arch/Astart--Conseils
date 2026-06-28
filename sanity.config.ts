"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { apiVersion, dataset, projectId } from "./sanity/env";

const SINGLETONS = ["siteSettings"];

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
            S.listItem()
              .title("Paramètres du site")
              .id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            S.documentTypeListItem("reference").title("Références / missions"),
            S.documentTypeListItem("formation").title("Formations"),
            S.documentTypeListItem("publication").title("Publications"),
            S.documentTypeListItem("partner").title("Partenaires"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  // Empêche la création de plusieurs documents "siteSettings".
  document: {
    actions: (input, context) =>
      SINGLETONS.includes(context.schemaType)
        ? input.filter(({ action }) => action !== "unpublish" && action !== "delete" && action !== "duplicate")
        : input,
  },
});
