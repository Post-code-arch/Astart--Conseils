import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-wm">Astarté</div>
          <p>
            Cabinet de conseil &amp; d&apos;études — Maghreb · Sahel.
            <br />
            Fondé en 2010 à Alger.
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
            Alger · Tunis · Casablanca
            <br />
            contact@astarte-conseils.com
            <br />
            +213 21 00 00 00
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
