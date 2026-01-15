<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { tv } from 'tailwind-variants';

	let headers: { level: 'H1' | 'H2' | 'H3'; id: string; text: string }[] =
		$state([]);
	let headerElements: NodeListOf<Element> | undefined = $state();
	let activeId = $state('');

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				});
			},
			{
				rootMargin: '0px 0px -25% 0px',
				threshold: 0
			}
		);

		headerElements = document.querySelectorAll('h1, h2, h3');
		headerElements?.forEach((e) => {
			headers.push({
				level: e.tagName as 'H1' | 'H2' | 'H3',
				id: e.id,
				text: e.innerHTML
			});
			observer.observe(e);
		});
		return () => observer.disconnect();
	});

	const tocVariants = tv({
		base: 'items-center pl-2 border-l-2 truncate hover:border-l-primary hover:bg-secondary/30 hover:text-primary',
		variants: {
			level: {
				H1: 'font-bold',
				H2: 'pl-4',
				H3: 'pl-8'
			},
			active: {
				true: 'border-l-primary text-primary'
			}
		},
		defaultVariants: {
			level: 'H3',
			active: false
		}
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
				class={tocVariants({
					level: header.level,
					active: header.id === activeId
				})}>{header.text}</a
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
