import Hero from "@/components/Hero";
import MethodSection from "@/components/MethodSection";

export default function Home() {
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

      <MethodSection />

      <section className="proof">
        <div className="proof-stats">
          <div className="proof-stat">
            <div className="num count-up">15<em>+</em></div>
            <div className="label">années<br />d&apos;expertise</div>
          </div>
          <div className="proof-stat">
            <div className="num count-up">120<em>+</em></div>
            <div className="label">missions<br />conduites</div>
          </div>
          <div className="proof-stat">
            <div className="num count-up">9</div>
            <div className="label">pays<br />d&apos;intervention</div>
          </div>
          <div className="proof-stat">
            <div className="num count-up">100<em>%</em></div>
            <div className="label">analystes<br />sur le terrain</div>
          </div>
        </div>

        <div className="proof-clients">
          <p className="eyebrow"><span className="dot"></span> Partenaires &amp; bailleurs</p>
          <div className="clients-grid">
            <div className="client-pill">Union Européenne</div>
            <div className="client-pill">GIZ</div>
            <div className="client-pill">Oxfam</div>
            <div className="client-pill">SCAC</div>
            <div className="client-pill">ONU Femmes</div>
            <div className="client-pill">FES</div>
            <div className="client-pill">Banque Mondiale</div>
            <div className="client-pill">Ministère de la Formation</div>
          </div>
        </div>
      </section>

      <section className="differentiators">
        <div className="diff-head">
          <p className="eyebrow"><span className="dot"></span> Pourquoi Astarté</p>
          <h2 className="diff-title">Ce que les grands bureaux<br /><em>ne peuvent pas vous donner.</em></h2>
        </div>

        <div className="diff-list">
          <div className="diff-item">
            <div className="diff-num">i.</div>
            <div className="diff-body">
              <h4>Ancrage local irremplaçable</h4>
              <p>Réseaux locaux, accès aux acteurs, compréhension fine des dynamiques institutionnelles, sociales et culturelles algériennes et nord-africaines.</p>
            </div>
          </div>
          <div className="diff-item">
            <div className="diff-num">ii.</div>
            <div className="diff-body">
              <h4>Rigueur méthodologique documentée</h4>
              <p>Chaque mission donne lieu à un protocole explicite. Nos recommandations sont fondées sur des données — pas des intuitions.</p>
            </div>
          </div>
          <div className="diff-item">
            <div className="diff-num">iii.</div>
            <div className="diff-body">
              <h4>Inclusion intégrée, pas ajoutée</h4>
              <p>L&apos;analyse des dynamiques de genre et des populations marginalisées fait partie de notre méthodologie de base — pas une option supplémentaire.</p>
            </div>
          </div>
          <div className="diff-item">
            <div className="diff-num">iv.</div>
            <div className="diff-body">
              <h4>Reconnue par les bailleurs</h4>
              <p>UE, GIZ, Oxfam, SCAC — des clients internationaux exigeants qui reviennent. Une spécialisation documentée par quinze ans de missions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="cta-inner">
          <p className="eyebrow"><span className="dot"></span> Démarrer une mission</p>
          <h2 className="cta-title">Votre projet mérite<br /><em>une conversation.</em></h2>
          <p className="cta-lead">
            Décrivez-nous votre besoin — étude, évaluation, formation ou accompagnement.
            Nous reviendrons vers vous sous 48 heures avec une première lecture et,
            si pertinent, une proposition de cadrage.
          </p>
          <div className="cta-actions">
            <a href="mailto:contact@astarte-conseils.com" className="cta-btn primary">
              contact@astarte-conseils.com
              <span>→</span>
            </a>
            <a href="tel:+213210000000" className="cta-btn ghost">
              +213 21 00 00 00
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
