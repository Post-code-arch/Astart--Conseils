import Link from "next/link";
import type { Metadata } from "next";
import PillarHero from "@/components/PillarHero";

export const metadata: Metadata = {
  title: "Développer — Astarté Conseils",
};

export default function DevelopperPage() {
  return (
    <>
      <PillarHero
        tone="developper"
        index="03"
        name="Développer"
        eyebrow="Pilier 03 · Formations · Renforcement de capacités · Programmes"
        title={
          <>
            Transmettre<br />
            <em>ce que nous savons faire.</em>
          </>
        }
        lead="Nos formations ne sont pas des modules importés. Elles sont conçues à partir de vos dossiers, vos données, vos terrains — et elles laissent à l'organisation des outils qu'elle peut redéployer en interne, sans nous."
        ctaLabel="Construire un programme"
        ctaHref="/#contact"
      />

      <section className="section tone-cream">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Notre approche</p>
            <h2 className="reveal d1">Une pédagogie qui <em>laisse<br />des traces.</em></h2>
          </div>
          <p className="reveal d2">
            Nous concevons nos sessions à partir de vos dossiers réels. Nos participants repartent avec des
            gabarits, des grilles d&apos;analyse et une méthode qu&apos;ils peuvent appliquer dès le lendemain.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card reveal d1"><div className="num">01.</div><h3>Diagnostic préalable</h3><p>Aucune session ne démarre sans cadrage avec le commanditaire et test de positionnement des participants. Le programme s&apos;adapte aux niveaux réels.</p></div>
          <div className="value-card reveal d2"><div className="num">02.</div><h3>Cas d&apos;application réels</h3><p>Les exercices sont construits à partir des dossiers en cours dans l&apos;organisation cliente — pas des cas génériques tirés d&apos;un manuel.</p></div>
          <div className="value-card reveal d3"><div className="num">03.</div><h3>Binôme d&apos;experts</h3><p>Chaque session est animée par deux intervenants — un méthodologique et un sectoriel — pour garantir profondeur et adaptation.</p></div>
          <div className="value-card reveal d1"><div className="num">04.</div><h3>Suivi post-formation</h3><p>Trois mois après la session, point d&apos;application avec un échantillon de participants et restitution au commanditaire.</p></div>
          <div className="value-card reveal d2"><div className="num">05.</div><h3>Livrables réutilisables</h3><p>Chaque programme laisse à l&apos;organisation manuels, gabarits et grilles d&apos;analyse qu&apos;elle peut redéployer en interne.</p></div>
          <div className="value-card reveal d3"><div className="num">06.</div><h3>Bilingue par défaut</h3><p>Tous nos supports existent en français et en arabe. Les sessions sont animées dans la langue de travail de l&apos;organisation.</p></div>
        </div>
      </section>

      <section className="section tone-sand">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Prestations</p>
            <h2 className="reveal d1">Catalogue &amp; <em>sur-mesure.</em></h2>
          </div>
          <p className="reveal d2">Trois programmes catalogue + un cadre pour concevoir un parcours dédié.</p>
        </div>

        <div className="prestations-grid">
          <article className="prestation-card reveal d1">
            <div className="prestation-meta"><span><span className="marker"></span>4 jours</span><span>FR / AR · 12-15 pers.</span></div>
            <h3>Suivi-évaluation sensible au genre</h3>
            <p>Concevoir, piloter et exploiter un système de suivi-évaluation qui intègre l&apos;analyse genre dès la conception du projet.</p>
            <ul className="prestation-modules">
              <li>Théorie du changement &amp; genre</li>
              <li>Indicateurs sensibles</li>
              <li>Collecte &amp; biais</li>
              <li>Restitution stratégique</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Programmer une session <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d2">
            <div className="prestation-meta"><span><span className="marker"></span>3 jours</span><span>FR · 10-18 pers.</span></div>
            <h3>Méthodologie d&apos;études et de diagnostics</h3>
            <p>Outiller vos équipes pour produire en interne des études fiables : cadrage, échantillonnage, conduite d&apos;entretiens, rédaction.</p>
            <ul className="prestation-modules">
              <li>Cadrage d&apos;une question décisionnelle</li>
              <li>Méthodes mixtes</li>
              <li>Conduite d&apos;entretiens</li>
              <li>Rédaction d&apos;un rapport défendable</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Programmer une session <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d1">
            <div className="prestation-meta"><span><span className="marker"></span>5 jours</span><span>FR / AR · 8-14 pers.</span></div>
            <h3>Pilotage axé résultats</h3>
            <p>Adopter une logique de pilotage par les résultats dans des environnements administratifs complexes.</p>
            <ul className="prestation-modules">
              <li>Cadre logique &amp; indicateurs</li>
              <li>Arbitrages budgétaires</li>
              <li>Bilan trimestriel</li>
              <li>Atelier de mise en application</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Programmer une session <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d2">
            <div className="prestation-meta"><span><span className="marker"></span>Sur mesure</span><span>FR / AR</span></div>
            <h3>Programme dédié</h3>
            <p>Si vos besoins ne correspondent à aucun catalogue, nous concevons un parcours : diagnostic, ingénierie pédagogique, animation, évaluation à 6 mois.</p>
            <ul className="prestation-modules">
              <li>Diagnostic des besoins</li>
              <li>Architecture pédagogique</li>
              <li>Animation &amp; supports</li>
              <li>Évaluation post-formation</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Construire un programme <span className="arrow">→</span></Link>
          </article>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="section-inner">
          <div className="refs-head">
            <div>
              <p className="eyebrow reveal"><span className="dot"></span> Références Développer</p>
              <h2 className="reveal d1" style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(40px,4.6vw,72px)", lineHeight: 1, letterSpacing: "-0.025em", marginTop: "20px" }}>
                Quelques missions <em style={{ fontStyle: "italic", color: "var(--saffron)" }}>développer.</em>
              </h2>
            </div>
            <Link href="/references" className="all-link reveal d2">Toutes les références →</Link>
          </div>
          <div className="refs-grid">
            <article className="ref-card reveal d1">
              <span className="ref-tag">Développer</span>
              <div className="ref-client">Oxfam · Algérie</div>
              <h3>Formation des équipes terrain à l&apos;approche genre et au suivi-évaluation sensible</h3>
              <p className="ref-result"><strong>Résultat</strong>3 modules adaptés au contexte local. 42 cadres formés. Outils intégrés au manuel opérationnel.</p>
            </article>
            <article className="ref-card reveal d2">
              <span className="ref-tag">Développer</span>
              <div className="ref-client">GIZ · Algérie</div>
              <h3>Cycle de formation au pilotage axé résultats pour cadres ministériels</h3>
              <p className="ref-result"><strong>Résultat</strong>5 sessions, 60 cadres formés sur 18 mois. Cadre logique adopté pour 2 directions.</p>
            </article>
            <article className="ref-card reveal d3">
              <span className="ref-tag">Développer</span>
              <div className="ref-client">FES · Algérie</div>
              <h3>Programme de renforcement des capacités d&apos;analyse politique d&apos;OSC</h3>
              <p className="ref-result"><strong>Résultat</strong>24 cadres associatifs formés. 6 organisations ont publié une note d&apos;analyse dans l&apos;année.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-strip">
        <div className="contact-strip-inner">
          <p className="eyebrow reveal"><span className="dot"></span> Construire un programme</p>
          <h2 className="reveal d1">Un parcours sur mesure<br /><em>pour vos équipes.</em></h2>
          <p className="reveal d2" style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "17px", lineHeight: 1.6, color: "var(--cream-muted)", maxWidth: "560px" }}>
            Décrivez-nous votre besoin de montée en compétences. Nous reviendrons avec une proposition de cadrage.
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
