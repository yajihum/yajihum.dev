module.exports = {
	ci: {
		collect: {
			startServerCommand: "pnpm start",
			url: [
				"http://localhost/",
				"http://localhost/blog/",
				"http://localhost/blog/posts/life/20231230_reflection",
			],
			numberOfRuns: 1,
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
