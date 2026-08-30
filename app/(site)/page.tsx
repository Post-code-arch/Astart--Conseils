import Hero from "@/components/Hero";
import MethodSection from "@/components/MethodSection";
import Cta from "@/components/Cta";
import { getPartners, getPillars } from "@/lib/content";

export default async function Home() {
  const [partners, pillars] = await Promise.all([getPartners(), getPillars()]);
  return (
    <>
      <Hero />

      <section className="marquee">
        <div className="marquee-track">
          <span>Analyser</span><i></i>
          <span>Accompagner</span><i></i>
          <span>Développer</span><i></i>
          <span>Analyser</span><i></i>
          <span>Accompagner</span><i></i>
          <span>Développer</span><i></i>
          <span>Analyser</span><i></i>
          <span>Accompagner</span><i></i>
          <span>Développer</span><i></i>
        </div>
      </section>

      <MethodSection pillars={pillars} />

      <section className="proof">
        <div className="proof-stats">
          <div className="proof-stat">
            <div className="num count-up">15<em>+</em></div>
            <div className="label">années d&apos;expertise<br />des fondatrices</div>
          </div>
          <div className="proof-stat">
            <div className="num count-up">19<em>+</em></div>
            <div className="label">missions<br />conduites</div>
          </div>
          <div className="proof-stat">
            <div className="num count-up">8</div>
            <div className="label">pays<br />d&apos;intervention</div>
          </div>
          <div className="proof-stat">
            <div className="num count-up">100<em>%</em></div>
            <div className="label">analyses à partir<br />du terrain</div>
          </div>
        </div>

        <div className="proof-clients">
          <p className="eyebrow"><span className="dot"></span> Partenaires</p>
          <div className="clients-grid">
            {partners.map((p) => (
              <div key={p.name} className="client-pill">{p.name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="differentiators">
        <div className="diff-head">
          <p className="eyebrow"><span className="dot"></span> Pourquoi Astarté</p>
          <h2 className="diff-title">Ce que seul un bureau ancré<br />localement <em>peut vous donner.</em></h2>
        </div>

        <div className="diff-list">
          <div className="diff-item">
            <div className="diff-num">i.</div>
            <div className="diff-body">
              <h4>Ancrage local irremplaçable</h4>
              <p>Réseaux locaux, accès aux acteurs clés, compréhension fine des dynamiques institutionnelles, sociales et culturelles.</p>
            </div>
          </div>
          <div className="diff-item">
            <div className="diff-num">ii.</div>
            <div className="diff-body">
              <h4>Rigueur méthodologique documentée</h4>
              <p>Chaque mission donne lieu à un protocole explicite. Nos recommandations sont fondées sur des données concrètes, de l&apos;analyse et du savoir des experts, des équipes et des bénéficiaires. — avec une transparence totale sur nos sources et nos limites.</p>
            </div>
          </div>
          <div className="diff-item">
            <div className="diff-num">iii.</div>
            <div className="diff-body">
              <h4>Inclusion intégrée, pas ajoutée</h4>
              <p>Prendre en compte la diversité des profils, des usages et des réalités n&apos;est pas un supplément d&apos;âme — c&apos;est ce qui rend une analyse juste et une recommandation applicable. Nous travaillons avec vos équipes, pas à leur place.</p>
            </div>
          </div>
        </div>
      </section>

      <Cta
        id="contact"
        eyebrow="Démarrer une mission"
        title={<>Votre projet mérite<br /><em>une conversation.</em></>}
        lead="Décrivez-nous votre besoin — étude, diagnostic, évaluation, formation ou accompagnement. Nous reviendrons vers vous avec une première lecture et, si pertinent, une proposition de cadrage."
        phone="+213 553 47 45 97"
      />
    </>
  );
}
