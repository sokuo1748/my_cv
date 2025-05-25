/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: ["./src/styles"],
    additionalData: `@use "variables" as *;`,
  },
  basePath: "/my_cv",
  assetPrefix: "/my_cv",
};

module.exports = nextConfig;
