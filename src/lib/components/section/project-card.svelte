<script lang="ts">
	import { ExternalLinkIcon } from '@lucide/svelte';
	import GitHubIcon from '../icons/GitHubIcon.svelte';
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
	<div class="group relative hover:z-30 md:w-2/3">
		<img
			src={imgSrc}
			alt={imgAlt}
			class="aspect-video w-full rounded-xl object-cover duration-600 group-hover:shadow-xl group-hover:brightness-100 md:brightness-75"
		/>
		<div
			class="absolute inset-0 w-full rounded-xl bg-transparent duration-600 group-hover:bg-transparent md:bg-secondary/80"
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
			class="border border-primary bg-white p-4 duration-600 group-hover:shadow-xl"
		>
			<p>{description}</p>
			{#if detailsLink}
				<div class="flex justify-end">
					<a href={detailsLink} class="font-semibold text-primary underline"
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
				<ExternalIconLink href={githubLink}><GitHubIcon /></ExternalIconLink>
			{/if}
			{#if externalLink}
				<ExternalIconLink href={externalLink}
					><ExternalLinkIcon /></ExternalIconLink
				>
			{/if}
		</div>
	</div>
</div>
