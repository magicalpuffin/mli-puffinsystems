<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let headers: { level: string; id: string; text: string }[] = $state([]);
	let headerElements: NodeListOf<Element> | undefined = $state();
	let active = $state('');

	const observeSections = () => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						active = entry.target.id;
					}
				});
			},
			{
				rootMargin: '0px 0px -25% 0px',
				threshold: 0
			}
		);

		headerElements?.forEach((el) => {
			if (el) observer.observe(el);
		});
	};

	onMount(() => {
		headerElements = document.querySelectorAll('h1, h2, h3');
		headerElements?.forEach((e) =>
			headers.push({ level: e.tagName, id: e.id, text: e.innerHTML })
		);
		observeSections();
	});

	// $inspect(active);
</script>

{#if headers.length > 0}
	<aside
		class="hidden overflow-y-auto fixed top-20 flex-col px-4 max-h-96 text-sm xl:flex max-w-96"
		transition:fly={{ x: 50 }}
	>
		{#each headers as header}
			<a
				href={header.level === 'H1' ? '#top' : '#' + header.id}
				class="items-center pl-2 border-l-2 truncate hover:border-l-primary hover:bg-secondary/30 hover:text-primary"
				class:font-bold={header.level === 'H1'}
				class:pl-4={header.level === 'H2'}
				class:pl-8={header.level === 'H3'}
				class:border-l-primary={header.id === active}
				class:text-primary={header.id === active}>{header.text}</a
			>
		{/each}
	</aside>
{/if}

<style>
	:root {
		--content-width: 768px;
		--side-width: calc((100dvw - var(--content-width)) / 2);
	}
	aside {
		left: calc(var(--side-width) + var(--content-width));
		width: var(--side-width);
	}
</style>
