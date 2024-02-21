import type { PageLoad } from "./$types.js";
import type { BlogPostJSON, BlogPost } from "$lib/types/blog";

export const load = (async ({ fetch }) => {
  const URL_BLOGLIST = "/static/content/data/blogPostList.json";
  const blogPostListJSON: BlogPostJSON[] = await (
    await fetch(URL_BLOGLIST)
  ).json();

  // TODO Consider moving functionality to utils
  let blogPostList: BlogPost[] = blogPostListJSON.map((blogPost) => ({
    ...blogPost,
    date_created: new Date(blogPost.date_created),
    date_updated: new Date(blogPost.date_updated),
  }));

  blogPostList = blogPostList.sort(
    (a, b) => a.date_created.getDate() - b.date_created.getDate()
  );

  return { blogPostList };
}) satisfies PageLoad;
