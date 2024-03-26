import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import sanitizeHtml from "sanitize-html";

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

  let html_text = marked.parse(markdown_text, {
    mangle: false,
    headerIds: false,
  });

  // sanitizehtml, allow highlightjs
  html_text = sanitizeHtml(html_text, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedClasses: {
      div: ["table-container"],
      code: ["hljs", "language-*", "lang-*"],
      span: ["hljs-*"],
    },
  });

  return html_text;
}
