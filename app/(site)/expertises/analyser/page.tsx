import Link from "next/link";
import type { Metadata } from "next";
import PillarHero from "@/components/PillarHero";
import ReferenceGroups from "@/components/ReferenceGroups";
import Cta from "@/components/Cta";
import { getPillar, getReferences } from "@/lib/content";

export const metadata: Metadata = {
  title: "Analyser — Astarté Conseils",
};
export default async function AnalyserPage() {
  const p = await getPillar("analyser");
  const references = (await getReferences()).filter((r) => r.pillar === "analyser");
  return (
    <>
      <PillarHero
        tone="analyser"
        index={p?.index ?? "01"}
        name={p?.name ?? "Analyser"}
        eyebrow={p?.heroEyebrow ?? ""}
        title={<>{p?.heroTitle}<br /><em>{p?.heroTitleEm}</em></>}
        lead={p?.heroLead ?? ""}
        ctaLabel={p?.heroCtaLabel ?? "Discuter d'une mission"}
        ctaHref="/#contact"
        imageSrc={p?.heroImageUrl ?? "/assets/expertise-analyser.jpg"}
        imageAlt={p?.name}
      />

      <section className="section tone-cream">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Notre approche</p>
            <h2 className="reveal d1">Une méthodologie <em>explicite<br />et argumentée.</em></h2>
          </div>
          <p className="reveal d2">
            Chaque étude répond à une question décisionnelle précise. Nous explicitons nos protocoles
            avant de commencer — et nous les documentons jusqu&apos;à la restitution.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card reveal d1">
            <div className="num">01.</div>
            <h3>Cadrage rigoureux</h3>
            <p>Nous transformons votre besoin en questions de recherche claires, avec hypothèses, indicateurs et critères de validation explicités en amont.</p>
          </div>
          <div className="value-card reveal d2">
            <div className="num">02.</div>
            <h3>Méthodes mixtes</h3>
            <p>Quantitatif et qualitatif sont articulés selon la question posée. Triangulation systématique entre sources documentaires, entretiens et observations.</p>
          </div>
          <div className="value-card reveal d3">
            <div className="num">03.</div>
            <h3>Échantillonnage défendable</h3>
            <p>Plans d&apos;échantillonnage justifiés, biais explicités, taille calculée, profils spécifiés. Pas de chiffres présentés comme représentatifs quand ils ne le sont pas.</p>
          </div>
          <div className="value-card reveal d1">
            <div className="num">04.</div>
            <h3>Lecture des contextes</h3>
            <p>Notre ancrage nous permet d&apos;accéder à des acteurs et des informations que d&apos;autres peinent à obtenir, et de les interpréter avec nuance.</p>
          </div>
          <div className="value-card reveal d2">
            <div className="num">05.</div>
            <h3>Inclusion intégrée</h3>
            <p>L&apos;analyse des dynamiques sociales et des inégalités est intégrée dans le cœur de notre démarche et méthodologie — ce n&apos;est pas une question additionnelle.</p>
          </div>
          <div className="value-card reveal d3">
            <div className="num">06.</div>
            <h3>Livrables exploitables</h3>
            <p>Nos rapports sont écrits pour être lus, compris et utilisables par tous. Analyse, recommandations et ressources documentaires.</p>
          </div>
        </div>
      </section>

      <section className="section tone-sand">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Prestations</p>
            <h2 className="reveal d1">Ce que nous <em>livrons<br />concrètement.</em></h2>
          </div>
          <p className="reveal d2">
            Chaque mission donne lieu à des livrables structurés, argumentés, directement
            utilisables par vos équipes.
          </p>
        </div>

        <div className="prestations-grid">
          <article className="prestation-card reveal d1">
            <div className="prestation-meta">
              <span>FR / AR / ENG</span>
            </div>
            <h3>Étude de référence (baseline)</h3>
            <p>Cartographie du contexte avant intervention : acteurs, indicateurs, dynamiques. Sert de point de comparaison pour mesurer l&apos;évolution du programme.</p>
            <ul className="prestation-modules">
              <li>Cadrage avec le commanditaire et revue documentaire</li>
              <li>Collecte mixte sur le terrain</li>
              <li>Analyse et triangulation</li>
              <li>Rapport de référence + base de données</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>

          <article className="prestation-card reveal d2">
            <div className="prestation-meta">
              <span>FR / AR / ENG</span>
            </div>
            <h3>Diagnostic sectoriel ou thématique</h3>
            <p>État des lieux structuré sur un secteur, un marché, une politique publique ou un enjeu organisationnel. Identifie leviers, blocages et acteurs clés.</p>
            <ul className="prestation-modules">
              <li>Revue des dispositifs existants</li>
              <li>Entretiens avec parties prenantes</li>
              <li>Cartographie des acteurs</li>
              <li>Recommandations hiérarchisées</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>

          <article className="prestation-card reveal d1">
            <div className="prestation-meta">
              <span><span className="marker"></span>8 à 16 semaines</span>
              <span>FR / AR</span>
            </div>
            <h3>Étude qualitative approfondie</h3>
            <p>Investigation longue sur des dynamiques sociales complexes. Entretiens, observations, focus groupes — pour comprendre ce que les chiffres ne disent pas.</p>
            <ul className="prestation-modules">
              <li>Conception du protocole</li>
              <li>Conduite des entretiens</li>
              <li>Codage thématique</li>
              <li>Rapport analytique + verbatim</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>

          <article className="prestation-card reveal d2">
            <div className="prestation-meta">
              <span><span className="marker"></span>3 à 6 semaines</span>
              <span>FR / AR</span>
            </div>
            <h3>Note d&apos;analyse rapide</h3>
            <p>Réponse structurée à une question décisionnelle urgente, basée sur des sources documentaires et des entretiens ciblés. Format court, exploitable immédiatement.</p>
            <ul className="prestation-modules">
              <li>Cadrage avec le commanditaire</li>
              <li>Synthèse documentaire</li>
              <li>Entretiens-clés</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="section-inner">
          <div className="refs-head">
            <div>
              <p className="eyebrow reveal"><span className="dot"></span> Références Analyser</p>
              <h2 className="reveal d1" style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(40px,4.6vw,72px)", lineHeight: 1, letterSpacing: "-0.025em", marginTop: "20px" }}>
                Quelques <em style={{ fontStyle: "italic", color: "var(--saffron)" }}>missions.</em>
              </h2>
            </div>
            <Link href="/references" className="all-link reveal d2">Toutes les références →</Link>
          </div>

          <ReferenceGroups items={references} />
        </div>
      </section>

      <Cta
        eyebrow="Démarrer une étude"
        title={<>Une question, un terrain,<br /><em>une étude à mener&nbsp;?</em></>}
        lead="Décrivez-nous votre besoin. Nous reviendrons vers vous avec une proposition concrète et adaptée."
      />
    </>
  );
}
