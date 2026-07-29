import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/producto/:slug",
        destination: "/productos/:slug",
        statusCode: 301,
      },
      {
        source: "/nuestros-trabajos",
        destination: "/trabajos",
        statusCode: 301,
      },
      {
        source: "/nuestros-clientes",
        destination: "/clientes",
        statusCode: 301,
      },
      {
        source: "/servicios",
        destination: "/soluciones",
        statusCode: 301,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 84],
  },
};

export default nextConfig;
