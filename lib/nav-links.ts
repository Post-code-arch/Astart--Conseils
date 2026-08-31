export type NavLink = {
  key: string;
  label: string;
  num: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { key: "home", label: "Accueil", num: "— 01", href: "/" },
  { key: "a-propos", label: "À propos", num: "— 02", href: "/a-propos" },
  { key: "formations", label: "Formations", num: "— 03", href: "/formations" },
  { key: "expertises", label: "Expertises", num: "— 04", href: "/expertises" },
  { key: "references", label: "Références", num: "— 05", href: "/references" },
  { key: "ressources", label: "Ressources", num: "— 06", href: "/ressources" },
];
