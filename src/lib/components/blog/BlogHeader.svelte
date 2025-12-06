<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger
	} from '../ui/tooltip';

	interface Props {
		title: string;
		createdDate: string;
		updatedDate?: string | undefined;
	}

	let { title, createdDate, updatedDate = undefined }: Props = $props();
</script>

<h1 class="my-4 text-2xl font-bold tracking-wide">
	{title}
</h1>

<TooltipProvider>
	<Tooltip>
		<TooltipTrigger>
			<div class="flex gap-2 w-fit">
				<CalendarIcon size="20" />
				<p class="font-light text-md">
					{createdDate}
				</p>
			</div>
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
