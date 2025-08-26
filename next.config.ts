import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
        // Disables type checking during the production build.
        // Use with caution, as it can lead to runtime errors if type issues exist.
        ignoreBuildErrors: true,
  },
};

export default nextConfig;
