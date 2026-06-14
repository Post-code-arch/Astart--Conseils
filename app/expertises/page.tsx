import type { Metadata } from "next";
import { expertises, expertisesParent } from "@/lib/expertises";
import ExpertisePanels from "@/components/ExpertisePanels";

export const metadata: Metadata = {
  title: "Expertises — Astarté Conseils",
  description: expertisesParent.intro,
};

export default function ExpertisesPage() {
  return (
    <>
      <ExpertisePanels items={expertises} />

      <section className="contact-strip">
        <div className="contact-strip-inner">
          <p className="eyebrow reveal"><span className="dot"></span> Une question, un projet</p>
          <h2 className="reveal d1">Pas sûr de la bonne porte&nbsp;?<br /><em>Parlons-en.</em></h2>
          <p className="reveal d2" style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "17px", lineHeight: 1.6, color: "var(--cream-muted)", maxWidth: "560px" }}>
            Décrivez-nous votre besoin — nous vous orienterons vers le pôle le plus pertinent,
            ou une combinaison des trois.
          </p>
          <a href="mailto:contact@astarte-conseils.com" className="btn-pill primary reveal d3" style={{ background: "var(--cream)", color: "var(--aubergine)", boxShadow: "none", marginTop: "8px" }}>
            contact@astarte-conseils.com
            <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
