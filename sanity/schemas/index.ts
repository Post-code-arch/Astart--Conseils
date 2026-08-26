import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./siteSettings";
import { partner } from "./partner";
import { reference } from "./reference";
import { formation } from "./formation";
import { publication } from "./publication";
import { pillar } from "./pillar";
import { homePage } from "./homePage";
import { expertisesPage } from "./expertisesPage";
import { aboutPage } from "./aboutPage";
import { referencesPage } from "./referencesPage";
import { formationsPage } from "./formationsPage";
import { ressourcesPage } from "./ressourcesPage";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Singletons (pages)
  homePage,
  expertisesPage,
  aboutPage,
  referencesPage,
  formationsPage,
  ressourcesPage,
  siteSettings,
  // Piliers
  pillar,
  // Collections
  reference,
  formation,
  publication,
  partner,
];
