/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: "build",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.site.yajihum.dev",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.emoji.yajihum.dev",
				port: "",
				pathname: "/**",
			},
		],
	},
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
