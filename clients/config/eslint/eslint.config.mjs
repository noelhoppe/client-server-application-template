// @ts-check

import unusedImports from "eslint-plugin-unused-imports";
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from "eslint-config-prettier";

const baseEslintConfig = defineConfig({
    files: ['**/*.{js,ts,jsx,tsx}'],
    extends: [
        js.configs.recommended,
        tseslint.configs.strictTypeChecked,
        tseslint.configs.stylisticTypeChecked,
        eslintConfigPrettier
    ],
    plugins: {
        "unused-imports": unusedImports,
    },
    rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "error",
            {
                "vars": "all",
                "args": "after-used",
            },
        ]
    },
    languageOptions: {
      parserOptions: {
          projectService: true
      }
    }
});
export default baseEslintConfig;
