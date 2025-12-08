import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://enriqueSFranco.github.io/portafolio",
  base: "/portafolio/",

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    svgo: true,
  },

  integrations: [mdx()],
});