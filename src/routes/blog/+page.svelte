<script lang="ts">
	import Heading1 from '$lib/components/Heading1.svelte';
	//import { blogList } from '$lib/content/blogList';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head
	><title>My Blog Posts</title><meta
		name="description"
		content="List of my blog posts"
	/></svelte:head
>

<Heading1 id="blog">My Blog Posts</Heading1>
<div class="mt-2">
	{#each data.blogMetadataList as blog}
		<a
			href="/blog/{blog.slug}"
			class="block p-4 border-l-2 border-secondary hover:border-primary hover:bg-secondary/30"
		>
			<div class="text-xs text-gray-600">{blog.createdDate.slice(0, 10)}</div>
			<h3 class="text-xl font-bold">{blog.title}</h3>
			<p
				class="p-4 my-2 text-sm border hover:shadow-xl border-primary duration-600"
			>
				{blog.description}
			</p>
		</a>
	{/each}
</div>
