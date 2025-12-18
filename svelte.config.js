import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { fromString as stringToHast } from "hast-util-from-string";
import { toHtml as hastToHtml } from "hast-util-to-html";
import { escapeSvelte, mdsvex } from "mdsvex";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { createHighlighter } from "shiki";
import { visit } from "unist-util-visit";

const theme = "github-dark";
const highlighter = await createHighlighter({
	themes: [theme],
	langs: [
		"javascript",
		"typescript",
		"svelte",
		"html",
		"markdown",
		"sh",
		"toml",
		"powershell",
		"python",
	],
});

/**
 * @import {Root} from 'hast'
 */

export function rehypeUpdateImage() {
	/**
	 * @param {Root} tree
	 * @return {undefined}
	 */
	return (tree) => {
		visit(tree, "element", (node) => {
			// Check if the node is an img element
			if (node.tagName === "img") {
				node.properties.src = node.properties.src.replace("/static", "");
			}
		});
	};
}

/**
 * @import {Root} from 'hast'
 */

export function rehypeHtmlKatex() {
	/**
	 * @param {Root} tree
	 * @return {undefined}
	 */
	return (tree) => {
		visit(tree, "element", (node) => {
			// Check if the node is an katex element
			if (node.properties?.className?.includes("katex")) {
				const katexHtml = hastToHtml(node);
				stringToHast(node, `{@html ${JSON.stringify(katexHtml)}}`);
			}
		});
	};
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	remarkPlugins: [remarkMath],
	rehypePlugins: [rehypeUpdateImage, rehypeKatex, rehypeHtmlKatex],
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
