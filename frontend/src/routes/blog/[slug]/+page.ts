import type { PageLoad } from "./$types.js";
import type { BlogPost } from "$lib/types/blog";
import { error } from "@sveltejs/kit";

export const load = (async ({ params, fetch }) => {
  const URL_BLOGLIST = "/static/content/data/blogPostList.json";
  const BLOG_ID = params.slug;

  const blogPostList: BlogPost[] = await (await fetch(URL_BLOGLIST)).json();

  const blogPost: BlogPost | undefined = blogPostList.find((blogPost) => {
    return String(blogPost.post_id) === BLOG_ID;
  });

  if (blogPost === undefined) {
    error(404, "Can't find blog post");
  }

  return { blogPost };
}) satisfies PageLoad;
