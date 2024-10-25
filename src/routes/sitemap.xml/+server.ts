import type { BlogModules } from "$lib/types";

//import { PUBLIC_DOMAIN_NAME } from "$env/static/public";
const SITE_NAME = "https://mli.puffinsystems.com";

export async function GET() {
	const modules = import.meta.glob("/src/lib/content/blog/*.md") as BlogModules;

	const entries: { slug: string }[] = [];

	for (const path of Object.keys(modules)) {
		await modules[path]().then((mod) => {
			entries.push({ slug: mod.metadata.slug });
		});
	}

	// console.log(PUBLIC_DOMAIN_NAME);
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
		${entries
			.map(
				(entry) => `
		<url><loc>${SITE_NAME}/blog/${String(entry.slug)}</loc></url>`,
			)
			.join("")}
		</urlset>`.trim(),
		{
			headers: {
				"Content-Type": "application/xml",
			},
		},
	);
}
