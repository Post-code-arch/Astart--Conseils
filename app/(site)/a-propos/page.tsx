import Link from "next/link";
import type { Metadata } from "next";
import Cta from "@/components/Cta";

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
            <p className="eyebrow reveal"><span className="dot"></span> Bureau d&apos;études &amp; de Conseils · Fondé en 2021</p>
            <h1 className="page-hero-title reveal d1">
              Un bureau né de la connaissance<br />
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
          <p className="reveal">Il y a, dans le métier du conseil, deux postures qui coexistent rarement. La première consiste à mobiliser une grille — un modèle, une méthode, une matrice — et à demander au réel de s&apos;y conformer. La seconde, consiste à entrer dans un terrain, à observer avant de conclure, à écouter avant d&apos;écrire.</p>

          <p className="reveal d1">C&apos;est cette seconde posture qu&apos;Astarté Conseils s&apos;efforce d&apos;adopter. Non comme un principe affiché, mais comme une exigence méthodologique : la connaissance d&apos;un terrain de l&apos;intérieur ; ses logiques, ses silences, ses résistances, ne se substitue pas à la rigueur analytique, mais elle la conditionne. Aucune méthode, aussi éprouvée soit-elle, ne produit de résultats fiables sans cette familiarité préalable avec le contexte. C&apos;est ce que nous cherchons à mettre en œuvre, quelle que soit la nature du commanditaire — organisation internationale, institution publique ou entreprise privée.</p>

          <div className="pull reveal d2">
            Nous ne vendons pas des livrables. Nous fabriquons des analyses que vous pourrez <em>défendre,</em> ligne après ligne, devant n&apos;importe quelle audience.
          </div>
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
            <p>Experte en études et diagnostics appliqués aux programmes de coopération en Afrique du Nord et au Sahel, Feriel a plus de treize ans d&apos;expérience dans la conception et la conduite d&apos;analyses pour des institutions, des organisations internationales et des structures publiques. Formée en France (Master en développement à l&apos;IEDES – Université Paris 1 Panthéon-Sorbonne), elle pilote des études de référence, des cartographies, des évaluations et des notes d&apos;analyse, ainsi que des formations et outils pédagogiques destinés aux équipes de terrain et aux professionnel·le·s.</p>
          </div>
          <div className="founder reveal d2">
            <div className="founder-portrait">S.H.</div>
            <span className="role">Co-fondatrice · Direction opérationnelle</span>
            <h3>Sanaa Hamadouche</h3>
            <p>Spécialiste de l&apos;appui méthodologique et de l&apos;animation de formations pour des équipes de projet, Sanaa cumule plus de quinze ans d&apos;expérience dans la coopération, la coordination de programmes et la conception de contenus de formation en Afrique du Nord. Formée en France (Masters en relations euro-méditerranéennes à l&apos;Université Paris 8 et en études arabes à l&apos;Université Lyon 2), elle co-construit des études, relit et structure des rapports, et conçoit des ateliers et parcours pédagogiques qui aident les organisations à transformer leurs analyses en pratiques concrètes. Elle pilote également des études et évaluations de terrain, notamment dans des contextes d&apos;accès complexe.</p>
          </div>
        </div>
      </section>

      <section className="section tone-cream">
        <div className="section-head" style={{ gridTemplateColumns: "1fr", maxWidth: "880px" }}>
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Réseau</p>
            <h2 className="reveal d1">Notre réseau d&apos;expertes<br />&amp; <em>d&apos;experts.</em></h2>
          </div>
        </div>

        <div className="manifesto-body">
          <p className="reveal">Astarté Conseils, c&apos;est aussi un réseau de consultant·e·s et de chercheur·se·s avec lesquels nous collaborons régulièrement — selon les besoins spécifiques de chaque mission.</p>
          <p className="reveal d1">Spécialistes sectoriels, expert·e·s thématiques, profils de terrain : nous mobilisons les compétences les plus pertinentes pour chaque contexte, en Algérie et au-delà.</p>
          <p className="reveal d2">Ce réseau n&apos;est pas un annuaire. C&apos;est une communauté de praticien·ne·s que nous connaissons, avec qui nous avons travaillé, et dont nous pouvons garantir la rigueur.</p>
        </div>
      </section>

      <section className="section tone-dark">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Repères chiffrés</p>
            <h2 className="reveal d1">Ce que quinze ans<br /><em>de pratique veulent dire.</em></h2>
          </div>
          <p className="reveal d2">Ces chiffres ne disent pas tout, mais ils indiquent notre engagement. Une volumétrie comparative, la mémoire de plusieurs cycles sociopolitiques, et un certain nombre d&apos;enseignements qui nous ont permis de mieux ajuster notre service.</p>
        </div>

        <div className="stats-strip">
          <div className="stat-block reveal d1"><div className="num count-up">15<em>+</em></div><div className="label">années<br />d&apos;expertise</div></div>
          <div className="stat-block reveal d2"><div className="num count-up">120<em>+</em></div><div className="label">missions<br />conduites</div></div>
          <div className="stat-block reveal d3"><div className="num count-up">9</div><div className="label">pays<br />d&apos;intervention</div></div>
          <div className="stat-block reveal d4"><div className="num count-up">100<em>%</em></div><div className="label">analystes<br />sur le terrain</div></div>
        </div>
      </section>

      <Cta
        eyebrow="Parlons-en"
        title={<>Une rencontre<br /><em>vaut souvent mieux qu&apos;un brief.</em></>}
      />
    </>
  );
}
