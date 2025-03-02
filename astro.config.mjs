import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [react()],
  redirects: {
    '/barna': '/barna/projects',
    '/evelin': '/evelin/projects'
  },
  vite: {
    plugins: [tailwindcss()],
  },
  clientRouter: import.meta.env.PROD ? true : false

});
