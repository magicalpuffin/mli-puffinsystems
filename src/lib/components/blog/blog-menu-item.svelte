<script lang="ts">
	import BlogTag from './blog-tag.svelte';

	interface Props {
		blog: {
			id: string;
			slug: string;
			title: string;
			description: string;
			createdDate: Date;
			updatedDate?: Date;
			tags?: string[];
		};
	}

	let { blog }: Props = $props();
</script>

<a
	href="/blog/{blog.slug}"
	class="block p-4 border-l-2 group border-secondary hover:border-primary hover:bg-secondary/30"
>
	<div class="text-xs text-gray-600">
		{blog.createdDate.toLocaleString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			timeZone: 'UTC'
		})}
	</div>
	<h3 class="text-xl font-bold">{blog.title}</h3>
	<p
		class="p-4 my-2 text-sm border group-hover:shadow-xl border-primary duration-600"
	>
		{blog.description}
	</p>
	{#if blog.tags}
		<div class="space-x-2">
			{#each blog.tags as tag}
				<BlogTag label={tag} />
			{/each}
		</div>
	{/if}
</a>
