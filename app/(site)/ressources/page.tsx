import type { Metadata } from "next";
import Cta from "@/components/Cta";
import { getPublications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ressources — Astarté Conseils",
};

export default async function RessourcesPage() {
  const publications = await getPublications();
  return (
    <>
      <section className="page-hero hero-ressources">
        <div className="page-hero-grain" aria-hidden="true"></div>
        <div className="page-hero-inner">
          <div className="page-hero-text">
            <p className="eyebrow reveal"><span className="dot"></span> Cahier · Publications · Notes de terrain</p>
            <h1 className="page-hero-title reveal d1">
              Ce que nous<br />
              <em>publions.</em>
            </h1>
            <div className="page-hero-bottom">
              <p className="page-hero-lead reveal d2">
                Le cahier éditorial annuel, les notes de terrain, les essais et les contributions
                que nous mettons à disposition de la communauté professionnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {publications.length > 0 && (
        <section className="section tone-dark">
          <div className="section-head">
            <div>
              <p className="eyebrow reveal"><span className="dot"></span> Notes &amp; publications</p>
              <h2 className="reveal d1">Articles &amp; <em>contributions.</em></h2>
            </div>
            <p className="reveal d2">Notes courtes, essais et tribunes publiés au fil des missions.</p>
          </div>

          <div className="pub-list">
            {publications.map((pub, i) => (
              <a href={pub.href ?? "#"} key={i} className={`pub-row reveal d${(i % 3) + 1}`}>
                <span className="pub-year">{pub.year}</span>
                <div className="pub-content">
                  <h3>{pub.title}</h3>
                  <p>{pub.body}</p>
                </div>
                <span className="pub-tag">{pub.tag}</span>
                <span className="pub-arrow">Lire <span className="arrow">→</span></span>
              </a>
            ))}
          </div>
        </section>
      )}

      <Cta
        eyebrow="Recevoir nos publications"
        title={<>Une publication par<br /><em>trimestre, sans fioritures.</em></>}
        lead="Notre cahier annuel et nos notes courtes, directement par email."
        ctaLabel="M'abonner"
        ctaHref="mailto:contact@astarte-conseils.org?subject=Abonnement publications"
      />
    </>
  );
}
