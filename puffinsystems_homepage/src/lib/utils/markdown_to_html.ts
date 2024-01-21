import { Marked } from "marked";
import {markedHighlight} from "marked-highlight"
import hljs from "highlight.js"
import sanitizeHtml from "sanitize-html";

export function markdown_to_html(markdown_text: string): string {
  let html_text = markdown_text;

  if (!html_text) {
    html_text = "*No text to display. Edit to add text.*";
  }

  const marked = new Marked(
    markedHighlight({
      langPrefix: 'hljs language-',
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      }
    })
  );

  // https://github.com/markedjs/marked
  html_text = marked.parse(html_text, {
    mangle: false,
    headerIds: false,
  });

  // https://github.com/apostrophecms/sanitize-html
  html_text = sanitizeHtml(html_text, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedClasses: {
      'code': [ 'hljs', 'language-*', 'lang-*' ],
      'span': [ 'hljs-*' ]
    }
  });

  return html_text;
}
