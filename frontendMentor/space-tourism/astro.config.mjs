import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue({
    template: {
      compilerOptions: {
        // treat any tag that starts with ion- as custom elements
        isCustomElement: (tag) => tag.startsWith('Tres'),
      },
    },
  })],
  redirects: {
    '/destination': '/destination/moon',
    '/crew': '/crew/douglas-hurley',
    '/technology': '/technology/launch-vehicle'
  }
});