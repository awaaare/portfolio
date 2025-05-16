/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Отключает оптимизацию изображений (обязательно для static export)
  },
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true 
  },
  webpack: (config: { resolve: { alias: { canvas: boolean; encoding: boolean; }; }; }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  }
}

module.exports = nextConfig