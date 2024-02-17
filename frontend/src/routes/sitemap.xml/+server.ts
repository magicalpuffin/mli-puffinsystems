import type { BlogPost } from "$lib/types/blog";
import { Config } from "sst/node/config";

export async function GET() {
  const website = "https://" + Config.DOMAIN_NAME;
  const URL_BLOGLIST = website + "/static/content/data/blogPostList.json";

  const blogPostList: BlogPost[] = await (await fetch(URL_BLOGLIST)).json();

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
		${blogPostList
      .map(
        (blogPost) => `
		<url><loc>${website}/blog/${String(blogPost.post_id)}</loc></url>`
      )
      .join("")}
		</urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
