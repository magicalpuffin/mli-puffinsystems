<script lang="ts">
	import { Blog } from '$lib/components/blog';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head
	><title>{data.blogPost.title}</title><meta
		name="description"
		content={data.blogPost.description}
	/></svelte:head
>

<Blog
	title={data.blogPost.title}
	createdDate={data.blogPost.createdDate}
	updatedDate={data.blogPost.updatedDate}
>
	<data.blogPost.component />
</Blog>
