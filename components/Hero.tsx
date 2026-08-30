import { getHomePage } from "@/lib/content";

// Voile de lisibilité identique à la règle CSS `.hero` — appliqué uniquement
// quand une image est fournie par Sanity (sinon l'image CSS par défaut reste).
const HERO_SCRIM =
  "linear-gradient(180deg, rgba(15,16,20,0.55) 0%, rgba(15,16,20,0.18) 38%, rgba(15,16,20,0.82) 100%)";

export default async function Hero() {
  const h = await getHomePage();
  const style = h.heroImageUrl
    ? { backgroundImage: `${HERO_SCRIM}, url(${h.heroImageUrl})` }
    : undefined;

  return (
    <section className="hero" style={style}>
      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">
          <span className="dot"></span> {h.heroEyebrow}
        </p>

        <div className="hero-foot">
          <h1 className="hero-title">
            {h.heroTitle} <em>{h.heroTitleEm}</em>
          </h1>
          <p className="hero-lead">{h.heroLead}</p>
        </div>
      </div>
    </section>
  );
}
