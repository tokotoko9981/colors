/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/colors",
    assetPrefix: "/colors",
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_BASE_PATH: "/colors",
      },
  };
  
  module.exports = nextConfig;
