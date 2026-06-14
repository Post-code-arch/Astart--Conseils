"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const MotionLink = motion.create(Link);

// Sober, institutional motion vocabulary (reference component):
// - reveal once on scroll: short fade + small rise, gentle easing, staggered
// - hover: measured -4px lift (gold border / arrow handled in CSS)
// - prefers-reduced-motion: no transform, content shown immediately
export default function ExpertiseDoor({
  slug,
  index,
  title,
  accroche,
  position = 0,
}: {
  slug: string;
  index: string;
  title: string;
  accroche: string;
  position?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <MotionLink
      href={`/expertises/${slug}`}
      className="expertise-door"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: [0.2, 0.8, 0.2, 1],
        delay: reduce ? 0 : position * 0.08,
      }}
      whileHover={reduce ? undefined : { y: -4 }}
    >
      <span className="door-index">Pilier {index}</span>
      <h3>{title}</h3>
      <p>{accroche}</p>
      <span className="door-link">
        Explorer ce pilier <span className="arrow">→</span>
      </span>
    </MotionLink>
  );
}
