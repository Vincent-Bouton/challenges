import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  redirects: {
    '/destination': '/destination/moon',
    '/crew': '/crew/douglas-hurley',
    '/technology': '/technology/launch-vehicle'
  },
  image: {
    service: passthroughImageService(),
  },
});