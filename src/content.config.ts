import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";


export const blogSchema = {
	title: z.string(),
	pubDate: z.date(),
	description: z.string(),
	image: z.object({
	url: z.string(),
	alt: z.string()
	}).optional(),
	tags: z.array(z.string())
};
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.(md|mdx)', base: "./src/blog" }),
    schema: z.object(blogSchema)
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };
export type BlogType = typeof blog;