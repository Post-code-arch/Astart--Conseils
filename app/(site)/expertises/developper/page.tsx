import Link from "next/link";
import type { Metadata } from "next";
import PillarHero from "@/components/PillarHero";
import ReferenceGroups from "@/components/ReferenceGroups";
import Cta from "@/components/Cta";
import { getPillar, getReferences } from "@/lib/content";

export const metadata: Metadata = {
  title: "Développer — Astarté Conseils",
};

export default async function DevelopperPage() {
  const p = await getPillar("developper");
  const references = (await getReferences()).filter((r) => r.pillar === "developper");
  return (
    <>
      <PillarHero
        tone="developper"
        index={p?.index ?? "03"}
        name={p?.name ?? "Développer"}
        eyebrow={p?.heroEyebrow ?? ""}
        title={<>{p?.heroTitle}<br /><em>{p?.heroTitleEm}</em></>}
        lead={p?.heroLead ?? ""}
        ctaLabel={p?.heroCtaLabel ?? "Construire un programme"}
        ctaHref="/#contact"
        imageSrc={p?.heroImageUrl ?? "/assets/expertise-developper.jpg"}
        imageAlt={p?.name}
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
          <div className="value-card reveal d2"><div className="num">02.</div><h3>Ingénierie pédagogique sur mesure</h3><p>Nous n&apos;adaptons pas un module existant — nous concevons le programme à partir de vos besoins, en partant de vos objectifs, de votre public et de votre contexte organisationnel.</p></div>
          <div className="value-card reveal d3"><div className="num">03.</div><h3>Cas d&apos;application réels</h3><p>Les exercices sont construits à partir des dossiers et/ou situations en cours dans l&apos;organisation cliente — pas des cas génériques tirés d&apos;un manuel.</p></div>
          <div className="value-card reveal d1"><div className="num">04.</div><h3>Binôme d&apos;experts</h3><p>Selon la complexité de la mission, nos sessions associent un profil méthodologique et un profil sectoriel.</p></div>
          <div className="value-card reveal d2"><div className="num">05.</div><h3>Suivi post-formation</h3><p>Si le client le demande, dans les trois mois suivant la session, point d&apos;application avec un échantillon de participants et restitution au commanditaire.</p></div>
          <div className="value-card reveal d3"><div className="num">06.</div><h3>Livrables réutilisables</h3><p>Chaque programme laisse à l&apos;organisation manuels, gabarits et grilles d&apos;analyse qu&apos;elle peut redéployer en interne.</p></div>
          <div className="value-card reveal d1"><div className="num">07.</div><h3>Français, Anglais, Arabe</h3><p>Nos supports sont produits dans la langue de votre choix. Les sessions sont animées dans la langue de travail de l&apos;organisation.</p></div>
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
          <ReferenceGroups items={references} />
        </div>
      </section>

      <Cta
        eyebrow="Construire un programme"
        title={<>Un parcours sur mesure<br /><em>pour vos équipes.</em></>}
        lead="Décrivez-nous votre besoin de montée en compétences. Nous reviendrons avec une proposition de cadrage."
      />
    </>
  );
}
