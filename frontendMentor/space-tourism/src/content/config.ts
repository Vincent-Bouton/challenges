// 1. Importer des propriétés à partir de `astro:content`
import { defineCollection,z } from 'astro:content';
// 2. Définie votre (vos) collection(s)
const destinationCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        image: z.object({
            png: z.string(),
            webp: z.string(),
        }),
        texture: z.string(),
        description: z.string(),
        distance: z.string(),
        travel: z.string(),
    })
});
const crewCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        image: z.object({
            png: z.string(),
            webp: z.string(),
        }),
        role: z.string(),
        bio: z.string(),
    })
});
const technologyCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        image: z.object({
            portait: z.string(),
            landscape: z.string(),
        }),
        description: z.string(),
    })
});
// 3. Exporter un objet `collections` unique pour enregistrer votre (vos) collection(s)
//    Cette clé doit correspondre au nom du répertoire de votre collection dans "src/content"
export const collections = {
    'destination': destinationCollection,
    'crew': crewCollection,
    'technology': technologyCollection,
};