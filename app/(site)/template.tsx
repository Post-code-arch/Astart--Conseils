"use client";

import { motion, useReducedMotion } from "motion/react";

// Page transition: measured fade + small rise on every navigation.
// Lives in template (not layout) so it re-mounts per route. Nav/Footer are in
// layout, outside this wrapper, so the fixed nav is never affected.
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
