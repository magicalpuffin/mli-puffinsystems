import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import { markdown_to_html } from "$lib/utils/markdown_to_html";

export const load = (async ({ params, fetch }) => {
  let blogUrl = `/blog/${params.dateId}_${params.slug}.md`;
  let blog_html = "";
  try {
    const response = await fetch(blogUrl);

    if (response.ok) {
      blog_html = markdown_to_html(await response.text());
    }
  } catch (error) {
    console.log(error);
  }

  return { blog_html };
}) satisfies PageLoad;
