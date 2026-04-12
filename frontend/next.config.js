/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip lint/type errors during production build on Render
  eslint:     { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
