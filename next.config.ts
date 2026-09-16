import type { NextConfig } from "next";

const supabaseHostname = process.env.SUPABASE_URL
  ? new URL(process.env.SUPABASE_URL).hostname
  : undefined;

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
        destination: "/casos-de-exito",
        statusCode: 301,
      },
      {
        source: "/trabajos",
        destination: "/casos-de-exito",
        statusCode: 301,
      },
      {
        source: "/trabajos/:slug",
        destination: "/casos-de-exito/:slug",
        statusCode: 301,
      },
      {
        source: "/nuestros-clientes",
        destination: "/clientes",
        statusCode: 301,
      },
      {
        source: "/servicios",
        destination: "/productos",
        statusCode: 301,
      },
      {
        source: "/soluciones",
        destination: "/productos",
        statusCode: 301,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 84],
    remotePatterns: supabaseHostname
      ? [
          {
            protocol: "https",
            hostname: supabaseHostname,
            pathname: "/storage/v1/object/public/**",
          },
        ]
      : [],
  },
};

export default nextConfig;
