import Link from "next/link";
import type { Metadata } from "next";
import PillarHero from "@/components/PillarHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Analyser — Astarté Conseils",
};

export default function AnalyserPage() {
  return (
    <>
      <PillarHero
        tone="analyser"
        index="01"
        name="Analyser"
        eyebrow="Pilier 01 · Études · Recherches · Diagnostics"
        title={
          <>
            Comprendre<br />
            <em>avant d&apos;agir.</em>
          </>
        }
        lead="Les décisions stratégiques s'appuient sur des données fiables. Nous produisons les études, les diagnostics et les analyses qui éclairent vos choix sur les terrains nord-africains — où la nuance contextuelle reste, selon nous, la première forme d'expertise."
        ctaLabel="Discuter d'une mission"
        ctaHref="/#contact"
        imageSrc="/assets/expertise-analyser.jpg"
        imageAlt="Recherche documentaire, cartes et instruments — pilier Analyser"
      />

      <section className="section tone-cream">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Notre approche</p>
            <h2 className="reveal d1">Une méthodologie <em>explicite<br />et défendable.</em></h2>
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
            <p>Nous transformons votre besoin opérationnel en questions de recherche claires, avec hypothèses, indicateurs et critères de validation explicités en amont.</p>
          </div>
          <div className="value-card reveal d2">
            <div className="num">02.</div>
            <h3>Méthodes mixtes</h3>
            <p>Quantitatif et qualitatif sont articulés selon la question, pas par préférence. Triangulation systématique entre sources documentaires, entretiens et observations.</p>
          </div>
          <div className="value-card reveal d3">
            <div className="num">03.</div>
            <h3>Échantillonnage défendable</h3>
            <p>Plans d&apos;échantillonnage justifiés, biais explicités, taille calculée. Pas de chiffres présentés comme représentatifs quand ils ne le sont pas.</p>
          </div>
          <div className="value-card reveal d1">
            <div className="num">04.</div>
            <h3>Lecture des terrains</h3>
            <p>Notre ancrage local nous permet d&apos;accéder à des acteurs et des informations que les bureaux internationaux peinent à obtenir, et de les interpréter correctement.</p>
          </div>
          <div className="value-card reveal d2">
            <div className="num">05.</div>
            <h3>Inclusion intégrée</h3>
            <p>L&apos;analyse genre et inclusion est intégrée à la méthodologie de base — pas une question additionnelle posée à la fin du questionnaire.</p>
          </div>
          <div className="value-card reveal d3">
            <div className="num">06.</div>
            <h3>Livrables exploitables</h3>
            <p>Nos rapports sont écrits pour être lus par des décideurs. Synthèse exécutive, recommandations hiérarchisées, annexes techniques séparées.</p>
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
            Chaque mission donne lieu à des livrables structurés, défendables, directement
            utilisables par vos équipes.
          </p>
        </div>

        <div className="prestations-grid">
          <article className="prestation-card reveal d1">
            <div className="prestation-meta">
              <span><span className="marker"></span>6 à 12 semaines</span>
              <span>FR / AR</span>
            </div>
            <h3>Étude de référence (baseline)</h3>
            <p>Cartographie du contexte avant intervention : acteurs, indicateurs, dynamiques. Sert de point de comparaison pour mesurer l&apos;évolution du programme.</p>
            <ul className="prestation-modules">
              <li>Cadrage et revue documentaire</li>
              <li>Collecte mixte sur le terrain</li>
              <li>Analyse et triangulation</li>
              <li>Rapport de référence + base de données</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>

          <article className="prestation-card reveal d2">
            <div className="prestation-meta">
              <span><span className="marker"></span>4 à 8 semaines</span>
              <span>FR / AR</span>
            </div>
            <h3>Diagnostic sectoriel ou thématique</h3>
            <p>État des lieux structuré sur un secteur, une politique publique ou un enjeu. Identifie leviers, blocages et acteurs clés.</p>
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
            <p>Réponse structurée à une question décisionnelle urgente, basée sur sources documentaires et entretiens ciblés. Format court, exploitable immédiatement.</p>
            <ul className="prestation-modules">
              <li>Cadrage avec le commanditaire</li>
              <li>Synthèse documentaire</li>
              <li>Entretiens-clés</li>
              <li>Note de 15 à 25 pages</li>
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
                Quelques missions <em style={{ fontStyle: "italic", color: "var(--saffron)" }}>analyser.</em>
              </h2>
            </div>
            <Link href="/references" className="all-link reveal d2">Toutes les références →</Link>
          </div>

          <div className="refs-grid">
            <article className="ref-card reveal d1">
              <span className="ref-tag">Analyser</span>
              <div className="ref-client">Union Européenne · Algérie</div>
              <h3>Étude sur l&apos;égalité de genre dans l&apos;accès au marché de l&apos;emploi</h3>
              <p className="ref-result"><strong>Résultat</strong>Base de données utilisée pour orienter la politique de coopération UE-Algérie sur 3 ans.</p>
            </article>
            <article className="ref-card reveal d2">
              <span className="ref-tag">Analyser</span>
              <div className="ref-client">SCAC · Ambassade de France</div>
              <h3>Diagnostic des dispositifs d&apos;appui à la jeunesse universitaire algérienne</h3>
              <p className="ref-result"><strong>Résultat</strong>Cartographie de 18 acteurs et 7 axes prioritaires pour le prochain cycle de coopération.</p>
            </article>
            <article className="ref-card reveal d3">
              <span className="ref-tag">Analyser</span>
              <div className="ref-client">Ministère de la Formation Professionnelle</div>
              <h3>Étude sur l&apos;adéquation formation-emploi dans le secteur des services</h3>
              <p className="ref-result"><strong>Résultat</strong>1 200 entreprises et 800 stagiaires interrogés. Recommandations intégrées au plan sectoriel 2025.</p>
            </article>
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Démarrer une étude"
        title={<>Une question, un terrain,<br /><em>une étude à mener&nbsp;?</em></>}
        lead="Décrivez-nous votre besoin. Nous reviendrons sous 48 heures avec une première lecture et, si pertinent, une proposition de cadrage."
      />
    </>
  );
}
