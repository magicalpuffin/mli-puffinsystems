import type { BlogMetadata, BlogModules } from "$lib/types.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load = (async () => {
	const modules = import.meta.glob("/src/lib/content/blog/*.md", {
		eager: true,
	}) as BlogModules;

	const blogMetadataList = Object.values(modules)
		.map((mod) => mod.metadata)
		.sort((a, b) => b.createdDate.localeCompare(a.createdDate));

	return { blogMetadataList };
}) satisfies PageLoad;
