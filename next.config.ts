import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sanity Studio ships untranspiled ESM; let Next compile it.
  transpilePackages: ["sanity", "@sanity/vision"],
  // Autorise les images hébergées sur Sanity (uploads via l'admin).
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async redirects() {
    // statusCode 301 (literal) rather than `permanent: true` which would emit 308.
    return [
      { source: "/analyser", destination: "/expertises/analyser", statusCode: 301 },
      { source: "/accompagner", destination: "/expertises/accompagner", statusCode: 301 },
      { source: "/developper", destination: "/expertises/developper", statusCode: 301 },
    ];
  },
};

export default nextConfig;
