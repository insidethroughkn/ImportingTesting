module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	transformIgnorePatterns: [
		"/node_modules/(?!@fluentui)/"
	],
	moduleNameMapper: {
		// Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
		"uuid": require.resolve('uuid'),
	},
};
