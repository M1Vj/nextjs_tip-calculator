import { defineConfig } from "vitest/config";

// Hermetic CI config for fleet merge-gate:
// - jsdom + globals so existing **/*.test.tsx run without extra imports
// - css.postcss.plugins=[] bypasses repo postcss.config.mjs string-plugin form
//   which Vite cannot parse ("Invalid PostCSS Plugin found at: plugins[0]")
// - esbuild.jsx=automatic handles tsconfig jsx:preserve without React import
// - bail:1 keeps fail-fast guards (non-zero exit on first failure)
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/*.test.{ts,tsx}"],
    bail: 1,
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  esbuild: {
    jsx: "automatic",
  },
});