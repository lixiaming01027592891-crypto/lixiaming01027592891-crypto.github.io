import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yuhanhomecare.com',
  output: 'static',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
