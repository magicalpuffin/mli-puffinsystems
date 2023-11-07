import type { PageLoad } from "./$types";
import type { BlogPost } from "$lib/types/blog";
import { markdown_to_html } from "$lib/utils/markdown_to_html";
import { error } from "@sveltejs/kit";

export const load = (async ({ params, fetch }) => {
  let URL_blogPostList = "/data/blogPostList.json";
  let blogPostList: BlogPost[] = await (await fetch(URL_blogPostList)).json();
  let blogPost: BlogPost | undefined = blogPostList.find((blogPost) => {
    return blogPost.slug_url === params.slug;
  });

  let blog_html = "";

  if (blogPost === undefined) {
    throw error(404, "Can't find blog post");
  }

  blog_html = markdown_to_html(
    await (await fetch(blogPost.markdown_url)).text()
  );

  return { blogPost, blog_html: blog_html };
}) satisfies PageLoad;
