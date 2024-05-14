module.exports = {
	preset: 'ts-jest',
	// collectCoverage: true,
	// collectCoverageFrom: ['src/**/*.{js,jsx}'],
	// coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	transformIgnorePatterns: [
		"/node_modules/(?!@elixir)",
		"/node_modules/(?!@fluentui)",
		"/node_modules/(?!@azure)",
		//'<rootDir>/node_modules/(?!@azure/msal-react)',
		//"node_modules/(?!(@azure/msal-react))/"
		//"!node_modules/"
	  ],
	transform: {
		'^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
		'^.+\\.(ts|tsx)?$': 'ts-jest'
	},
	//transform: {},
	moduleNameMapper: {
		// Force module uuid to resolve with the CJS entry point, because Jest does not support package.json.exports. See https://github.com/uuidjs/uuid/issues/451
		"uuid": require.resolve('uuid'),
		},
	//extensionsToTreatAsEsm: [".js"]
	//preset: 'ts-jest',
	//transform: {
	// 	'^.+\\.(ts|tsx)?$': 'ts-jest',
	//	'^.+\\.(js|jsx)$': 'babel-jest',
	//}
};
