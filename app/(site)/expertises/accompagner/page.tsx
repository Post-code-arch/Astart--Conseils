import Link from "next/link";
import type { Metadata } from "next";
import PillarHero from "@/components/PillarHero";
import Cta from "@/components/Cta";
import { getPillar } from "@/lib/content";

export const metadata: Metadata = {
  title: "Accompagner — Astarté Conseils",
};

export default async function AccompagnerPage() {
  const p = await getPillar("accompagner");
  return (
    <>
      <PillarHero
        tone="accompagner"
        index={p?.index ?? "02"}
        name={p?.name ?? "Accompagner"}
        eyebrow={p?.heroEyebrow ?? ""}
        title={<>{p?.heroTitle}<br /><em>{p?.heroTitleEm}</em></>}
        lead={p?.heroLead ?? ""}
        ctaLabel={p?.heroCtaLabel ?? "Discuter d'une mission"}
        ctaHref="/#contact"
        imageSrc={p?.heroImageUrl ?? "/assets/expertise-accompagner.jpg"}
        imageAlt={p?.name}
      />

      <section className="section tone-cream">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Notre approche</p>
            <h2 className="reveal d1">L&apos;évaluation comme <em>outil<br />de pilotage.</em></h2>
          </div>
          <p className="reveal d2">
            Nos évaluations de projets et d&apos;axes d&apos;intervention ne sont pas que des exercices de
            redevabilité formelle. Elles sont conçues pour soutenir les décisions — réorientation,
            mise à l&apos;échelle, arrêt d&apos;une activité qui ne fonctionne pas.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card reveal d1"><div className="num">01.</div><h3>Approche transformatrice</h3><p>Avant d&apos;évaluer, nous reconstituons la logique d&apos;intervention initiale et vérifions les hypothèses de changement sur lesquelles elle reposait. C&apos;est cette approche qui est au cœur de notre démarche, , pas seulement ses résultats.</p></div>
          <div className="value-card reveal d2"><div className="num">02.</div><h3>Critères définis ensemble</h3><p>Pertinence, efficacité, efficience, impact, durabilité — nous définissons avec vous les critères retenus et leur pondération avant toute collecte. L&apos;évaluation répond à vos questions, pas à un cadre générique.</p></div>
          <div className="value-card reveal d3"><div className="num">03.</div><h3>Recommandations actionnables</h3><p>Chaque recommandation est formulée comme une option concrète, hiérarchisée selon vos priorités et validée avec vos équipes.</p></div>
          <div className="value-card reveal d1"><div className="num">04.</div><h3>Restitution et dialogue continu</h3><p>Les ateliers de restitution sont conçus comme des moments d&apos;appropriation collective et d&apos;échange. Les parties prenantes valident les constats, enrichissent l&apos;analyse et s&apos;approprient les recommandations avant le rapport final.</p></div>
          <div className="value-card reveal d2"><div className="num">05.</div><h3>Transparence, confidentialité et indépendance</h3><p>Nous écrivons ce que nous observons, même quand cela nuance la posture initiale. Confidentialité absolue sur les données et les sources.</p></div>
        </div>
      </section>

      <section className="section tone-sand">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Prestations</p>
            <h2 className="reveal d1">Ce que nous <em>livrons<br />concrètement.</em></h2>
          </div>
          <p className="reveal d2">Chaque mission donne lieu à des livrables structurés, argumentés, directement utilisables.</p>
        </div>

        <div className="prestations-grid">
          <article className="prestation-card reveal d1">
            <h3>Évaluation mi-parcours</h3>
            <p>Bilan intermédiaire d&apos;un programme en cours : ce qui fonctionne, ce qui doit être réorienté, et comment ajuster pour la phase finale.</p>
            <ul className="prestation-modules">
              <li>Cadrage et reconstitution de la de la logique d&apos;intervention</li>
              <li>Collecte terrain ciblée</li>
              <li>Restitution participative</li>
              <li>Rapport + plan d&apos;ajustement</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d2">
            <h3>Évaluation finale</h3>
            <p>Bilan complet en fin de cycle : résultats obtenus, impacts attribuables, durabilité, leçons pour la suite. Livrable documenté, rigoureux et présentable à vos partenaires et financeurs.</p>
            <ul className="prestation-modules">
              <li>Cadrage et critères d&apos;évaluation</li>
              <li>Collecte mixte (quanti + quali)</li>
              <li>Analyse contributive</li>
              <li>Rapport préliminaire pour commentaires</li>
              <li>Rapport + synthèse exécutive</li>
              <li>Présentation de restitution (sur demande)</li>
              <li>Annexes méthodologiques (sur demande)</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d1">
            <h3>Stratégie ou note de positionnement</h3>
            <p>Aide à la décision pour cadrer une nouvelle phase, une réorientation ou un positionnement institutionnel. Format synthétique et structuré.</p>
            <ul className="prestation-modules">
              <li>Revue documentaire et consultations internes</li>
              <li>Analyse de l&apos;environnement</li>
              <li>Scénarios d&apos;options</li>
            </ul>
            <Link href="/#contact" className="prestation-link">Demander un devis <span className="arrow">→</span></Link>
          </article>
          <article className="prestation-card reveal d2">
            <h3>Accompagnement au pilotage</h3>
            <p>Mission longue d&apos;appui à une équipe projet : design d&apos;indicateurs, mise en place du système de suivi, points de suivi périodique.</p>
            <ul className="prestation-modules">
              <li>Cadre logique &amp; indicateurs</li>
              <li>Outillage de suivi</li>
              <li>Points de suivi périodiques</li>
              <li>Conception des outils de collecte</li>
              <li>Appui au reporting partenaires et/ou financeurs (sur demande)</li>
              <li>Transfert de compétences méthodologique à l&apos;équipe</li>
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
              <div className="ref-client">GIZ · Algérie</div>
              <h3>Évaluation mi-parcours d&apos;un programme d&apos;entrepreneuriat des femmesféminin régional</h3>
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
