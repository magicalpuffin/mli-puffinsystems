<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		children: Snippet;
	}

	let { href, children }: Props = $props();
</script>

<a
	target="_blank"
	rel="noopener noreferrer"
	{href}
	class="rounded-full p-2 text-black hover:bg-secondary/30 hover:text-primary"
>
	{@render children()}
</a>
