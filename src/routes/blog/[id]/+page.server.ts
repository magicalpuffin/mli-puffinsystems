import { blogList } from "$lib/content/blogList.js";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types.js";

export const load = (async ({ params, fetch }) => {
	const BLOG_ID = params.id;

	const blogPost = blogList.find((blogPost) => {
		return String(blogPost.id) === BLOG_ID;
	});

	if (blogPost === undefined) {
		error(404, "Can't find blog post");
	}
	redirect(302, `/blog/${blogPost.slug}`);
}) satisfies PageServerLoad;
