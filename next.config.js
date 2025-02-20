/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/colors",
    assetPrefix: "/colors/",
    trailingSlash: true,
  };
  
  module.exports = nextConfig;
