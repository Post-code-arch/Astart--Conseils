import Link from "next/link";
import { getSiteSettings } from "@/lib/content";

export default async function Footer() {
  const s = await getSiteSettings();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-wm" role="img" aria-label="Astarté Conseils" />
          <p>
            {s.tagline}.
            <br />
            {s.foundedLine}.
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
            {s.emails.map((email) => (
              <span key={email}>
                {email}
                <br />
              </span>
            ))}
            {s.phone}
            <br />
            {s.address}
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
