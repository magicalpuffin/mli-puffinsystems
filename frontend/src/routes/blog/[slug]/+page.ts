import type { PageLoad } from "./$types.js";
import type { BlogPostJSON, BlogPost } from "$lib/types/blog";
import { error } from "@sveltejs/kit";

export const load = (async ({ params, fetch }) => {
  const URL_BLOGLIST = "/static/content/data/blogPostList.json";
  const BLOG_ID = params.slug;

  const blogPostListJSON: BlogPostJSON[] = await (
    await fetch(URL_BLOGLIST)
  ).json();

  const blogPostList: BlogPost[] = blogPostListJSON.map((blogPost) => ({
    ...blogPost,
    date_created: new Date(blogPost.date_created),
    date_updated: new Date(blogPost.date_updated),
  }));

  const blogPost: BlogPost | undefined = blogPostList.find((blogPost) => {
    return String(blogPost.post_id) === BLOG_ID;
  });

  if (blogPost === undefined) {
    error(404, "Can't find blog post");
  }

  return { blogPost };
}) satisfies PageLoad;
