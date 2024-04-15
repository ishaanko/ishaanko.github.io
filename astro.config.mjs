import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ishaanko.github.io',
  image: {
    remotePatterns: [{ protocol: 'https' }],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'material-theme-palenight',
        wrap: true,
      },
      drafts: true,
    }),
    sitemap(),
    tailwind(),
  ]
});
