import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    stack: z.array(z.string()).default([]),
    summary: z.string(),
    cover: z.string(),
    github: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {projects}
