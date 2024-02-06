module.exports = {
	ci: {
		collect: {
			startServerCommand: "pnpm build && pnpm start",
			url: ["http://localhost:3000/"],
			numberOfRuns: 1,
			staticDistDir: "./_site",
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
