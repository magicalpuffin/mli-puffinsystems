import hljs from "highlight.js";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";

export function markdownToHtml(markdown_text?: string): string {
  if (markdown_text === undefined) {
    markdown_text = "*No text to display. Edit to add text.*";
  }

  // Modified render to wrap table
  const renderer = {
    table(header: string, body: string) {
      return `<div class="table-container"><table>${header}${body}</table></div>`;
    },
  };

  // highlistjs
  const marked = new Marked(
    markedHighlight({
      langPrefix: "hljs language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    }),
    { renderer }
  );

  const html_text = marked.parse(markdown_text, {
    mangle: false,
    headerIds: false,
  });

  return html_text;
}
