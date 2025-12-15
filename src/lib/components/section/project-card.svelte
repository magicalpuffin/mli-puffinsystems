<script lang="ts">
	import { ExternalLinkIcon, GithubIcon } from '@lucide/svelte';
	import ExternalIconLink from '../nav/external-icon-link.svelte';
	import BlogTag from '../blog/blog-tag.svelte';

	interface Props {
		imgSrc: string;
		imgAlt: string;
		title: string;
		description: string;
		githubLink?: string;
		externalLink?: string;
		detailsLink?: string;
		tags?: string[];
	}

	let {
		imgSrc,
		imgAlt,
		title,
		description,
		githubLink,
		externalLink,
		detailsLink,
		tags
	}: Props = $props();
</script>

<div class="flex relative flex-col gap-4 m-2 md:flex-row">
	<div class="relative md:w-2/3 hover:z-30 group">
		<img
			src={imgSrc}
			alt={imgAlt}
			class="object-cover w-full rounded-xl group-hover:shadow-xl aspect-video duration-600 md:brightness-75 group-hover:brightness-100"
		/>
		<div
			class="absolute inset-0 w-full bg-transparent rounded-xl group-hover:bg-transparent duration-600 md:bg-secondary/80"
		></div>
	</div>
	<div class="top-0 right-0 z-20 md:absolute md:w-2/3 group">
		<h3 class="my-2 text-xl font-semibold text-right">{title}</h3>
		<div
			class="p-4 bg-white border group-hover:shadow-xl border-primary duration-600"
		>
			<p>{description}</p>
			{#if detailsLink}
				<div class="flex justify-end">
					<a href={detailsLink} class="font-semibold underline text-primary"
						>Read More</a
					>
				</div>
			{/if}
		</div>
		{#if tags}
			<div class="flex justify-end my-2 space-x-2">
				{#each tags as tag}
					<BlogTag label={tag} />
				{/each}
			</div>
		{/if}
		<div class="flex justify-end my-2">
			{#if githubLink}
				<ExternalIconLink href={githubLink}><GithubIcon /></ExternalIconLink>
			{/if}
			{#if externalLink}
				<ExternalIconLink href={externalLink}
					><ExternalLinkIcon /></ExternalIconLink
				>
			{/if}
		</div>
	</div>
</div>
