"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav-links";
import { expertises } from "@/lib/expertises";

function keyForPath(path: string): string {
  if (path === "/") return "home";
  const segment = path.split("/").filter(Boolean)[0];
  return segment ?? "home";
}

export default function Nav() {
  const pathname = usePathname();
  const activeKey = keyForPath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const cls = (key: string) => (key === activeKey ? "is-active" : undefined);

  return (
    <>
      <header className="nav-shell" role="banner">
        <Link className="nav-logo" href="/" aria-label="Astarté Conseils — accueil">
          <span className="nav-logo-mark" aria-hidden="true" />
        </Link>

        {/* Desktop horizontal navigation */}
        <nav className="nav-links" aria-label="Navigation principale">
          <Link href="/a-propos" className={cls("a-propos")}>À Propos</Link>
          <Link href="/formations" className={cls("formations")}>Formations</Link>

          <div className="nav-expertise">
            <Link
              href="/expertises"
              className={`nav-expertise-trigger ${cls("expertises") ?? ""}`}
              aria-haspopup="true"
            >
              Expertise <span className="caret" aria-hidden="true">▾</span>
            </Link>
            <div className="nav-dropdown" role="menu">
              <Link href="/expertises" role="menuitem" className="dropdown-all">
                Toutes les expertises
              </Link>
              {expertises.map((e) => (
                <Link key={e.slug} href={`/expertises/${e.slug}`} role="menuitem">
                  <span className="dd-index">{e.index}</span>
                  {e.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/references" className={cls("references")}>Références</Link>
          <Link href="/ressources" className={cls("ressources")}>Ressources</Link>
        </nav>

        {/* Mobile burger */}
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
            <span className="menu-logo-mark" aria-hidden="true" />
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
