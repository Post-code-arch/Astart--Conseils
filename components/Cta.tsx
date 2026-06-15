import type { ReactNode } from "react";

// Shared call-to-action block (the animated warm gradient).
// Used at the bottom of every page so the CTA is consistent site-wide.
export default function Cta({
  id,
  eyebrow,
  title,
  lead,
  email = "contact@astarte-conseils.com",
  phone,
  ctaLabel,
  ctaHref,
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  email?: string;
  phone?: string;
  /** Override the primary button (label + href). Defaults to the email address. */
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="cta" id={id}>
      <div className="cta-inner">
        <p className="eyebrow"><span className="dot"></span> {eyebrow}</p>
        <h2 className="cta-title">{title}</h2>
        {lead && <p className="cta-lead">{lead}</p>}
        <div className="cta-actions">
          <a href={ctaHref ?? `mailto:${email}`} className="cta-btn primary">
            {ctaLabel ?? email}
            <span>→</span>
          </a>
          {phone && (
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="cta-btn ghost">
              {phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
