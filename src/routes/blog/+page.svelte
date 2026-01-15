<script lang="ts">
	import BlogMenuItem from '$lib/components/blog/blog-menu-item.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head
	><title>Blog</title><meta
		name="description"
		content="Michael Li. Blog posts I have written."
	/></svelte:head
>

<h1 class="my-4 text-2xl font-bold tracking-wide">Blog</h1>
<div class="mt-2">
	{#each data.blogPosts as blog}
		<BlogMenuItem {blog} />
	{/each}
</div>
