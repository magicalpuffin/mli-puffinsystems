import type { Component } from "svelte";

export type BlogMetadata = {
	title: string;
	description: string;
	createdDate: string;
	updatedDate?: string;
	tags?: string[];
};

export type BlogModules = Record<
	string,
	{ default: Component; metadata: BlogMetadata }
>;

export type BlogPost = {
	id: string;
	slug: string;
	title: string;
	description: string;
	createdDate: Date;
	updatedDate?: Date;
	tags?: string[];
	component: Component;
};

function getBlogModules() {
	const modules = import.meta.glob("/src/lib/content/blog/*.md", {
		eager: true,
	}) as BlogModules;

	return modules;
}

export function getBlogPosts() {
	const modules = getBlogModules();

	return Object.entries(modules).map(([k, v]) => {
		// regex for filename without extension
		const filename = k.match(/([^/]+)(?=\.[^.]+$)/)?.[0] as string;
		const [id, slug] = filename.split("_");
		return {
			id: id,
			slug: slug,
			title: v.metadata.title,
			description: v.metadata.description,
			createdDate: new Date(v.metadata.createdDate),
			updatedDate: v.metadata.updatedDate
				? new Date(v.metadata.updatedDate)
				: undefined,
			tags: v.metadata.tags,
			component: v.default,
		};
	});
}

export function getBlogSlugs() {
	const modules = getBlogModules();

	return Object.keys(modules).map((k) => {
		// regex for filename without extension
		const filename = k.match(/([^/]+)(?=\.[^.]+$)/)?.[0] as string;
		const [slug] = filename.split("_");
		return {
			slug: slug,
		};
	});
}

export function selectBlogPost(
	blogPosts: BlogPost[],
	params: {
		id?: string;
		slug?: string;
	},
) {
	if (params.id) {
		return blogPosts.find((blogMetadata) => {
			return blogMetadata.id === params.id;
		});
	}

	if (params.slug) {
		return blogPosts.find((blogMetadata) => {
			return blogMetadata.slug === params.slug;
		});
	}

	return;
}
