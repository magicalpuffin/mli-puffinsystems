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
	class="rounded-full p-2 text-gray-600 hover:bg-gray-300/30 hover:text-orange-600"
>
	{@render children()}
</a>
