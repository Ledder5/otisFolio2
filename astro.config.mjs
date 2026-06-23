import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import { visualizer } from 'rollup-plugin-visualizer';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

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

  integrations: [icon()],

  adapter: cloudflare(),

  output: 'server' // or 'static'
});