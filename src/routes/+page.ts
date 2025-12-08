import { getBlogPosts } from "$lib/blogPost";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load = (async () => {
	const blogPosts = getBlogPosts()
		.sort((a, b) => b.createdDate.valueOf() - a.createdDate.valueOf())
		.slice(0, 3);

	return { blogPosts };
}) satisfies PageLoad;
