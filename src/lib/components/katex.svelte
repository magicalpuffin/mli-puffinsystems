<script lang="ts">
	import katex from 'katex';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props {
		math: string;
		displayMode?: boolean;
		class?: HTMLAttributes<HTMLDivElement>['class'];
	}

	let { math, displayMode = false, class: className }: Props = $props();

	let katexString = $derived(
		katex.renderToString(math, {
			displayMode,
			throwOnError: false
		})
	);
</script>

<div class={className}>
	<!-- eslint-disable -->
	{@html katexString}
</div>
