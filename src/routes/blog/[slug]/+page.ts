import { getBlogPosts, getBlogSlugs, selectBlogPost } from "$lib/blogPost";
import { error, redirect } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types.js";

// For redirects
export const prerender = "auto";

export const load = (async ({ params }) => {
	const blogPosts = getBlogPosts();

	let blogPost = selectBlogPost(blogPosts, { id: params.slug });
	if (blogPost) {
		redirect(302, `/blog/${blogPost.slug}`);
	}

	blogPost = selectBlogPost(blogPosts, { slug: params.slug });
	if (blogPost === undefined) {
		error(404, "Can't find blog post");
	}

	return { blogPost };
}) satisfies PageLoad;

export const entries: EntryGenerator = async () => {
	const entries = getBlogSlugs();

	//const entries = [
	//	{ slug: "demo-markdown-notebook" },
	//	{ slug: "pandas-to-pydantic" },
	//];

	return entries;
};
