import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  allowedDevOrigins: ["http://localhost:3000", "192.168.236.26:3000"],
  webpack: (config, { isServer }) => {
    // Handle Shiki bundling issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }

    return config;
  },
};

export default withMDX(config);
