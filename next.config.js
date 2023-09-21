/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.yajium.day',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.emoji.yajium.day',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
