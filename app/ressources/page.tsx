import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ressources — Astarté Conseils",
};

const publications = [
  {
    year: "2025",
    title: "L'épreuve du temps long — sur le rythme du conseil",
    body: "Conférence à l'École nationale d'administration de Tunis. Sur la compression du temps dans les missions de conseil et ce qu'elle coûte à la qualité.",
    tag: "Essai",
    reveal: "reveal d1",
  },
  {
    year: "2024",
    title: "Lire un terrain — note méthodologique",
    body: "Pourquoi l'observation directe reste irremplaçable. Sur la discipline du carnet de terrain et le silence comme outil.",
    tag: "Note",
    reveal: "reveal d2",
  },
  {
    year: "2024",
    title: "Évaluation contributive en contexte fragile",
    body: "Quand l'attribution stricte est impossible : documenter la contribution avec rigueur. Cas pratique d'un programme régional.",
    tag: "Méthode",
    reveal: "reveal d3",
  },
  {
    year: "2023",
    title: "Genre et politiques publiques en Algérie — un état des lieux",
    body: "Synthèse de cinq ans de missions sur les dispositifs publics d'inclusion. Tribune publiée dans la revue Maghreb-Machrek.",
    tag: "Tribune",
    reveal: "reveal d1",
  },
  {
    year: "2023",
    title: "Pourquoi nous refusons certaines missions",
    body: "Sur la déontologie du conseil et les raisons qui justifient un refus. Trois cas concrets.",
    tag: "Essai",
    reveal: "reveal d2",
  },
  {
    year: "2022",
    title: "Penser le suivi-évaluation au-delà des indicateurs",
    body: "Critique constructive des cadres logiques. Vers une approche qui articule indicateurs et apprentissage.",
    tag: "Méthode",
    reveal: "reveal d3",
  },
];

export default function RessourcesPage() {
  return (
    <>
      <section className="page-hero gradient-misty">
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

      <section className="section tone-cream">
        <div className="resource-feature">
          <div className="resource-cover reveal d1">
            <div>
              <div className="cover-tag">Édition 01 · 2026</div>
            </div>
            <div className="cover-title">Le terrain<br />comme<br /><em>doctrine.</em></div>
            <div className="cover-meta">
              <span>23 pages · A4</span>
              <span>FR</span>
            </div>
          </div>
          <div className="resource-info reveal d2">
            <p className="eyebrow"><span className="dot"></span> Cahier éditorial</p>
            <h2 style={{ marginTop: "14px" }}>Cahier №01 —<br /><em>Le terrain comme doctrine.</em></h2>
            <p>Un cahier sur la pratique du conseil en Afrique du Nord — méthodes, terrains, études de cas, et la conviction que la finesse contextuelle reste la première forme d&apos;expertise. Étude de cas Sahel logistique, manifeste, méthode en six étapes, essai sur le temps long, conversation avec les fondatrices, galerie de missions.</p>
            <div className="resource-actions">
              <a href="#" className="btn-pill primary">Lire en ligne <span className="arrow">→</span></a>
              <a href="#" className="btn-pill outline-dark">Version Word</a>
            </div>
          </div>
        </div>
      </section>

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
            <a href="#" key={i} className={`pub-row ${pub.reveal}`}>
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

      <section className="contact-strip">
        <div className="contact-strip-inner">
          <p className="eyebrow reveal"><span className="dot"></span> Recevoir nos publications</p>
          <h2 className="reveal d1">Une publication par<br /><em>trimestre, sans fioritures.</em></h2>
          <p className="reveal d2" style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "17px", lineHeight: 1.6, color: "var(--cream-muted)", maxWidth: "560px" }}>
            Notre cahier annuel et nos notes courtes, directement par email.
          </p>
          <a href="mailto:contact@astarte-conseils.com?subject=Abonnement publications" className="btn-pill primary reveal d3" style={{ background: "var(--cream)", color: "var(--aubergine)", boxShadow: "none", marginTop: "8px" }}>
            M&apos;abonner <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
