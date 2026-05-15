import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yuhanhomecare.com',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
