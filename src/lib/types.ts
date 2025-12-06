import type { Component } from "svelte";

export type BlogMetadata = {
	id: number;
	slug: string;
	title: string;
	description: string;
	createdDate: string;
	updatedDate?: string;
};

export type BlogModules = Record<
	string,
	{ default: Component; metadata: BlogMetadata }
>;
