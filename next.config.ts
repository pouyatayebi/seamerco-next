import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "130.185.120.227",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "seamerco-group.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;