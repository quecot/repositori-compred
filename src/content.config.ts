import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    published: z.boolean().default(true),
    title: z.string(),
    type: z.enum(['Llibre', 'Article', 'Recurs web', 'Presentació', 'Vídeo', 'Quiz', 'Altres']),
    dimension: z.enum([
      'Planificació de la recerca',
      'Fonamentació teòrica',
      'Disseny i aplicació',
      'Discussió i conclusions',
      'Bibliografia',
      'Comunicació i TIC',
    ]),
    subdimension: z.string().optional(),
    level: z.number().min(1).max(3),
    url: z.string(),
    languages: z.array(z.enum(['ca', 'es', 'en'])).default(['ca']),
  }),
});

export const collections = { resources };