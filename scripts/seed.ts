/**
 * Seed Sanity avec le contenu actuel (lib/*).
 *
 * Pré-requis : un projet Sanity + un token d'écriture (rôle Editor).
 * Lancer :
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx \
 *   NEXT_PUBLIC_SANITY_DATASET=production \
 *   SANITY_WRITE_TOKEN=sk... \
 *   npx tsx scripts/seed.ts
 *
 * Idempotent : ré-exécutable (createOrReplace sur des _id déterministes).
 */
import { createClient } from "@sanity/client";
import { siteSettings } from "../lib/site";
import { partners } from "../lib/partners";
import { publications } from "../lib/publications";
import { references } from "../lib/references";
import { formations } from "../lib/formations";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Manque NEXT_PUBLIC_SANITY_PROJECT_ID et/ou SANITY_WRITE_TOKEN dans l'environnement.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

function slug(i: number) {
  return String(i + 1).padStart(2, "0");
}

async function run() {
  const tx = client.transaction();

  tx.createOrReplace({ _id: "siteSettings", _type: "siteSettings", ...siteSettings });

  partners.forEach((p, i) =>
    tx.createOrReplace({ _id: `partner-${slug(i)}`, _type: "partner", order: i + 1, ...p }),
  );
  references.forEach((r, i) =>
    tx.createOrReplace({ _id: `reference-${slug(i)}`, _type: "reference", order: i + 1, featured: false, ...r }),
  );
  formations.forEach((f, i) =>
    tx.createOrReplace({ _id: `formation-${slug(i)}`, _type: "formation", order: i + 1, ...f }),
  );
  publications.forEach((p, i) =>
    tx.createOrReplace({ _id: `publication-${slug(i)}`, _type: "publication", order: i + 1, ...p }),
  );

  await tx.commit();
  console.log(
    `Seed terminé : 1 siteSettings, ${partners.length} partenaires, ${references.length} références, ${formations.length} formations, ${publications.length} publications.`,
  );
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
