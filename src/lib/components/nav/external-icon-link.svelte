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
	class="p-2 text-gray-600 rounded-full hover:bg-secondary/30 hover:text-primary"
>
	{@render children()}
</a>
