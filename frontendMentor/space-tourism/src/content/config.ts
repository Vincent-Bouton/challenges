// 1. Importer des propriétés à partir de `astro:content`

import { defineCollection,z } from 'astro:content';
// 2. Définie votre (vos) collection(s)
const destinationCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        images: z.object({
            png: z.string(),
            webp: z.string(),
        }),
        texture: z.string(),
        description: z.string(),
        distance: z.string(),
        travel: z.string(),
        order: z.number()
    })
});
const crewCollection = defineCollection({
    type: 'data',
    schema:({image}) => z.object({
        name: z.string(),
        images: z.object({
            png:image(),
            webp:image(),
        }),
        role: z.string(),
        bio: z.string(),
        order: z.number()
    })
});
const technologyCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        images: z.object({
            portrait: z.string(),
            landscape: z.string(),
        }),
        description: z.string(),
        order: z.number()
    })
});
// 3. Exporter un objet `collections` unique pour enregistrer votre (vos) collection(s)
//    Cette clé doit correspondre au nom du répertoire de votre collection dans "src/content"
export const collections = {
    'destination': destinationCollection,
    'crew': crewCollection,
    'technology': technologyCollection,
};