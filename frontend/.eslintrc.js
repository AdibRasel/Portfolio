module.exports = {
    parser: "@typescript-eslint/parser", // Use TypeScript parser
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true, // Enable JSX parsing
        },
    },
    plugins: ["@typescript-eslint", "react", "react-hooks", "unused-imports"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "react/react-in-jsx-scope": "off", // Disable React in scope for React 17+
        "react/prop-types": "off", // Disable prop-types for TypeScript
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "unused-imports/no-unused-imports": "error", // Remove unused imports
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
    },
    settings: {
        react: {
            version: "detect", // Automatically detect React version
        },
    },
};
