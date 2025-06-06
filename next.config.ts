import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fkdt3-1.fna.fbcdn.net",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "png.pngtree.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "thinger.io",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "synoptekmark.b-cdn.net",
        pathname: "/**"
      }
      ]
    }
  };

  export default nextConfig;
