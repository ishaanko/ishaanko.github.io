import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import yaml from "@rollup/plugin-yaml";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://ishaanko.github.io",
  vite: {
    plugins: [yaml()]
  },
  integrations: [
    expressiveCode({
      themes: ["catppuccin-frappe", "catppuccin-latte"],
      collapsibleSections: true,
      lineNumbers: true,
      defaultProps: {
        showLineNumbers: true,
        wrap: true,
      },
    }),
    mdx(),
    sitemap(),
    UnoCSS({
      injectReset: "@unocss/reset/tailwind.css"
    }),
  ],
  output: "static",
});
