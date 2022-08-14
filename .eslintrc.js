module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
		React: "writable",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 2021,
		sourceType: "module",
		project: "./tsconfig.json",
	},
	plugins: ["@typescript-eslint", "react"],
	rules: {
		// disable the rule for all files
		"@typescript-eslint/explicit-function-return-type": "off",
	},
	overrides: [
		{
			// enable the rule specifically for TypeScript files
			files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": ["error"],
			},
		},
	],
	settings: { react: { version: "detect" } },
};
