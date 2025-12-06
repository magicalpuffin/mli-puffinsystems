import type { BlogMetadata, BlogModules } from "$lib/types.js";
import { error, redirect } from "@sveltejs/kit";
import type { Component } from "svelte";
import type { EntryGenerator, PageLoad } from "./$types.js";

// For redirects
export const prerender = "auto";

export const load = (async ({ params, fetch }) => {
	const BLOG_SLUG = params.slug;

	const modules = import.meta.glob("/src/lib/content/blog/*.md", {
		eager: true,
	}) as BlogModules;

	const blogMetadataList = Object.values(modules).map((mod) => ({
		...mod.metadata,
		component: mod.default,
	}));

	let blogPost = blogMetadataList.find((blogMetadata) => {
		return String(blogMetadata.id) === BLOG_SLUG;
	});

	if (blogPost) {
		redirect(302, `/blog/${blogPost.slug}`);
	}

	if (blogPost === undefined) {
		blogPost = blogMetadataList.find((blogMetadata) => {
			return String(blogMetadata.slug) === BLOG_SLUG;
		});
	}

	if (blogPost === undefined) {
		error(404, "Can't find blog post");
	}

	return { blogPost };
}) satisfies PageLoad;

export const entries: EntryGenerator = async () => {
	const modules = import.meta.glob("/src/lib/content/blog/*.md", {
		eager: true,
	}) as BlogModules;

	// todo consider putting slug in pathname for easier parsing
	const entries = Object.values(modules).map((mod) => ({
		slug: mod.metadata.slug,
	}));

	//const entries = [
	//	{ slug: "demo-markdown-notebook" },
	//	{ slug: "pandas-to-pydantic" },
	//];

	return entries;
};
