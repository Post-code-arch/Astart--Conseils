import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { partner } from "./partner";
import { reference } from "./reference";
import { formation } from "./formation";
import { publication } from "./publication";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  partner,
  reference,
  formation,
  publication,
];
