import type { BlogMetadata } from "$lib/types.js";
import { error, redirect } from "@sveltejs/kit";
import type { ComponentType } from "svelte";
import type { EntryGenerator, PageLoad } from "./$types.js";

export const prerender = true;

export const load = (async ({ params, fetch }) => {
	const BLOG_SLUG = params.slug;

	const modules = import.meta.glob("/src/lib/content/blog/*.md");

	const blogMetadataList: (BlogMetadata & { component: ComponentType })[] = [];

	for (const path of Object.keys(modules)) {
		await modules[path]().then((mod) => {
			blogMetadataList.push({ ...mod.metadata, component: mod.default });
		});
	}

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
	//return { component: BlogPost };
}) satisfies PageLoad;

//export const load = (async ({ params, fetch }) => {
//	const BLOG_ID = params.id;
//
//	const blogPost = blogList.find((blogPost) => {
//		return String(blogPost.id) === BLOG_ID;
//	});
//
//	if (blogPost === undefined) {
//		error(404, "Can't find blog post");
//	}
//	redirect(302, `/blog/${blogPost.slug}`);
//}) satisfies PageServerLoad;

export const entries: EntryGenerator = async () => {
	const modules = import.meta.glob("/src/lib/content/blog/*.md");

	const entries: { slug: string }[] = [];

	for (const path of Object.keys(modules)) {
		await modules[path]().then((mod) => {
			entries.push({ slug: mod.metadata.slug });
		});
	}

	//const entries = [
	//	{ slug: "demo-markdown-notebook" },
	//	{ slug: "pandas-to-pydantic" },
	//];

	return entries;
};
