import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pokemontcg.io',
        port: '',
        pathname: '**',
      },
      // As cartas mais novas da API usam este outro servidor de imagens
      {
        protocol: 'https',
        hostname: 'images.scrydex.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  // Necessário para o Tailwind funcionar (veio na criação do projeto)
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
