<script lang="ts">
	import ExternalLinkIcon from 'lucide-svelte/icons/external-link';
	import GitHubIcon from '$lib/components/icons/GitHubIcon.svelte';

	interface Props {
		title: string;
		detailUrl?: string | undefined;
		githubUrl?: string | undefined;
		imgSrc: string;
		children?: import('svelte').Snippet;
	}

	let {
		title,
		detailUrl = undefined,
		githubUrl = undefined,
		imgSrc,
		children
	}: Props = $props();
</script>

<div class="rounded-2xl border shadow-lg md:h-96">
	<div class="flex flex-col h-full">
		<div
			class="flex flex-row justify-between items-center p-2 rounded-t-2xl bg-base-200"
		>
			<div class="text-xl font-bold">{title}</div>
			<div class="gap-4">
				{#if detailUrl}
					<a
						href={detailUrl}
						class="uppercase btn btn-ghost btn-sm"
						target="_blank"
						rel="noopener noreferrer"
						><p class="hidden md:block">Open</p>
						<ExternalLinkIcon />
					</a>
				{/if}
				{#if githubUrl}
					<a
						href={githubUrl}
						class="uppercase btn btn-ghost btn-sm"
						target="_blank"
						rel="noopener noreferrer"
						><p class="hidden md:block">Github</p>
						<GitHubIcon />
					</a>
				{/if}
			</div>
		</div>
		<div class="flex overflow-hidden flex-col h-full md:flex-row">
			<img
				class="object-cover w-full max-h-48 md:h-full aspect-square md:aspect-auto md:max-h-none"
				src={imgSrc}
				alt="project screenshot"
			/>
			<article class="my-2 mx-2 prose">
				{@render children?.()}
			</article>
		</div>
	</div>
</div>
