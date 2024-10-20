<script lang="ts">
	export let links: string[];
	export let activeIndex: number;
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
