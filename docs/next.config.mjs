import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  allowedDevOrigins: ["http://localhost:3000", "192.168.236.26:3000"],
};

export default withMDX(config);
