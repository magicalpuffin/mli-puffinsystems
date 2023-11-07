import type { PageLoad } from "./$types";
import type { BlogPost } from "$lib/types/blog";

export const load = (async ({ fetch }) => {
  let URL_blogPostList = "/data/blogPostList.json";
  let blogPostList: BlogPost[] = await (await fetch(URL_blogPostList)).json();

  blogPostList = blogPostList.sort((a, b) => {
    if (a.date_created < b.date_created) {
      return 1;
    }
    if (a.date_created > b.date_created) {
      return -1;
    }
    return 0;
  });

  return { blogPostList };
}) satisfies PageLoad;
