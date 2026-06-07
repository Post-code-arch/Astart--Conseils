import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations — Astarté Conseils",
};

export default function FormationsPage() {
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
                Sept programmes catalogue plus la possibilité d&apos;un parcours dédié. Bilingues FR/AR.
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
            <h2 className="reveal d1">Sept programmes <em>prêts<br />à déployer.</em></h2>
          </div>
          <p className="reveal d2">Format intensif, animation en binôme, supports bilingues, suivi à 3 mois inclus.</p>
        </div>

        <div className="prestations-grid">
          <article className="prestation-card reveal d1">
            <div className="prestation-meta"><span><span className="marker"></span>4 jours</span><span>FR / AR · 12-15 pers.</span></div>
            <h3>Suivi-évaluation sensible au genre</h3>
            <p>Concevoir, piloter et exploiter un système de suivi-évaluation qui intègre l&apos;analyse genre dès la conception.</p>
            <ul className="prestation-modules"><li>Théorie du changement &amp; genre</li><li>Indicateurs sensibles</li><li>Collecte &amp; biais</li><li>Restitution stratégique</li></ul>
            <Link href="/#contact" className="prestation-link">Programmer <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d2">
            <div className="prestation-meta"><span><span className="marker"></span>3 jours</span><span>FR · 10-18 pers.</span></div>
            <h3>Méthodologie d&apos;études et de diagnostics</h3>
            <p>Outiller vos équipes pour produire en interne des études fiables : cadrage, échantillonnage, conduite d&apos;entretiens, rédaction.</p>
            <ul className="prestation-modules"><li>Cadrage d&apos;une question décisionnelle</li><li>Méthodes mixtes</li><li>Conduite d&apos;entretiens</li><li>Rapport défendable</li></ul>
            <Link href="/#contact" className="prestation-link">Programmer <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d1">
            <div className="prestation-meta"><span><span className="marker"></span>5 jours</span><span>FR / AR · 8-14 pers.</span></div>
            <h3>Pilotage axé résultats</h3>
            <p>Adopter une logique de pilotage par les résultats dans des environnements administratifs complexes.</p>
            <ul className="prestation-modules"><li>Cadre logique &amp; indicateurs</li><li>Arbitrages budgétaires</li><li>Bilan trimestriel</li><li>Mise en application</li></ul>
            <Link href="/#contact" className="prestation-link">Programmer <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d2">
            <div className="prestation-meta"><span><span className="marker"></span>3 jours</span><span>FR · 8-12 pers.</span></div>
            <h3>Analyse politique &amp; plaidoyer</h3>
            <p>Maîtriser les outils d&apos;analyse des politiques publiques et structurer un plaidoyer fondé sur des données.</p>
            <ul className="prestation-modules"><li>Mapping d&apos;acteurs</li><li>Théorie du changement</li><li>Argumentaire défendable</li><li>Stratégie d&apos;influence</li></ul>
            <Link href="/#contact" className="prestation-link">Programmer <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d1">
            <div className="prestation-meta"><span><span className="marker"></span>2 jours</span><span>FR / AR · 10-20 pers.</span></div>
            <h3>Rédaction de rapports défendables</h3>
            <p>Structurer un rapport d&apos;étude ou d&apos;évaluation pour qu&apos;il soit lu par les décideurs et qu&apos;il tienne devant un contradicteur.</p>
            <ul className="prestation-modules"><li>Structure narrative</li><li>Synthèse exécutive</li><li>Recommandations hiérarchisées</li><li>Annexes utilisables</li></ul>
            <Link href="/#contact" className="prestation-link">Programmer <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d2">
            <div className="prestation-meta"><span><span className="marker"></span>4 jours</span><span>FR · 10-15 pers.</span></div>
            <h3>Méthodes qualitatives approfondies</h3>
            <p>Conduire entretiens, focus groupes et observations. Coder, analyser, produire des verbatims utiles.</p>
            <ul className="prestation-modules"><li>Conception du protocole</li><li>Conduite d&apos;entretiens</li><li>Codage thématique</li><li>Restitution analytique</li></ul>
            <Link href="/#contact" className="prestation-link">Programmer <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d1">
            <div className="prestation-meta"><span><span className="marker"></span>3 jours</span><span>FR / AR · 8-14 pers.</span></div>
            <h3>Évaluation contributive</h3>
            <p>Évaluer un programme quand l&apos;attribution stricte est impossible. Documenter la contribution avec rigueur.</p>
            <ul className="prestation-modules"><li>Chaînes causales plausibles</li><li>Alternatives explorées</li><li>Niveau de confiance</li><li>Restitution</li></ul>
            <Link href="/#contact" className="prestation-link">Programmer <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d2" style={{ background: "var(--aubergine)", color: "var(--cream)", borderColor: "var(--aubergine)" }}>
            <div className="prestation-meta" style={{ color: "var(--cream-muted)" }}><span><span className="marker"></span>Sur mesure</span><span>FR / AR</span></div>
            <h3 style={{ color: "var(--saffron)" }}>Programme dédié</h3>
            <p style={{ color: "var(--cream-muted)" }}>Si vos besoins ne correspondent à aucun catalogue, nous concevons un parcours sur mesure : diagnostic, ingénierie pédagogique, animation, évaluation à 6 mois.</p>
            <ul className="prestation-modules" style={{ borderTopColor: "var(--line-dark)" }}>
              <li style={{ color: "var(--cream)" }}>Diagnostic des besoins</li>
              <li style={{ color: "var(--cream)" }}>Architecture pédagogique</li>
              <li style={{ color: "var(--cream)" }}>Animation &amp; supports</li>
              <li style={{ color: "var(--cream)" }}>Évaluation post-formation</li>
            </ul>
            <Link href="/#contact" className="prestation-link" style={{ color: "var(--saffron)" }}>Construire un programme <span className="arrow">→</span></Link>
          </article>
        </div>
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

      <section className="contact-strip">
        <div className="contact-strip-inner">
          <p className="eyebrow reveal"><span className="dot"></span> Construire un programme</p>
          <h2 className="reveal d1">Un parcours sur mesure<br /><em>pour vos équipes.</em></h2>
          <a href="mailto:contact@astarte-conseils.com" className="btn-pill primary reveal d2" style={{ background: "var(--cream)", color: "var(--aubergine)", boxShadow: "none", marginTop: "8px" }}>
            contact@astarte-conseils.com <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
