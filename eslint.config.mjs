// ESLint Flat Config — aligné sur AGENTS.md et guidelines frontend
// Remarque: nécessite ESLint v9+ et l’installation des plugins listés ci‑dessous.
// Packages suggérés (devDependencies):
//   eslint @eslint/js typescript typescript-eslint eslint-plugin-react eslint-plugin-react-hooks
//   eslint-plugin-react-compiler eslint-plugin-import

// Ce fichier est en ESM (`.mjs`).

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactCompiler from "eslint-plugin-react-compiler";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,
  // Règles TypeScript (générales). Ajustez si vous avez un tsconfig pour type‑checking stricte.
  ...tseslint.configs.recommended,

  {
    name: "base",
    files: ["**/*.{ts,tsx,js,jsx}", "!node_modules/**"],
    ignores: ["dist/**", "build/**", "coverage/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { browser: true, es2021: true },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-compiler": reactCompiler,
      import: importPlugin,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // React 19 / Hooks / Compiler
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-compiler/react-compiler": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Sécurité UI
      "react/no-danger": "error",

      // Import discipline: pas d’import interne hors public-api
      // Autorise uniquement les points d’entrée public-api (features/*/public-api, shared/public-api)
      "import/no-internal-modules": [
        "error",
        {
          allow: [
            "**/features/*/public-api",
            "**/shared/public-api",
            "**/shared/ui/public-api",
          ],
        },
      ],

      // Interdit forwardRef (préférer ref-as-prop)
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["forwardRef"],
              message: "forwardRef est interdit; utilisez ref-as-prop ou une alternative contrôlée.",
            },
          ],
        },
      ],
      "no-restricted-properties": [
        "error",
        {
          object: "React",
          property: "forwardRef",
          message: "forwardRef est interdit; utilisez ref-as-prop.",
        },
      ],
      // Couvre l’appel direct sans import nommé
      "no-restricted-syntax": [
        "error",
        {
          selector: "CallExpression[callee.name='forwardRef']",
          message: "forwardRef est interdit; utilisez ref-as-prop.",
        },
        {
          selector: "CallExpression[callee.property.name='forwardRef']",
          message: "forwardRef est interdit; utilisez ref-as-prop.",
        },
      ],

      // Interdit l’usage de Web Storage (rappel sécurité — tokens)
      "no-restricted-globals": [
        "error",
        { name: "localStorage", message: "Ne pas stocker de tokens/PII dans Web Storage." },
        { name: "sessionStorage", message: "Ne pas stocker de tokens/PII dans Web Storage." },
      ],

      // Qualité et budgets de base (approximations utiles)
      "max-lines-per-function": [
        "warn",
        { max: 150, skipBlankLines: true, skipComments: true },
      ],
      "max-params": ["warn", 7],
      "react/no-array-index-key": "error",
    },
  },

  // Préférer les exports nommés (pas de default), sauf pages d’entrée de routes
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      "import/no-default-export": "error",
    },
  },
  {
    files: ["**/src/app/**/Page.@(ts|tsx|js|jsx)"],
    rules: {
      "import/no-default-export": "off",
    },
  },
];
