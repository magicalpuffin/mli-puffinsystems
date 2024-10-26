<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLHeadElement> {
		children?: import('svelte').Snippet;
	}
	let { children, ...rest }: Props = $props();
</script>

<h1 class="my-4 text-4xl font-bold" {...rest}>
	{@render children?.()}
</h1>
