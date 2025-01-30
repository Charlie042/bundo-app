import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental:{
    turbo:{}
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tse4.mm.bing.net",
      },
      {
        protocol: "https",
        hostname: "tse3.mm.bing.net",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
