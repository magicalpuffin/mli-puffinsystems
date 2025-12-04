<script lang="ts">
	import Heading1 from '$lib/components/Heading1.svelte';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import InfoIcon from '@lucide/svelte/icons/info';

	interface Props {
		title: string;
		createdDate: string;
		updatedDate?: string | undefined;
	}

	let { title, createdDate, updatedDate = undefined }: Props = $props();
</script>

<Heading1 id="blogTitle">
	{title}
</Heading1>
<div
	class="flex gap-2 tooltip-bottom w-fit"
	class:tooltip={updatedDate}
	data-tip={`Updated on: ${updatedDate}`}
>
	{#if updatedDate}
		<CalendarIcon />
		<InfoIcon />
	{:else}
		<CalendarIcon />
	{/if}
	<p class="font-light text-md">
		{createdDate}
	</p>
</div>
