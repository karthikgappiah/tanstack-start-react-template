/**
 * PATH: $REPO/vite.config.ts
 */

import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    tsConfigPaths(),
    tanstackStart(),
    // WARNING: tanstackStart must precede viteReact in plugins.
    viteReact(),
    tailwindcss(),
  ],
});
