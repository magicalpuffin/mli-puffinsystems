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
<div class="mt-2 menu bg-base-200 rounded-box">
	{#each data.blogMetadataList as blog}
		<li>
			<a href="/blog/{blog.slug}">
				<p>
					{blog.createdDate.slice(0, 10)}
					{blog.title}
				</p>
			</a>
		</li>
	{/each}
</div>
