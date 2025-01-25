import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(), react()],
  redirects: {
    '/barna': '/barna/projects',
    '/evelin': '/evelin/projects'
  },
  vite: {
    server: {
      hmr: true
    }
  }

});
