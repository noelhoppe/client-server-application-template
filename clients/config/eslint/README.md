# Reusable ESLint configuration for TypeScript based clients
This exports a reusable ESLint configuration for TypeScript-based clients.

## Base configuration
Currently, the following `eslint.config.mjs` file serves as the base linting configuration for TypeScript based clients.
It combines the following configurations:
- [`@eslint/js` recommended](https://eslint.org/docs/latest/use/configure/configuration-files#using-configs-from-shareable-configs)
- [`typescript-eslint` strictTypeChecked](https://typescript-eslint.io/users/configs/#strict-type-checked)
- [`typescript-eslint` stylisticTypeChecked](https://typescript-eslint.io/users/configs/#stylistic-type-checked)
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)

```js
import unusedImports from "eslint-plugin-unused-imports";
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

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
```

This shared config is intended to be used by all TypeScript-based client modules.
It enforces type-aware linting, stylistic TypeScript rules, and unused import cleanup across JavaScript, TypeScript, JSX, and TSX files.

> You can inspect the exported configuration by importing `@config/eslint` from a client module or by reading `eslint.config.mjs` directly.
