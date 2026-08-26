import "server-only";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

// Client Sanity EN ÉCRITURE — serveur uniquement. Le token n'est jamais préfixé
// NEXT_PUBLIC_ et n'atteint donc jamais le bundle client. Utilisé exclusivement
// dans des Server Actions / Route Handlers.
const token = process.env.SANITY_WRITE_TOKEN;

export function getWriteClient() {
  if (!projectId) throw new Error("Sanity non configuré (NEXT_PUBLIC_SANITY_PROJECT_ID manquant).");
  if (!token) throw new Error("SANITY_WRITE_TOKEN manquant côté serveur.");
  return createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
    perspective: "published",
  });
}

export const hasWriteAccess = Boolean(projectId && token);
