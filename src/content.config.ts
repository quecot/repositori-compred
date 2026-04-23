import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    published: z.boolean().default(true),
    title: z.string(),
    type: z.string(),
    dimension: z.enum([
      'Planificacio de la recerca',
      'Fonamentacio teorica',
      'Disseny i aplicacio',
      'Discussio i conclusions',
      'Bibliografia',
      'Comunicacio i TIC',
    ]),
    subdimension: z.string().optional(),
    level: z.number().min(1).max(3),
    url: z.string(),
  }),
});

export const collections = { resources };