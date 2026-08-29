// Central Sanity environment access.
// The whole app reads `hasSanity` to decide between live CMS data and the
// hard-coded fallback in lib/*. Until the project + env vars exist, hasSanity
// is false and the site renders exactly as before.

// projectId is public (not a secret). Default = the Astarté Sanity project so the
// site connects without an env var; override via NEXT_PUBLIC_SANITY_PROJECT_ID.
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "ou1dv8kd";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01";

/** True only when a Sanity project is actually configured. */
export const hasSanity = projectId.length > 0;
