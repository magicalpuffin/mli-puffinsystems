<script lang="ts">
	import BlogHeader from './BlogHeader.svelte';
	import BlogContent from './BlogContent.svelte';

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
<div class="my-1 divider"></div>
<BlogContent>{@render children?.()}</BlogContent>
