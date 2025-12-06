<script lang="ts">
	import BlogHeader from './BlogHeader.svelte';
	import BlogContent from './BlogContent.svelte';
	import { Separator } from '$lib/components/ui/separator';

	interface Props {
		title: string;
		createdDate: string;
		updatedDate?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let {
		title,
		createdDate,
		updatedDate = undefined,
		children
	}: Props = $props();
</script>

<BlogHeader {title} {createdDate} {updatedDate} />

<Separator class="my-2 bg-secondary" />
<BlogContent>{@render children?.()}</BlogContent>
