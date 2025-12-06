<script lang="ts">
	import '$lib/styles/blog-styles.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<article
	class="max-w-none prose prose-img:mx-auto prose-img:my-0 prose-img:rounded-lg prose-img:shadow-lg"
>
	{@render children?.()}
</article>
