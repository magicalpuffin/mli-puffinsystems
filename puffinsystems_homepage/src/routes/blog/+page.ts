import type { PageLoad } from "./$types";
import type { BlogPost } from "$lib/types/blog";

export const load = (async ({ fetch }) => {
  let URL_blogPostList = "/data/blogPostList.json";
  let blogPostList: BlogPost[] = await (await fetch(URL_blogPostList)).json();

  return { blogPostList };
}) satisfies PageLoad;
