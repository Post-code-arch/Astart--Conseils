import Link from "next/link";
import type { Metadata } from "next";
import ReferencesFilter from "@/components/ReferencesFilter";
import Cta from "@/components/Cta";
import { getReferences } from "@/lib/content";

export const metadata: Metadata = {
  title: "Références — Astarté Conseils",
};

export default async function ReferencesPage() {
  const references = await getReferences();
  return (
    <>
      <section className="page-hero hero-references">
        <div className="page-hero-grain" aria-hidden="true"></div>
        <div className="page-hero-inner">
          <div className="page-hero-text">
            <p className="eyebrow reveal"><span className="dot"></span> 120+ missions · 15 ans · 9 pays</p>
            <h1 className="page-hero-title reveal d1">
              Ce que nous avons fait<br />
              <em>pour d&apos;autres.</em>
            </h1>
            <div className="page-hero-bottom">
              <p className="page-hero-lead reveal d2">
                Un panorama partiel — quelques missions emblématiques pour des institutions, bailleurs et
                organisations partenaires. Chaque mention résume un résultat utilisable.
              </p>
              <Link href="/#contact" className="btn-pill primary reveal d3">
                Discuter d&apos;une mission
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section tone-cream">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Filtrer par pilier</p>
            <h2 className="reveal d1">Missions <em>par pôle.</em></h2>
          </div>
          <p className="reveal d2">Cliquez un pilier pour filtrer les missions correspondantes.</p>
        </div>

        <ReferencesFilter items={references} />
      </section>

      <section className="section tone-dark">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal"><span className="dot"></span> Partenaires &amp; bailleurs</p>
            <h2 className="reveal d1">Avec qui nous <em>travaillons.</em></h2>
          </div>
          <p className="reveal d2">Institutions, organisations internationales, ministères et fondations qui nous renouvellent leur confiance.</p>
        </div>

        <div className="clients-grid-page">
          <div className="client-card reveal d1" style={{ background: "rgba(248,246,234,0.04)", borderColor: "var(--line-dark)" }}><h4 style={{ color: "var(--cream)" }}>Délégation de l&apos;Union Européenne</h4><p style={{ color: "var(--cream-muted)" }}>Coopération régionale</p></div>
          <div className="client-card reveal d1" style={{ background: "rgba(248,246,234,0.04)", borderColor: "var(--line-dark)" }}><h4 style={{ color: "var(--cream)" }}>GIZ</h4><p style={{ color: "var(--cream-muted)" }}>Coopération allemande</p></div>
          <div className="client-card reveal d2" style={{ background: "rgba(248,246,234,0.04)", borderColor: "var(--line-dark)" }}><h4 style={{ color: "var(--cream)" }}>SCAC</h4><p style={{ color: "var(--cream-muted)" }}>Ambassade de France</p></div>
          <div className="client-card reveal d2" style={{ background: "rgba(248,246,234,0.04)", borderColor: "var(--line-dark)" }}><h4 style={{ color: "var(--cream)" }}>FES</h4><p style={{ color: "var(--cream-muted)" }}>Friedrich-Ebert-Stiftung</p></div>
        </div>
      </section>

      <Cta
        eyebrow="Démarrer une mission"
        title={<>Votre projet rejoint<br /><em>nos références&nbsp;?</em></>}
      />
    </>
  );
}
