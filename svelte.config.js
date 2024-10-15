import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex } from "mdsvex";
import { createHighlighter } from "shiki";

const theme = "github-dark";
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ["javascript", "typescript", "svelte", "html", "sh", "toml"],
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".svx"],
	highlight: {
		highlighter: async (code, lang = "text") => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		},
	},
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx"],
	preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],
	kit: {
		adapter: adapter(),
	},
};

export default config;
