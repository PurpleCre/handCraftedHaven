import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["loremflickr.com", "picsum.photos"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.it',
      },
    ],
  },
};

export default nextConfig;
