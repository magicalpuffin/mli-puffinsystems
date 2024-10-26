<script lang="ts">
	interface Props {
		links: string[];
		activeIndex: number;
	}

	let { links, activeIndex }: Props = $props();
</script>

<div class="flex gap-1 py-2">
	{#each links as link, i}
		<a
			href={link}
			class="btn btn-sm"
			class:text-white={i == activeIndex}
			class:btn-secondary={i == activeIndex}>{i + 1}</a
		>
	{/each}
</div>
