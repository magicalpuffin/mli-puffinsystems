<script lang="ts">
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
	class="block p-4 border-l-2 border-secondary hover:border-primary hover:bg-secondary/30"
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
		class="p-4 my-2 text-sm border hover:shadow-xl border-primary duration-600"
	>
		{blog.description}
	</p>
	{#if blog.tags}
		<div class="space-x-2">
			{#each blog.tags as tag}
				<span
					class="py-1 px-2 text-xs font-medium rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80"
					>{tag}</span
				>
			{/each}
		</div>
	{/if}
</a>
