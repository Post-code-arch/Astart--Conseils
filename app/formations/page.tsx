import Link from "next/link";
import type { Metadata } from "next";
import Cta from "@/components/Cta";
import FormationsIndex from "@/components/FormationsIndex";
import { formations } from "@/lib/formations";

export const metadata: Metadata = {
  title: "Formations — Astarté Conseils",
};

export default function FormationsPage() {
  const catalogue = formations.filter((f) => f.kind === "catalogue");
  const surMesure = formations.find((f) => f.kind === "surMesure");

  return (
    <>
      <section className="page-hero gradient-horizon">
        <div className="page-hero-grain" aria-hidden="true"></div>
        <div className="page-hero-inner">
          <div className="page-hero-text">
            <p className="eyebrow reveal"><span className="dot"></span> Renforcement de capacités · Programmes sur mesure</p>
            <h1 className="page-hero-title reveal d1">
              Des formations qui<br />
              <em>laissent des traces.</em>
            </h1>
            <div className="page-hero-bottom">
              <p className="page-hero-lead reveal d2">
                Huit programmes catalogue plus la possibilité d&apos;un parcours dédié. Bilingues FR/AR.
                Conçus à partir de vos dossiers réels, pas de cas génériques tirés d&apos;un manuel.
              </p>
              <Link href="/#contact" className="btn-pill primary reveal d3">
                Programmer une session <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section tone-cream">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Catalogue</p>
            <h2 className="reveal d1">Huit programmes <em>prêts<br />à déployer.</em></h2>
          </div>
          <p className="reveal d2">Format intensif, animation en binôme, supports bilingues, suivi à 3 mois inclus.</p>
        </div>

        <FormationsIndex items={catalogue} />

        {surMesure && (
          <div className="fx-dedie reveal">
            <div className="fx-dedie-head">
              <span className="fx-dedie-tag">Sur mesure · {surMesure.langue}</span>
              <h3>{surMesure.title}</h3>
              <p>{surMesure.accroche}</p>
            </div>
            <div className="fx-dedie-body">
              <ul className="fx-dedie-modules">
                {surMesure.modules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <Link href="/#contact" className="btn-pill primary">
                Construire un programme <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        )}
      </section>

      <section className="section tone-sand">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Comment ça se passe</p>
            <h2 className="reveal d1">Notre méthode <em>pédagogique.</em></h2>
          </div>
          <p className="reveal d2">Six principes appliqués à toutes nos formations, qu&apos;elles soient catalogue ou sur mesure.</p>
        </div>

        <div className="values-grid">
          <div className="value-card reveal d1"><div className="num">01.</div><h3>Diagnostic préalable</h3><p>Cadrage avec le commanditaire et test de positionnement des participants avant chaque session.</p></div>
          <div className="value-card reveal d2"><div className="num">02.</div><h3>Cas d&apos;application réels</h3><p>Exercices construits à partir des dossiers en cours dans l&apos;organisation cliente.</p></div>
          <div className="value-card reveal d3"><div className="num">03.</div><h3>Binôme d&apos;experts</h3><p>Deux intervenants par session — un méthodologique, un sectoriel.</p></div>
          <div className="value-card reveal d1"><div className="num">04.</div><h3>Suivi à 3 mois</h3><p>Point d&apos;application avec les participants et restitution au commanditaire.</p></div>
          <div className="value-card reveal d2"><div className="num">05.</div><h3>Livrables réutilisables</h3><p>Manuels, gabarits et grilles laissés à l&apos;organisation pour redéploiement interne.</p></div>
          <div className="value-card reveal d3"><div className="num">06.</div><h3>Bilingue par défaut</h3><p>Supports en FR et AR. Animation dans la langue de travail de l&apos;organisation.</p></div>
        </div>
      </section>

      <Cta
        eyebrow="Construire un programme"
        title={<>Un parcours sur mesure<br /><em>pour vos équipes.</em></>}
      />
    </>
  );
}
