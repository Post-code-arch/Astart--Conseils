import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Astarté Conseils",
};

export default function AProposPage() {
  return (
    <>
      <section className="page-hero gradient-misty">
        <div className="page-hero-grain" aria-hidden="true"></div>
        <div className="page-hero-inner">
          <div className="page-hero-text">
            <p className="eyebrow reveal"><span className="dot"></span> Cabinet de conseil &amp; études · Fondé en 2010</p>
            <h1 className="page-hero-title reveal d1">
              Un cabinet né de la connaissance<br />
              <em>du terrain.</em>
            </h1>
            <div className="page-hero-bottom">
              <p className="page-hero-lead reveal d2">
                Astarté Conseils a été fondé par Feriel Kessai et Sanaa Hamadouche, deux praticiennes du
                conseil en sciences sociales appliquées. Nous sommes nées sur ce terrain — nous y avons
                grandi, étudié, travaillé.
              </p>
              <Link href="/#contact" className="btn-pill primary reveal d3">Parlons-en <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section tone-cream">
        <div className="section-head" style={{ gridTemplateColumns: "1fr", maxWidth: "880px" }}>
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Manifeste</p>
            <h2 className="reveal d1">Une certaine idée<br />du <em>conseil.</em></h2>
          </div>
        </div>

        <div className="manifesto-body">
          <p className="reveal">Il y a, dans le métier du conseil, deux postures qui ne se rejoignent jamais tout à fait. La première consiste à apporter une grille — un modèle, une méthode, une matrice — et à demander au réel de s&apos;y plier. La seconde, plus rare, consiste à entrer dans un terrain, à se taire d&apos;abord, à écouter longtemps, et à n&apos;écrire qu&apos;ensuite.</p>

          <p className="reveal d1">Astarté Conseils appartient à la seconde école. Non par posture, ni par effet de style, mais parce que notre histoire ne nous laissait pas d&apos;autre choix : nous sommes nées sur ce terrain, nous y avons grandi, nous y avons travaillé, et nous savons que rien — ni le diplôme le plus prestigieux, ni la méthode la plus éprouvée — ne remplace cette familiarité-là.</p>

          <div className="pull reveal d2">
            Nous ne vendons pas des livrables. Nous fabriquons des analyses que vous pourrez <em>défendre,</em> ligne après ligne, devant n&apos;importe quelle audience.
          </div>

          <p className="reveal d1">Vous trouverez ici nos convictions, notre méthode, et nos trois piliers d&apos;intervention — analyser, accompagner, développer. Vous trouverez aussi nos doutes, parce qu&apos;aucune mission sérieuse ne se mène sans eux.</p>

          <p className="reveal d2">Lisez-le comme un guide, un témoignage, ou une invitation à conversation. Nous serons toujours plus utiles si nous nous parlons tôt.</p>
        </div>
      </section>

      <section className="section tone-sand">
        <div className="section-head" style={{ gridTemplateColumns: "1fr", maxWidth: "880px" }}>
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Fondatrices</p>
            <h2 className="reveal d1">Feriel Kessai<br />&amp; <em>Sanaa Hamadouche.</em></h2>
          </div>
        </div>

        <div className="team-grid">
          <div className="founder reveal d1">
            <div className="founder-portrait">F.K.</div>
            <span className="role">Co-fondatrice · Direction études</span>
            <h3>Feriel Kessai</h3>
            <p>Sociologue, docteure en sciences sociales (EHESS, Paris). Quinze années de pratique du conseil en Afrique du Nord. Expertise sur les politiques publiques, les questions de genre et l&apos;évaluation. Enseigne à l&apos;Université d&apos;Alger et publie régulièrement.</p>
          </div>
          <div className="founder reveal d2">
            <div className="founder-portrait">S.H.</div>
            <span className="role">Co-fondatrice · Direction opérationnelle</span>
            <h3>Sanaa Hamadouche</h3>
            <p>Économiste, master en économie du développement (Paris-Dauphine). Dix-huit années d&apos;expérience dans le conseil et l&apos;évaluation de programmes. Pilote les missions stratégiques et les programmes de formation. Membre du réseau régional d&apos;évaluation EvalMaghreb.</p>
          </div>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Repères chiffrés</p>
            <h2 className="reveal d1">Ce que quinze ans<br /><em>de pratique veulent dire.</em></h2>
          </div>
          <p className="reveal d2">Ces chiffres ne disent pas tout, mais ils disent quelque chose. Une volumétrie qui permet la comparaison, plusieurs cycles politiques traversés, et un certain nombre d&apos;erreurs dont nous avons appris.</p>
        </div>

        <div className="stats-strip">
          <div className="stat-block reveal d1"><div className="num count-up">15<em>+</em></div><div className="label">années<br />d&apos;expertise</div></div>
          <div className="stat-block reveal d2"><div className="num count-up">120<em>+</em></div><div className="label">missions<br />conduites</div></div>
          <div className="stat-block reveal d3"><div className="num count-up">9</div><div className="label">pays<br />d&apos;intervention</div></div>
          <div className="stat-block reveal d4"><div className="num count-up">100<em>%</em></div><div className="label">analystes<br />sur le terrain</div></div>
        </div>
      </section>

      <section className="contact-strip">
        <div className="contact-strip-inner">
          <p className="eyebrow reveal"><span className="dot"></span> Parlons-en</p>
          <h2 className="reveal d1">Une rencontre<br /><em>vaut souvent mieux qu&apos;un brief.</em></h2>
          <a href="mailto:contact@astarte-conseils.com" className="btn-pill primary reveal d2" style={{ background: "var(--cream)", color: "var(--aubergine)", boxShadow: "none", marginTop: "8px" }}>
            contact@astarte-conseils.com <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
