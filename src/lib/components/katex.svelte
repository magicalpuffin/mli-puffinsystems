<script lang="ts">
	import katex from 'katex';

	interface Props {
		math: string;
		displayMode?: boolean;
	}

	let { math, displayMode = false }: Props = $props();

	let katexString = $derived(
		katex.renderToString(math, {
			displayMode,
			throwOnError: false
		})
	);
</script>

<!-- eslint-disable -->
{@html katexString}
