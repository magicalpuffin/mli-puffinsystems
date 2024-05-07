import type { BlogPost, BlogPostBase } from "$lib/types/blog";
import type { PageLoad } from "./$types.js";

export const load = (async ({ fetch }) => {
  const URL_BLOGLIST = "/static/content/data/blogPostList.json";
  const blogPostListJSON: BlogPostBase[] = await (
    await fetch(URL_BLOGLIST)
  ).json();

  let blogPostList: BlogPost[] = blogPostListJSON.map((blogPost) => ({
    ...blogPost,
    date_created: new Date(blogPost.date_created),
    date_updated: new Date(blogPost.date_updated),
  }));

  blogPostList = blogPostList.sort(
    (a, b) => b.date_created.getTime() - a.date_created.getTime()
  );

  return { blogPostList };
}) satisfies PageLoad;
