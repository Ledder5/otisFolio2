import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // site: '#',
  // base: '/',
  
  integrations: [mdx()], 

  vite: {
    plugins: [
      tailwindcss(),
      visualizer({
        filename: 'bundle-stats.html',
        template: 'treemap'
      })
    ]
  },

  adapter: cloudflare(),

  output: 'server' // or 'static'
});