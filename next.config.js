/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress build-time warnings/errors during production build on Render
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
