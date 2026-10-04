import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isProduction ? "/Bensouda-portfolio" : "",

  assetPrefix: isProduction ? "/Bensouda-portfolio/" : "",

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["10.0.0.155"],
};

export default nextConfig;