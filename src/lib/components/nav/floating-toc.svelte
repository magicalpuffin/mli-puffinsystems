<script lang="ts">
	import { onMount } from 'svelte';

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
				rootMargin: '0px 0px -70% 0px',
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

<div
	class="hidden overflow-y-scroll fixed top-20 flex-col px-4 max-h-96 text-sm xl:flex max-w-96"
>
	{#each headers as header}
		<a
			href={'#' + header.id}
			class="items-center truncate border-l-2 pl-2 hover:border-l-primary hover:text-primary {header.level ===
			'H1'
				? 'font-bold'
				: 'pl-8'}
      {header.id === active ? 'border-l-primary text-primary' : ''}
      ">{header.text}</a
		>
	{/each}
</div>

<style>
	:root {
		--side-width: calc((100dvw - 768px) / 2);
	}
	div {
		left: calc(var(--side-width) + 768px);
		width: var(--side-width);
	}
</style>
