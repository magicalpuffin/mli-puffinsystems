import type { PageLoad } from "./$types";
import type { BlogPost } from "$lib/types/blog";
import { markdown_to_html } from "$lib/utils/markdown_to_html";
import { error } from "@sveltejs/kit";

export const load = (async ({ params, fetch }) => {
  const URL_BLOGLIST = "/data/blogPostList.json";
  const BLOG_ID = params.slug;

  let blogPostList: BlogPost[] = await (await fetch(URL_BLOGLIST)).json();
  let blogPost: BlogPost | undefined = blogPostList.find((blogPost) => {
    return blogPost.slug_url === BLOG_ID;
  });

  if (blogPost === undefined) {
    error(404, "Can't find blog post");
  }

  let blog_html = markdown_to_html(
    await (await fetch(blogPost.markdown_url)).text()
  );

  return { blogPost, blog_html };
}) satisfies PageLoad;
