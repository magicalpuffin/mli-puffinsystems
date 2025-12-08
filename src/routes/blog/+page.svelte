<script lang="ts">
	//import { blogList } from '$lib/content/blogList';
	import BlogMenuItem from '$lib/components/blog/blog-menu-item.svelte';
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

<h1 class="my-4 text-2xl font-bold">Blog Posts</h1>
<div class="mt-2">
	{#each data.blogPosts as blog}
		<BlogMenuItem {blog} />
		<!-- <a -->
		<!-- 	href="/blog/{blog.slug}" -->
		<!-- 	class="block p-4 border-l-2 border-secondary hover:border-primary hover:bg-secondary/30" -->
		<!-- > -->
		<!-- 	<div class="text-xs text-gray-600"> -->
		<!-- 		{blog.createdDate.toLocaleString('en-US', { -->
		<!-- 			month: 'long', -->
		<!-- 			day: 'numeric', -->
		<!-- 			year: 'numeric', -->
		<!-- 			timeZone: 'UTC' -->
		<!-- 		})} -->
		<!-- 	</div> -->
		<!-- 	<h3 class="text-xl font-bold">{blog.title}</h3> -->
		<!-- 	<p -->
		<!-- 		class="p-4 my-2 text-sm border hover:shadow-xl border-primary duration-600" -->
		<!-- 	> -->
		<!-- 		{blog.description} -->
		<!-- 	</p> -->
		<!-- 	{#if blog.tags} -->
		<!-- 		<div class="space-x-2"> -->
		<!-- 			{#each blog.tags as tag} -->
		<!-- 				<span -->
		<!-- 					class="py-1 px-2 text-xs font-medium rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80" -->
		<!-- 					>{tag}</span -->
		<!-- 				> -->
		<!-- 			{/each} -->
		<!-- 		</div> -->
		<!-- 	{/if} -->
		<!-- </a> -->
	{/each}
</div>
