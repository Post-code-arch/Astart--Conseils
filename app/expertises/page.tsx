import type { Metadata } from "next";
import { expertises, expertisesParent } from "@/lib/expertises";
import ExpertisePanels from "@/components/ExpertisePanels";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Expertises — Astarté Conseils",
  description: expertisesParent.intro,
};

export default function ExpertisesPage() {
  return (
    <>
      <ExpertisePanels items={expertises} />

      <Cta
        eyebrow="Une question, un projet"
        title={<>Pas sûr de la bonne porte&nbsp;?<br /><em>Parlons-en.</em></>}
        lead="Décrivez-nous votre besoin — nous vous orienterons vers le pôle le plus pertinent."
      />
    </>
  );
}
