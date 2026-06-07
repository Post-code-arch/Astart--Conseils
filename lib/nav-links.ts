export type NavLink = {
  key: string;
  label: string;
  num: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { key: "home", label: "Accueil", num: "— 01", href: "/" },
  { key: "analyser", label: "Analyser", num: "— 02", href: "/analyser" },
  { key: "accompagner", label: "Accompagner", num: "— 03", href: "/accompagner" },
  { key: "developper", label: "Développer", num: "— 04", href: "/developper" },
  { key: "references", label: "Références", num: "— 05", href: "/references" },
  { key: "a-propos", label: "À propos", num: "— 06", href: "/a-propos" },
  { key: "ressources", label: "Ressources", num: "— 07", href: "/ressources" },
];
