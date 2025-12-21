const { withContentlayer } = require('next-contentlayer');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.site.yajihum.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.emoji.yajihum.dev',
        port: '',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 86400,
  },
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  serverExternalPackages: [],
};

module.exports = withContentlayer(withBundleAnalyzer(nextConfig));
