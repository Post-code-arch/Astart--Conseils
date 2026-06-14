export type NavLink = {
  key: string;
  label: string;
  num: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { key: "home", label: "Accueil", num: "— 01", href: "/" },
  { key: "expertises", label: "Expertises", num: "— 02", href: "/expertises" },
  { key: "references", label: "Références", num: "— 03", href: "/references" },
  { key: "a-propos", label: "À propos", num: "— 04", href: "/a-propos" },
  { key: "ressources", label: "Ressources", num: "— 05", href: "/ressources" },
];
