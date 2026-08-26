import Link from "next/link";
import { adminGroups } from "@/lib/adminFields";
import { hasWriteAccess } from "@/lib/sanityWriteClient";

export const dynamic = "force-dynamic";

export default function AdminHome() {
  return (
    <>
      <h1>Que souhaitez-vous modifier&nbsp;?</h1>
      <p className="adm-sub">Choisissez une section. Chaque enregistrement est publié directement sur le site.</p>
      {!hasWriteAccess && (
        <p className="adm-err" style={{ marginBottom: 24 }}>
          ⚠️ Sanity n&apos;est pas encore configuré (variables d&apos;environnement manquantes). L&apos;édition sera
          disponible une fois <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> et <code>SANITY_WRITE_TOKEN</code> renseignés.
        </p>
      )}
      <div className="adm-grid">
        {adminGroups.map((g) => (
          <Link key={g.slug} href={`/admin/${g.slug}`} className="adm-card">
            <h2>{g.label}</h2>
            <p>{g.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
