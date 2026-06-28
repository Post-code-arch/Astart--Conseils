import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, hasSanity, projectId } from "./env";

// Only instantiate a client when a project is configured; otherwise null and
// the content getters fall back to lib/*.
export const client: SanityClient | null = hasSanity
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // published, cacheable reads
      perspective: "published",
    })
  : null;
