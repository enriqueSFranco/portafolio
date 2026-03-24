import { defineCollection } from "astro:content";
import {z} from "astro/zod"
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({base: "./src/content/projects", pattern: "**/*.{md,mdx}"}),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    stack: z.array(z.string()).default([]),
    summary: z.string(),
    cover: z.string(),
    github: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {projects}
