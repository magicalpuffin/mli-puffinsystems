<script lang="ts">
	import { Blog } from '$lib/components/blog';
	//import { parseDate } from '@internationalized/date';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	//console.log(parseDate(data.blogPost.createdDate.slice(0, 10)));
</script>

<svelte:head
	><title>{data.blogPost.title}</title><meta
		name="description"
		content={data.blogPost.description}
	/></svelte:head
>

<Blog
	title={data.blogPost.title}
	createdDate={data.blogPost.createdDate.slice(0, 10)}
	updatedDate={data.blogPost.updatedDate?.slice(0, 10)}
>
	<data.blogPost.component />
</Blog>
