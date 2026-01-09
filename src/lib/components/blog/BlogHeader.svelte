<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger
	} from '$lib/components/ui/tooltip';
	import BlogTag from './blog-tag.svelte';

	interface Props {
		title: string;
		createdDate: string;
		updatedDate?: string | undefined;
		tags?: string[];
	}

	let { title, createdDate, updatedDate, tags }: Props = $props();
</script>

<h1
	id={title.toLowerCase().replaceAll(' ', '-')}
	class="my-4 text-2xl font-bold tracking-wide"
>
	{title}
</h1>

<div class="flex flex-row gap-2 items-center w-fit">
	<TooltipProvider>
		<Tooltip>
			<TooltipTrigger>
				<CalendarIcon size={16} />
			</TooltipTrigger>
			<TooltipContent
				class="bg-secondary text-secondary-foreground"
				arrowClasses="bg-secondary"
				side="bottom"
			>
				<div>
					<p>Created on {createdDate}</p>
					{#if updatedDate}
						<p>Updated on: {updatedDate}</p>
					{/if}
				</div>
			</TooltipContent>
		</Tooltip>
	</TooltipProvider>
	<p class="text-xs text-gray-600">
		{createdDate}
	</p>
</div>
{#if tags}
	<div class="my-2 space-x-2">
		{#each tags as tag}
			<BlogTag label={tag} />
		{/each}
	</div>
{/if}
