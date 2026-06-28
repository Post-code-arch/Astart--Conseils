import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import { hasSanity } from "@/sanity/env";

// The embedded Sanity Studio, served at /studio.
export const dynamic = "force-static";
export const metadata = {
  title: "Studio — Astarté Conseils",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  if (!hasSanity) {
    return (
      <div style={{ fontFamily: "system-ui", maxWidth: 640, margin: "120px auto", padding: "0 24px", lineHeight: 1.6 }}>
        <h1 style={{ fontWeight: 600 }}>Studio non configuré</h1>
        <p>
          Ajoutez <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> (et <code>NEXT_PUBLIC_SANITY_DATASET</code>)
          dans les variables d&apos;environnement, puis redéployez pour activer le Studio.
        </p>
      </div>
    );
  }
  return <NextStudio config={config} />;
}
