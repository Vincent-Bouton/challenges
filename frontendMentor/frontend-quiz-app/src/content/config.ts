import {defineCollection, z} from 'astro:content'

const quizzesCollection = defineCollection({
    type:'data',
    schema:({image}) => z.object({
        quizzes: z.array(z.object({
            title: z.string(),
            icon: image(),
            questions: z.array(z.object({
                question: z.string(),
                options: z.array(z.string()),
                answer: z.string()
            }))
        }))
    })
})

export const collections = {
    'quizzes': quizzesCollection
}