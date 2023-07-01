import { markdown_to_html } from "./markdown_to_html";

export async function fetchMarkdown(
  url: string,
  fetch: (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ) => Promise<Response>
) {
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
