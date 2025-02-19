import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["loremflickr.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.it',
      },
    ],
  },
};

export default nextConfig;
