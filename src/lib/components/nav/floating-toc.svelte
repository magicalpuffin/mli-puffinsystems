<script lang="ts">
	import { onMount } from 'svelte';

	let headers: { level: string; id: string; text: string }[] = $state([]);

	onMount(() => {
		document
			.querySelectorAll('h1, h2, h3')
			.forEach((e) =>
				headers.push({ level: e.tagName, id: e.id, text: e.innerHTML })
			);
	});
</script>

<div
	class="flex overflow-y-scroll sticky top-0 flex-col p-4 w-96 max-h-96 text-sm rounded-xl border border-xl left-[-56px]"
>
	{#each headers as header}
		<a
			href={'#' + header.id}
			class="items-center truncate border-l-2 pl-2 hover:border-l-orange-600 hover:text-orange-600 {header.level ===
			'H1'
				? 'font-bold'
				: 'pl-8'}">{header.text}</a
		>
	{/each}
</div>
