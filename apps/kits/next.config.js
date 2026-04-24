/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: ['@vervemind/ui'], // Reserved for future shared library
};

module.exports = nextConfig;
