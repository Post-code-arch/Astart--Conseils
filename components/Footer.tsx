import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-wm" role="img" aria-label="Astarté Conseils" />
          <p>
            Bureau d&apos;études &amp; de Conseils — Algérie · Afrique du Nord · Sahel.
            <br />
            Fondé en 2021 à Alger.
          </p>
        </div>
        <div className="footer-links">
          <h6>Expertises</h6>
          <ul>
            <li>
              <Link href="/expertises">Toutes les expertises</Link>
            </li>
            <li>
              <Link href="/expertises/analyser">Analyser</Link>
            </li>
            <li>
              <Link href="/expertises/accompagner">Accompagner</Link>
            </li>
            <li>
              <Link href="/expertises/developper">Développer</Link>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h6>Ressources</h6>
          <ul>
            <li>
              <Link href="/references">Références</Link>
            </li>
            <li>
              <Link href="/a-propos">À propos</Link>
            </li>
            <li>
              <Link href="/ressources">Cahier &amp; publications</Link>
            </li>
            <li>
              <Link href="/formations">Formations</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h6>Contact</h6>
          <p>
            contact@astarte-conseils.com
            <br />
            kessai@astarte-conseils.org
            <br />
            hamadouche@astarte-conseils.org
            <br />
            +213 553 47 45 97
            <br />
            25, Rue Rabah Bourbia, El Biar (près du balcon Saint Raphaël), Alger, Algérie
          </p>
        </div>
      </div>
      <div className="footer-bar">
        <span>© Astarté Conseils 2026</span>
        <span>astarte-conseils.com</span>
      </div>
    </footer>
  );
}
