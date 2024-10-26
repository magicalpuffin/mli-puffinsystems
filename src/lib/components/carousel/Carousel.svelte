<script lang="ts">
	interface Props {
		activeIndex?: number;
		children?: import('svelte').Snippet;
	}

	let { activeIndex = $bindable(0), children }: Props = $props();
	let carousel: HTMLElement | undefined = $state();

	function updateActiveIndex() {
		if (!carousel) return 0;
		const xLeft = carousel.scrollLeft;
		const xWidth = carousel.clientWidth;

		const activeIndex = Math.round(xLeft / xWidth);

		return activeIndex;
	}
</script>

<div
	class="w-full carousel"
	bind:this={carousel}
	onscroll={() => {
		activeIndex = updateActiveIndex();
	}}
>
	{@render children?.()}
</div>
