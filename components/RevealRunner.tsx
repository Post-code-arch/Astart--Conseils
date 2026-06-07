"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealRunner() {
  const pathname = usePathname();

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document
      .querySelectorAll(
        ".reveal, .hero-title, .hero-lead, .method-title, .method-lead, .panel-title, .diff-title, .cta-title, .proof-stat, .diff-item, .client-pill"
      )
      .forEach((el) => revealObserver.observe(el));

    const numEls = document.querySelectorAll<HTMLElement>(".count-up");
    const numTargets: { el: HTMLElement; target: number; suffix: string; original: string }[] = [];
    numEls.forEach((el) => {
      const original = el.innerHTML;
      const match = (el.textContent ?? "").match(/(\d+)/);
      if (!match) return;
      const target = parseInt(match[1], 10);
      const suffix = original.replace(/\d+/, "");
      numTargets.push({ el, target, suffix, original });
      el.innerHTML = "0" + suffix;
    });

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const stat = numTargets.find((n) => n.el === entry.target);
          if (!stat) return;
          countObserver.unobserve(entry.target);
          const duration = 1500;
          const start = performance.now();
          function tickCount(now: number) {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const value = Math.floor(stat!.target * eased);
            stat!.el.innerHTML = value + stat!.suffix;
            if (t < 1) requestAnimationFrame(tickCount);
            else stat!.el.innerHTML = stat!.original;
          }
          requestAnimationFrame(tickCount);
        });
      },
      { threshold: 0.4 }
    );
    numTargets.forEach((n) => countObserver.observe(n.el));

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
