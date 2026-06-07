"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const bgRef = useRef<HTMLImageElement>(null);
  const annotationRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y > window.innerHeight) return;

      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${y * 0.25}px) scale(${1.04 + y * 0.0002})`;
      }
      annotationRefs.current.forEach((el, i) => {
        if (!el) return;
        const offset = (i + 1) * 0.06;
        el.style.transform = `translateY(${y * offset}px)`;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <Image ref={bgRef} src="/assets/hero-symbol.png" alt="" fill priority sizes="100vw" />
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-top">
          <p className="eyebrow"><span className="dot"></span> Cabinet de conseil &amp; études — Afrique du Nord</p>
        </div>

        <div className="hero-middle">
          <h1 className="hero-title">
            Vos décisions<br />
            méritent des analyses<br />
            <em>que vous pouvez<br />défendre.</em>
          </h1>
        </div>

        <div className="hero-bottom">
          <p className="hero-lead">
            Les organisations qui opèrent en Algérie et au Maghreb font face à des terrains
            complexes. Nous produisons les études, évaluations et formations qui leur permettent
            d&apos;agir avec autorité.
          </p>
          <Link href="#methode" className="hero-cta">
            Découvrir notre approche
            <span className="cta-arrow">↓</span>
          </Link>
        </div>

        <div className="hero-annotation a1" ref={(el) => { annotationRefs.current[0] = el; }}>
          <span className="dot-tag"></span>
          <div>
            <span className="tag">Terrain</span>
            <span className="val">Maghreb &amp; Sahel</span>
          </div>
        </div>
        <div className="hero-annotation a2" ref={(el) => { annotationRefs.current[1] = el; }}>
          <span className="dot-tag"></span>
          <div>
            <span className="tag">Pratique</span>
            <span className="val">15 ans · 120 missions</span>
          </div>
        </div>
        <div className="hero-annotation a3" ref={(el) => { annotationRefs.current[2] = el; }}>
          <span className="dot-tag"></span>
          <div>
            <span className="tag">Doctrine</span>
            <span className="val">Analyser · Accompagner · Développer</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
