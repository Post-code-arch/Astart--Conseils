"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav-links";

function keyForPath(path: string): string {
  if (path === "/") return "home";
  const segment = path.split("/").filter(Boolean)[0];
  return segment ?? "home";
}

export default function Nav() {
  const pathname = usePathname();
  const activeKey = keyForPath(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close the menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={`nav-shell${scrolled ? " scrolled" : ""}`} role="banner">
        <Link className="nav-logo" href="/" aria-label="Astarté Conseils — accueil">
          <Image src="/assets/logo-full-saffron.png" alt="Astarté" width={146} height={26} priority />
        </Link>

        <button
          className="nav-burger"
          aria-label="Ouvrir le menu"
          aria-controls="menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span className="lines" aria-hidden="true">
            <i></i>
            <i></i>
          </span>
          Menu
        </button>
      </header>

      <div
        className="menu-overlay"
        id="menu"
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
      >
        <aside className="menu-panel">
          <div className="menu-top">
            <Image src="/assets/logo-mark-saffron.png" alt="Astarté" className="menu-logo-mark" width={36} height={36} />
            <button className="menu-close" aria-label="Fermer le menu" onClick={() => setMenuOpen(false)}>
              <span className="x">×</span> Fermer
            </button>
          </div>
          <ul className="menu-list">
            {navLinks.map((link) => (
              <li key={link.key} className={link.key === activeKey ? "active" : undefined}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  <span className="label">{link.label}</span>
                  <span className="num">{link.num}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="menu-foot">
            <div className="meta">
              <span>Alger, Algérie</span>
              <a href="mailto:contact@astarte-conseils.com">contact@astarte-conseils.com</a>
            </div>
            <div className="legal">
              <a href="#">LinkedIn</a>
              <a href="#">Mentions légales</a>
              <a href="#">Confidentialité</a>
            </div>
          </div>
        </aside>
        <div className="menu-side" data-menu-dismiss onClick={() => setMenuOpen(false)}></div>
      </div>
    </>
  );
}
