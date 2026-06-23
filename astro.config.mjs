import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';

// https://astro.build/config
export default defineConfig({
  // site: '#',
  // base: '/',
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