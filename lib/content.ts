// Accès au contenu : interroge Sanity si configuré, sinon renvoie le contenu
// en dur de lib/*. Les pages n'appellent que ces getters.
import { client } from "@/sanity/client";
import { siteSettings as siteFallback, type SiteSettings } from "./site";
import { partners as partnersFallback, type Partner } from "./partners";
import { publications as pubsFallback, type Publication } from "./publications";
import { references as refsFallback, type Reference } from "./references";
import { formations as formationsFallback, type Formation } from "./formations";
import { homePage as homeFallback, type HomePage } from "./pages";
import { pillars as pillarsFallback, type Pillar } from "./pillars";

// Mise en cache ISR : le contenu publié est revalidé périodiquement.
const fetchOpts = { next: { revalidate: 60, tags: ["content"] } };

async function safeFetch<T>(query: string, fallback: T): Promise<T> {
  if (!client) return fallback;
  try {
    const res = await client.fetch<T>(query, {}, fetchOpts);
    if (res == null || (Array.isArray(res) && res.length === 0)) return fallback;
    return res;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return safeFetch<SiteSettings>(
    `*[_type=="siteSettings"][0]{
      tagline, foundedLine, emails, phone, address, contactEmail
    }`,
    siteFallback,
  );
}

export async function getPartners(): Promise<Partner[]> {
  return safeFetch<Partner[]>(
    `*[_type=="partner"]|order(order asc){ name, category, order }`,
    partnersFallback,
  );
}

export async function getPublications(): Promise<Publication[]> {
  return safeFetch<Publication[]>(
    `*[_type=="publication"]|order(order asc){ year, tag, title, body, href, order }`,
    pubsFallback,
  );
}

export async function getReferences(): Promise<Reference[]> {
  return safeFetch<Reference[]>(
    `*[_type=="reference"]|order(order asc){ pillar, group, client, title, "result": result, order }`,
    refsFallback,
  );
}

export async function getFormations(): Promise<Formation[]> {
  return safeFetch<Formation[]>(
    `*[_type=="formation"]|order(order asc){ title, kind, accroche, duree, langue, effectif, modules }`,
    formationsFallback,
  );
}

export async function getHomePage(): Promise<HomePage> {
  return safeFetch<HomePage>(
    `*[_type=="homePage"][0]{ heroEyebrow, heroTitle, heroTitleEm, heroLead, "heroImageUrl": heroImage.asset->url }`,
    homeFallback,
  );
}

export async function getPillars(): Promise<Pillar[]> {
  return safeFetch<Pillar[]>(
    `*[_type=="pillar"]|order(order asc){
      "slug": slug.current, index, name,
      homeEyebrow, homeTitle, homeTitleEm, homeBody, homeList, accroche,
      heroEyebrow, heroTitle, heroTitleEm, heroLead, heroCtaLabel,
      "heroImageUrl": heroImage.asset->url
    }`,
    pillarsFallback,
  );
}

export async function getPillar(slug: string): Promise<Pillar | undefined> {
  const all = await getPillars();
  return all.find((p) => p.slug === slug);
}
