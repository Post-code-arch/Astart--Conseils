"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { navLinks } from "@/lib/nav-links";

function keyForPath(path: string): string {
  if (path === "/") return "home";
  const segment = path.split("/").filter(Boolean)[0];
  return segment ?? "home";
}

export default function Nav() {
  const pathname = usePathname();
  const activeKey = keyForPath(pathname);
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const brandRef = useRef<HTMLAnchorElement>(null);

  // Scroll-driven morph parameters (measured from the docked wordmark).
  const [morph, setMorph] = useState({ scale0: 1, x0: 0, y0: 0, H: 1 });
  const morphActive = isHome && !reduce;

  useEffect(() => {
    if (!morphActive) {
      setMorph({ scale0: 1, x0: 0, y0: 0, H: 1 });
      return;
    }
    function measure() {
      const el = brandRef.current;
      if (!el) return;
      const w = el.offsetWidth; // untransformed width
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const mobile = vw < 768;
      const padLeft = mobile ? 20 : 44;
      const target = (mobile ? 0.72 : 0.36) * vw;
      const scale0 = Math.min(mobile ? 4.5 : 5.5, Math.max(mobile ? 2.4 : 3, target / w));
      const x0 = vw / 2 - padLeft - (w * scale0) / 2;
      const y0 = (mobile ? 0.06 : 0.07) * vh;
      const H = (mobile ? 0.5 : 0.6) * vh;
      setMorph({ scale0, x0, y0, H });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [morphActive, pathname]);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, morph.H], [morph.scale0, 1], { clamp: true });
  const x = useTransform(scrollY, [0, morph.H], [morph.x0, 0], { clamp: true });
  const y = useTransform(scrollY, [0, morph.H], [morph.y0, 0], { clamp: true });
  const uiOpacity = useTransform(scrollY, [0, morph.H * 0.5], [0, 1], { clamp: true });

  // Toggle pointer-events / docked styling once the wordmark has settled.
  const [docked, setDocked] = useState(!morphActive);
  useEffect(() => {
    if (!morphActive) {
      setDocked(true);
      return;
    }
    const unsub = scrollY.on("change", (v) => setDocked(v >= morph.H * 0.85));
    setDocked(scrollY.get() >= morph.H * 0.85);
    return () => unsub();
  }, [morphActive, morph.H, scrollY]);

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

  return (
    <>
      <header className={`nav-shell${morphActive && !docked ? " nav-morphing" : ""}`} role="banner">
        <motion.div
          className="nav-bg"
          aria-hidden="true"
          style={morphActive ? { opacity: uiOpacity } : undefined}
        />

        <motion.a
          ref={brandRef}
          className="brand-morph"
          href="/"
          aria-label="Kinaya — accueil"
          style={morphActive ? { scale, x, y } : undefined}
        >
          Kinaya
        </motion.a>

        <motion.button
          className="nav-burger"
          aria-label="Ouvrir le menu"
          aria-controls="menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          style={morphActive ? { opacity: uiOpacity } : undefined}
        >
          <span className="lines" aria-hidden="true">
            <i></i>
            <i></i>
          </span>
          Menu
        </motion.button>
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
            <span className="menu-wordmark">Kinaya</span>
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
