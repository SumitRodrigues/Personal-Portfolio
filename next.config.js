/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
  buildExcludes: [/middleware-manifest.json$/] // Prevents caching issues causing reload loops
});

const nextConfig = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfig;