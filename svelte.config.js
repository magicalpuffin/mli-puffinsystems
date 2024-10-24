import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex } from "mdsvex";
import { createHighlighter } from "shiki";

const theme = "github-dark";
const highlighter = await createHighlighter({
	themes: [theme],
	langs: [
		"javascript",
		"typescript",
		"svelte",
		"html",
		"sh",
		"toml",
		"powershell",
		"python",
	],
});

import { visit } from "unist-util-visit";

function rehypeEnhancedImage() {
	return (tree) => {
		visit(tree, "element", (node) => {
			// Check if the node is an img element
			if (node.tagName === "img") {
				// Change the tag name to 'enhanced:img'
				node.tagName = "enhanced:img";
			}
		});
	};
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	rehypePlugins: [rehypeEnhancedImage],
	extensions: [".svx", ".md"],
	highlight: {
		highlighter: async (code, lang = "text") => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		},
	},
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx", ".md"],
	preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],
	kit: {
		adapter: adapter(),
	},
};

export default config;
