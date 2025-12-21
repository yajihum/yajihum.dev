const { withContentlayer } = require('next-contentlayer');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
  async headers() {
    return [
      {
        source: '/photos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = withContentlayer(withBundleAnalyzer(nextConfig));
