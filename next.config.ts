import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/components",
        statusCode: 302,
      },
    ];
  },
};

export default nextConfig;