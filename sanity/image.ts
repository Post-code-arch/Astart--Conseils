import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, hasSanity, projectId } from "./env";

const builder = hasSanity ? imageUrlBuilder({ projectId, dataset }) : null;

/** Build a URL for a Sanity image, or return "" when not configured. */
export function urlFor(source: Image | undefined | null): string {
  if (!builder || !source) return "";
  try {
    return builder.image(source).auto("format").fit("max").url();
  } catch {
    return "";
  }
}
