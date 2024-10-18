<script lang="ts">
	import BlogHeader from './BlogHeader.svelte';
	import BlogContent from './BlogContent.svelte';

	export let title: string;
	export let createdDate: string;
	export let updatedDate: string | undefined = undefined;
</script>

<BlogHeader {title} {createdDate} {updatedDate} />
<div class="my-1 divider" />
<BlogContent><slot /></BlogContent>
