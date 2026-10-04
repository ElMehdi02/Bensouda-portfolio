import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Bensouda-portfolio",
  assetPrefix: "/Bensouda-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;