<script lang="ts">
	import katex from 'katex';

	interface Props {
		math: string;
		displayMode?: boolean;
	}

	let { math, displayMode = false }: Props = $props();

	const options = {
		displayMode: displayMode,
		throwOnError: false
	};

	let katexString = $derived(katex.renderToString(math, options));
</script>

{@html katexString}
