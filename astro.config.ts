// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://alrisdigital.web.id',
  integrations: [icon()],
  build: {
    inlineStylesheets: 'always',
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true, // don't touch this!
  },
});
