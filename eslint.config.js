import js from "@eslint/js"
import prettier from "eslint-config-prettier/flat"
import oxlint from "eslint-plugin-oxlint"
import pluginReact from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import storybook from "eslint-plugin-storybook"
import { defineConfig } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    ignores: ["!.storybook"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  reactRefresh.configs.recommended,
  reactHooks.configs["recommended-latest"],
  prettier,
  storybook.configs["flat/recommended"],
  ...oxlint.configs["flat/recommended"],
])
