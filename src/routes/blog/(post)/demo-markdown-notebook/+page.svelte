<script lang="ts">
	import { Blog } from '$lib/components/blog';
	import BlogPost, {
		metadata
	} from '$lib/content/blog/20230712 Demo Markdown Notebook.md';
	import type { BlogMetadata } from '$lib/types';

	const blogMetadata = metadata as BlogMetadata;
</script>

<svelte:head
	><title>{blogMetadata.title}</title><meta
		name="description"
		content={blogMetadata.description}
	/></svelte:head
>

<Blog
	title={blogMetadata.title}
	createdDate={blogMetadata.createdDate}
	updatedDate={blogMetadata.updatedDate}
>
	<BlogPost />
</Blog>
