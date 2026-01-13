<script lang="ts">
	import BlogHeader from './BlogHeader.svelte';
	import BlogContent from './BlogContent.svelte';
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

<div transition:fade={{ duration: 150 }}>
	<BlogHeader {title} {createdDate} {updatedDate} {tags} />

	<Separator class="my-2 bg-secondary" />
	<BlogContent>{@render children?.()}</BlogContent>
</div>
