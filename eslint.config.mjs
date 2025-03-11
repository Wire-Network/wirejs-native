import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";


// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,ts}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
// ];

export default [
  {
    files: ["**/*.ts", "**/*.js"],
    ignores: ["dist/**/*", "eslint.config.js"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
      },
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: "warn",
      reportUnusedInlineConfigs: "off",
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-param-reassign": "warn",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "block-like", next: "*" },
        { blankLine: "always", prev: "*", next: "block-like" },
      ],
    },
  },
];
