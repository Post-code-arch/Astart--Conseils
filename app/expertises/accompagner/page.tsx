import Link from "next/link";
import type { Metadata } from "next";
import PillarHero from "@/components/PillarHero";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Accompagner — Astarté Conseils",
};

export default function AccompagnerPage() {
  return (
    <>
      <PillarHero
        tone="accompagner"
        index="02"
        name="Accompagner"
        eyebrow="Pilier 02 · Suivi-Évaluation · Stratégies · Pilotage"
        title={
          <>
            Mesurer ce qui compte,<br />
            <em>ajuster ce qui doit l&apos;être.</em>
          </>
        }
        lead="L'évaluation, la stratégie et l'accompagnement opérationnel doivent produire des décisions — pas seulement des rapports. Nous travaillons aux côtés des équipes de pilotage pour transformer l'analyse en arbitrages concrets, sans dépossession."
        ctaLabel="Discuter d'une mission"
        ctaHref="/#contact"
      />

      <section className="section tone-cream">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Notre approche</p>
            <h2 className="reveal d1">L&apos;évaluation comme <em>outil<br />de pilotage.</em></h2>
          </div>
          <p className="reveal d2">
            Nos évaluations ne sont pas des exercices de redevabilité formelle. Elles sont conçues pour
            produire des décisions — réorientation, mise à l&apos;échelle, arrêt d&apos;une activité qui ne fonctionne pas.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card reveal d1"><div className="num">01.</div><h3>Théorie du changement explicite</h3><p>Avant d&apos;évaluer, nous reconstituons la logique d&apos;intervention initiale. C&apos;est cette théorie que nous testons — pas un cadre d&apos;évaluation générique.</p></div>
          <div className="value-card reveal d2"><div className="num">02.</div><h3>Critères CAD adaptés</h3><p>Pertinence, efficacité, efficience, impact, durabilité — appliqués avec sens, pas comme une checklist. Nous arbitrons selon ce qui est utile au commanditaire.</p></div>
          <div className="value-card reveal d3"><div className="num">03.</div><h3>Évaluation contributive</h3><p>Quand l&apos;attribution stricte est impossible, nous documentons la contribution : chaînes causales plausibles, alternatives explorées, niveau de confiance assumé.</p></div>
          <div className="value-card reveal d1"><div className="num">04.</div><h3>Recommandations actionnables</h3><p>Chaque recommandation est attribuée à un porteur, formulée comme une décision possible, et hiérarchisée selon coût et urgence.</p></div>
          <div className="value-card reveal d2"><div className="num">05.</div><h3>Restitution comme dialogue</h3><p>Les ateliers de restitution sont conçus comme des moments d&apos;appropriation — pas une présentation de rapport. Le commanditaire repart avec des décisions.</p></div>
          <div className="value-card reveal d3"><div className="num">06.</div><h3>Discrétion et indépendance</h3><p>Nous écrivons ce que nous observons, même quand cela nuance la posture initiale. Confidentialité absolue sur les données et les sources.</p></div>
        </div>
      </section>

      <section className="section tone-sand">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Prestations</p>
            <h2 className="reveal d1">Ce que nous <em>livrons<br />concrètement.</em></h2>
          </div>
          <p className="reveal d2">Chaque mission donne lieu à des livrables structurés, défendables, directement utilisables.</p>
        </div>

        <div className="prestations-grid">
          <article className="prestation-card reveal d1">
            <div className="prestation-meta"><span><span className="marker"></span>6 à 10 semaines</span><span>FR / AR</span></div>
            <h3>Évaluation mi-parcours</h3>
            <p>Bilan intermédiaire d&apos;un programme en cours : ce qui fonctionne, ce qui doit être réorienté, et comment ajuster pour la phase finale.</p>
            <ul className="prestation-modules">
              <li>Cadrage et reconstitution de la TdC</li>
              <li>Collecte terrain ciblée</li>
              <li>Restitution participative</li>
              <li>Rapport + plan d&apos;ajustement</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d2">
            <div className="prestation-meta"><span><span className="marker"></span>10 à 16 semaines</span><span>FR / AR</span></div>
            <h3>Évaluation finale</h3>
            <p>Bilan complet en fin de cycle : résultats obtenus, impacts attribuables, durabilité, leçons pour la suite. Livrable de qualité bailleur.</p>
            <ul className="prestation-modules">
              <li>Cadrage et critères d&apos;évaluation</li>
              <li>Collecte mixte (quanti + quali)</li>
              <li>Analyse contributive</li>
              <li>Rapport + synthèse exécutive</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d1">
            <div className="prestation-meta"><span><span className="marker"></span>4 à 8 semaines</span><span>FR</span></div>
            <h3>Stratégie ou note de positionnement</h3>
            <p>Aide à la décision pour cadrer une nouvelle phase, une réorientation ou un positionnement institutionnel. Format synthétique et structuré.</p>
            <ul className="prestation-modules">
              <li>Diagnostic interne</li>
              <li>Analyse de l&apos;environnement</li>
              <li>Scénarios d&apos;options</li>
              <li>Note stratégique 20-40 pages</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d2">
            <div className="prestation-meta"><span><span className="marker"></span>Sur 6 à 24 mois</span><span>FR / AR</span></div>
            <h3>Accompagnement au pilotage</h3>
            <p>Mission longue d&apos;appui à une équipe projet : design d&apos;indicateurs, mise en place du système de suivi, points trimestriels.</p>
            <ul className="prestation-modules">
              <li>Cadre logique &amp; indicateurs</li>
              <li>Outillage de suivi</li>
              <li>Bilans trimestriels</li>
              <li>Transfert de méthode à l&apos;équipe</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="section-inner">
          <div className="refs-head">
            <div>
              <p className="eyebrow reveal"><span className="dot"></span> Références Accompagner</p>
              <h2 className="reveal d1" style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(40px,4.6vw,72px)", lineHeight: 1, letterSpacing: "-0.025em", marginTop: "20px" }}>
                Quelques missions <em style={{ fontStyle: "italic", color: "var(--saffron)" }}>accompagner.</em>
              </h2>
            </div>
            <Link href="/references" className="all-link reveal d2">Toutes les références →</Link>
          </div>
          <div className="refs-grid">
            <article className="ref-card reveal d1">
              <span className="ref-tag">Accompagner</span>
              <div className="ref-client">GIZ · Maroc &amp; Algérie</div>
              <h3>Évaluation mi-parcours d&apos;un programme d&apos;entrepreneuriat féminin régional</h3>
              <p className="ref-result"><strong>Résultat</strong>Recommandations adoptées à 80% par le comité de pilotage. Réorientation budgétaire de 12% en phase 2.</p>
            </article>
            <article className="ref-card reveal d2">
              <span className="ref-tag">Accompagner</span>
              <div className="ref-client">ONU Femmes · Maghreb</div>
              <h3>Stratégie régionale pour l&apos;autonomisation économique des femmes rurales</h3>
              <p className="ref-result"><strong>Résultat</strong>Document stratégique 2024-2027 validé. Trois pays alignés sur un cadre commun de pilotage.</p>
            </article>
            <article className="ref-card reveal d3">
              <span className="ref-tag">Accompagner</span>
              <div className="ref-client">Union Européenne · Tunisie &amp; Algérie</div>
              <h3>Évaluation finale d&apos;un programme régional sur les droits économiques</h3>
              <p className="ref-result"><strong>Résultat</strong>47 recommandations, dont 38 reprises dans la nouvelle phase de coopération.</p>
            </article>
          </div>
        </div>
      </section>

      <Cta
        eyebrow="Démarrer une mission"
        title={<>Un programme à évaluer,<br /><em>une stratégie à cadrer&nbsp;?</em></>}
        lead="Décrivez-nous votre besoin. Nous reviendrons sous 48 heures avec une première lecture."
      />
    </>
  );
}
