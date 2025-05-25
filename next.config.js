
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  sassOptions: {
    includePaths: ["src/styles"],
    prependData: `@use "variables" as *;`,
  },
  //github action page要部屬要把註解弄回來
  basePath: '/my-cv',
  assetPrefix: '/my-cv'
};


module.exports = nextConfig;
