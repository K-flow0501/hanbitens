import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hanbitens",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
