import Link from "next/link";
import type { Metadata } from "next";
import { expertises, expertisesParent } from "@/lib/expertises";

export const metadata: Metadata = {
  title: "Expertises — Astarté Conseils",
  description: expertisesParent.intro,
};

export default function ExpertisesPage() {
  const [titleLine1, titleLine2] = expertisesParent.title.split("\n");

  return (
    <>
      <section className="page-hero gradient-ember">
        <div className="page-hero-grain" aria-hidden="true"></div>
        <div className="page-hero-inner">
          <div className="page-hero-text">
            <p className="eyebrow reveal"><span className="dot"></span> Expertises · Analyser · Accompagner · Développer</p>
            <h1 className="page-hero-title reveal d1">
              {titleLine1}
              {titleLine2 && (
                <>
                  <br />
                  <em>{titleLine2}</em>
                </>
              )}
            </h1>
            <div className="page-hero-bottom">
              <p className="page-hero-lead reveal d2">{expertisesParent.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tone-cream">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Nos trois pôles</p>
            <h2 className="reveal d1">Par où <em>commencer&nbsp;?</em></h2>
          </div>
          <p className="reveal d2">
            Chaque pôle est consultable individuellement. La plupart des missions en combinent
            plusieurs selon les phases du projet.
          </p>
        </div>

        <div className="expertise-doors">
          {expertises.map((e, i) => (
            <Link
              key={e.slug}
              href={`/expertises/${e.slug}`}
              className={`expertise-door reveal d${i + 1}`}
            >
              <span className="door-index">Pilier {e.index}</span>
              <h3>{e.title}</h3>
              <p>{e.accroche}</p>
              <span className="door-link">
                Explorer ce pilier <span className="arrow">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

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
