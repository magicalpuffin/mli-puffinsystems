import type { PageLoad } from "./$types";
import { markdown_to_html } from "$lib/utils/markdown_to_html";

export const load = (async ({ fetch }) => {
  let tempText: string;

  async function fetchMarkdown(url: string) {
    let response_html = "";

    try {
      const response = await fetch(url);

      if (response.ok) {
        response_html = markdown_to_html(await response.text());
      }
    } catch (error) {
      console.log(error);
    }

    return response_html;
  }

  tempText = await fetchMarkdown("/md_content/card_body/tinywars_stats.md");

  return { tempText };
}) satisfies PageLoad;
