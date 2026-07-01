/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['localhost', 'api.example.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
