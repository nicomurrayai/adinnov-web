import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      {
        source: "/producto/:slug",
        destination: "/productos/:slug",
        permanent: true,
      },
      {
        source: "/nuestros-trabajos",
        destination: "/trabajos",
        permanent: true,
      },
      {
        source: "/nuestros-clientes",
        destination: "/clientes",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
