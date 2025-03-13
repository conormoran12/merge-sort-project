import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.browser,
    },
    rules: {
      'no-undef': 'error', // Catch undeclared variables like `n`
      'no-unused-vars': 'warn', // Warn about unused variables
    },
  },
  pluginJs.configs.recommended,
];