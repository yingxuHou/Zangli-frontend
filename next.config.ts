import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure API proxy for Zeabur deployment
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://astro-zangli-ai-backend.zeabur.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
