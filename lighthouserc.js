module.exports = {
	ci: {
		collect: {
			startServerCommand: "pnpm start",
			url: [
				"http://localhost:3000",
				"http://localhost:3000/blog",
				"http://localhost:3000/blog/posts/life/20231230_reflection",
			],
			numberOfRuns: 1,
			settings: {
				emulatedFormFactor: "desktop",
			},
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
