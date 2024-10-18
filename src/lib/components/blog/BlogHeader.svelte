<script lang="ts">
	import Heading1 from '$lib/components/Heading1.svelte';
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import InfoIcon from 'lucide-svelte/icons/info';

	export let title: string;
	export let createdDate: string;
	export let updatedDate: string | undefined = undefined;
</script>

<Heading1 id="blogTitle">
	{title}
</Heading1>
<div
	class="flex gap-2 tooltip-bottom w-fit"
	class:tooltip={updatedDate}
	data-tip={updatedDate}
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
