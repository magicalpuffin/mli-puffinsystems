---
title: Dynamically rendering markdown on SvelteKit using mdsvex
description: How to dynamically render markdown in SvelteKit using mdsvex and example template-sveltekit-md-docs. Page routing with vite glob imports and native like support of images and links.
createdDate: 2024-11-02
tags:
  - sveltekit
  - typescript
---
`mdsvex` allows using markdown in Svelte components; however, this is usually done by creating or importing your component in a `.svx` file. This works great for writing Svelte components with markdown, but gets annoying if you primarily want to markdown content.

It is possible to import markdown content from `.md` files, however, using markdown this way isn't the same as with full native support:
- Each `.md` file needs to be imported into another file to be routed
- Image links in `.md` use filepath but `<img/>` tag `src` assumes URL routes
- Links between `.md` files don't work because `href` assumes URL routes

This is why I created `template-svelte-md-docs`, an example of how to setup native like markdown support. This allows other markdown editors such as Obsidian and GitHub to correctly preview and render the same markdown content. 
- https://github.com/magicalpuffin/template-sveltekit-md-docs
- https://template-sveltekit-md-docs.puffinsystems.com/

The template also includes a some additional examples such as using `katex` with `mdsvex`

## Dynamic Routing

Dynamically rendering markdown components is supported using `import.meta.glob` from `vite`. This allows a glob importing of modules, which for us is all markdown files.
- https://v3.vitejs.dev/guide/features.html#glob-import

Modules are an object each key the import file path. This is matched with the route parameter to identify which component to render.

Entries are included to enable prerendering. When everything is dynamically rendered, the only way for SvelteKit to know which paths should be prerendered is if the route parameter is listed as an entry.

For more examples see `shadcn-svelte` docs, it is where I got this idea. It is also used in `svelte` docs and this blog.
- https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs
- https://github.com/sveltejs/svelte.dev
- https://github.com/magicalpuffin/mli-puffinsystems

```ts
// routes/[slug]/page.ts
import type { ContentModules } from "$lib/types";
import { pathToSlug, slugToPath } from "$lib/utils";
import { error } from "@sveltejs/kit";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = "auto";

export const load = (async ({ params }) => {
	const modules = import.meta.glob("/src/lib/content/*.md") as ContentModules;

	const contentModule = modules[slugToPath(params.slug)];

	if (!contentModule) {
		error(404, "Can't find content");
	}

	const { default: component, metadata } = await contentModule().then();

	return { component, metadata };
}) satisfies PageLoad;

export const entries: EntryGenerator = async () => {
	const modules = import.meta.glob("/src/lib/content/*.md") as ContentModules;

	const entries = Object.keys(modules).map((path) => {
		return { slug: pathToSlug(path) };
	});

	return entries;
};
```

```svelte
<script lang="ts">
	// routes/[slug]/page.svelte
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<h1 class="my-4 text-4xl font-bold">{data.metadata.title}</h1>
<hr class="my-4 border" />
<article
	class="prose prose-img:my-0 prose-img:rounded-lg prose-img:mx-auto prose-img:shadow-lg"
>
	<data.component></data.component>
</article>
```


## Image Links

 The template uses `@sveltejs/enhanced-img` for image optimizations. It would be possible to create a rehype plugin which only changes the `src` URL. Some image formats such as `.gif` aren't supported and have to use the static files route.
- https://svelte.dev/docs/kit/images#sveltejs-enhanced-img

When editing markdown files in the project directory, the path to files in the static folder are file paths. However, for image tags, the path needs to be to the static file URL path. `@sveltejs/enhanced-img` also uses the import path, not static files URL path.

**Example markdown image:**

```markdown
![example](/static/testphoto.png)
```

**Example equivalent Svelte image:**

```svelte
<enhanced:img src="/static/testphoto.png" alt="example" />
<img src="/testphoto.png" alt="example" />
```


A custom rehype plugin is used to convert `img` tags to `enhanced:img` before being rendered. The file path used by `@sveltejs/enhanced-img` are import paths while image `src` paths to static files are URLs. Markdown files use `%20` to represent spaces, however, `@sveltejs/enhanced-img` use file path imports in quotes, so `%20` has to be converted into spaces.

```js
// svelte.config.js
import { visit } from "unist-util-visit";

/**
 * @import {Root} from 'hast'
 */

export function rehypeEnhancedImage() {
	/**
	 * @param {Root} tree
	 * @return {undefined}
	 */
	return (tree) => {
		visit(tree, "element", (node) => {
			// Check if the node is an img element
			if (node.tagName === "img") {
				if (typeof node.properties.src === "string") {
					const srcext = node.properties.src?.toString().split(".").pop();

					if (srcext === "gif") {
						node.properties.src = node.properties.src.replace("/static", "");
					} else {
						// Change the tag name to 'enhanced:img'
						node.properties.src = node.properties.src.replaceAll("%20", " ");
						node.tagName = "enhanced:img";
					}
				}
			}
		});
	};
}
```

## Markdown Links

**Example markdown link** 

```markdown
[Getting Started](/src/lib/content/getting-started.md)
```

**Example equivalent Svelte link**

```svelte
<a href="/getting-started">Getting Started</a>
```

A custom rehype plugin is used to convert markdown links into corresponding `href` URLs. This allows creating links in markdown files which work in both the markdown editor and when rendered.

```js
import { visit } from "unist-util-visit";

/**
 * @import {Root} from 'hast'
 */

export function rehypeMarkdownLinks() {
	/**
	 * @param {Root} tree
	 * @return {undefined}
	 */
	return (tree) => {
		visit(tree, "element", (node) => {
			if (node.tagName === "a") {
				if (typeof node.properties.href === "string") {
					const srcext = node.properties.href?.toString().split(".").pop();

					if (srcext === "md") {
						node.properties.href = node.properties.href
							.replace("/src/lib/content", "")
							.replace(".md", "");
					}
				}
			}
		});
	};
}
```
