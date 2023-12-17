import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export function markdown_to_html(markdown_text: string): string {
  let html_text = markdown_text;
  // Replacing front matter content
  html_text = html_text.replace(/^---$.*^---$/ms, "");

  if (!html_text) {
    html_text = "*No text to display. Edit to add text.*";
  }

  // https://github.com/markedjs/marked
  html_text = marked(html_text, {
    mangle: false,
    headerIds: false,
  });

  // https://github.com/apostrophecms/sanitize-html
  html_text = sanitizeHtml(html_text, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
  });

  return html_text;
}
