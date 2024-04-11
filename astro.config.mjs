import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue()],
  build: {
    format: 'file',
    assets: '_assets',
    inlineStylesheets: 'never',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/sass/helper/all.scss";`,
        },
      },
    },
  },
});
