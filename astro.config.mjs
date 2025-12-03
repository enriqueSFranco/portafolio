import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://enriqueSFranco.github.io",
  base: "enriqueSF",
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svgo: true,
  },
});
