import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealRunner from "@/components/RevealRunner";

// Chrome public (nav + footer + révélations au scroll). N'enveloppe QUE les
// pages publiques — /admin et /studio n'en héritent pas.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
      <RevealRunner />
    </>
  );
}
