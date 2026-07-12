import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        stat: z.string().optional(),
        figure: z.enum(["timeseries", "bars", "twoline", "network", "alignment"]).optional(),
        image: z.string().optional(),
        scale: z.string().optional(),
        methods: z.string().optional(),
        location: z.string().optional(),
        advisor: z.string().optional(),
        order: z.number(),
    }),
});

export const collections = { projects }; 