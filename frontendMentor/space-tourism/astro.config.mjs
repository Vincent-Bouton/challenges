import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/destination': '/destination/moon',
    '/crew': '/crew/douglas-hurley',
    '/technology': '/technology/launch-vehicle',
  }
});