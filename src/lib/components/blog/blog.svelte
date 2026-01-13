<script lang="ts">
	import BlogHeader from './blog-header.svelte';
	import BlogContent from './blog-content.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { fade } from 'svelte/transition';

	interface Props {
		title: string;
		createdDate: string;
		updatedDate?: string | undefined;
		tags?: string[];
		children?: import('svelte').Snippet;
	}

	let {
		title,
		createdDate,
		updatedDate = undefined,
		tags,
		children
	}: Props = $props();
</script>

<div in:fade={{ duration: 150 }}>
	<BlogHeader {title} {createdDate} {updatedDate} {tags} />

	<Separator class="my-2 bg-secondary" />
	<BlogContent>{@render children?.()}</BlogContent>
</div>
