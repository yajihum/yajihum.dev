module.exports = {
	ci: {
		collect: {
			// startServerCommand: "pnpm start",
			// url: ["http://localhost:3000/"],
			numberOfRuns: 1,
			staticDistDir: "./build",
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
