import { marked } from "marked";
import createDOMPurify from "dompurify";

export function markdown_to_html(markdown_text: string): string {
  let html_text = markdown_text;
  // Replacing front matter content
  html_text = html_text.replace(/^---$.*^---$/ms, "");

  if (!html_text) {
    html_text = "*No text to display. Edit to add text.*";
  }

  if (typeof window !== "undefined") {
    let DOMPurify = createDOMPurify(window);

    html_text = DOMPurify.sanitize(
      marked(html_text, {
        mangle: false,
        headerIds: false,
      })
    );
  }

  return html_text;
}
