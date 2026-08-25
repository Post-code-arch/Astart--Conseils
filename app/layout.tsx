import type { Metadata, Viewport } from "next";
import { Outfit, Spectral } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealRunner from "@/components/RevealRunner";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-spectral",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://astarte-conseils.org"),
  title: "Astarté Conseils — Le terrain comme doctrine",
  description:
    "Cabinet de conseil & d'études — Maghreb · Sahel. Analyser, accompagner, développer.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2A1418",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${spectral.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
        <RevealRunner />
      </body>
    </html>
  );
}
