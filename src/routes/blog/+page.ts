import type { BlogMetadata, BlogModules } from "$lib/types.js";
import type { PageLoad } from "./$types";

export const prerender = true;

export const load = (async () => {
	const modules = import.meta.glob("/src/lib/content/blog/*.md") as BlogModules;
	let blogMetadataList: BlogMetadata[] = [];

	for (const path of Object.keys(modules)) {
		await modules[path]().then((mod) => {
			blogMetadataList.push(mod.metadata);
		});
	}
	blogMetadataList = blogMetadataList.sort((a, b) =>
		b.createdDate.localeCompare(a.createdDate),
	);

	return { blogMetadataList };
}) satisfies PageLoad;
