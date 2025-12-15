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
		imgSide?: 'left' | 'right';
	}

	let {
		imgSrc,
		imgAlt,
		title,
		description,
		githubLink,
		externalLink,
		detailsLink,
		tags,
		imgSide = 'left'
	}: Props = $props();
</script>

<div
	class="relative flex flex-col gap-4 md:gap-0 {imgSide == 'left'
		? 'md:flex-row'
		: 'md:flex-row-reverse'}"
>
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
	<div
		class="group top-0 z-20 md:absolute md:w-2/3 {imgSide == 'left'
			? 'right-0'
			: 'left-0'}"
	>
		<h3
			class="my-2 text-xl font-semibold {imgSide == 'left'
				? 'text-right'
				: 'text-left'}"
		>
			{title}
		</h3>
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
			<div
				class="my-2 flex space-x-2 {imgSide == 'left'
					? 'justify-end'
					: 'justify-start'}"
			>
				{#each tags as tag}
					<BlogTag label={tag} />
				{/each}
			</div>
		{/if}
		<div
			class="my-2 flex {imgSide == 'left' ? 'justify-end' : 'justify-start'}"
		>
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
