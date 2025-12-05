<script lang="ts">
	import { onMount } from 'svelte';
	import { GithubIcon, LinkedinIcon, MenuIcon } from '@lucide/svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import TopNavLink from './top-nav-link.svelte';
	import MenuNavLink from './menu-nav-link.svelte';
	import ExternalIconLink from './external-icon-link.svelte';

	interface Props {
		links: { href: string; label: string }[];
		githubUrl: string;
		linkedinUrl: string;
	}

	let { links, githubUrl, linkedinUrl }: Props = $props();

	let lastScrollY = 0;
	let show = $state(true);

	function handleScroll() {
		const current = window.scrollY;
		show = current < lastScrollY || current < 10; // always show near top
		lastScrollY = current;
	}

	// Register scroll listener
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
	let sheetOpen = $state(false);
</script>

<nav
	class={`fixed top-0 left-0 z-50 w-full bg-white/45 backdrop-blur-md
          transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-full'}`}
>
	<div
		class="flex justify-between items-center px-4 mx-auto max-w-4xl h-12 border-b"
	>
		<a
			href="/"
			class="py-1 my-1 w-36 font-mono text-lg font-bold text-center rounded-lg md:text-2xl hover:text-orange-600 hover:bg-gray-300/30"
			>Michael Li</a
		>
		<div class="hidden flex-row gap-6 sm:flex">
			{#each links as link}
				<TopNavLink href={link.href} label={link.label} />
			{/each}
		</div>
		<div class="hidden gap-2 sm:flex md:w-36">
			<ExternalIconLink href={githubUrl}>
				<GithubIcon size={20} />
			</ExternalIconLink>
			<ExternalIconLink href={linkedinUrl}>
				<LinkedinIcon size={20} />
			</ExternalIconLink>
		</div>
		<div class="sm:hidden">
			<Sheet.Root bind:open={sheetOpen}>
				<Sheet.Trigger class="align-middle">
					<MenuIcon />
				</Sheet.Trigger>
				<Sheet.Content side="top">
					<Sheet.Header><Sheet.Title>Michael Li</Sheet.Title></Sheet.Header>
					<div class="mx-4">
						{#each links as link}
							<MenuNavLink
								href={link.href}
								label={link.label}
								onclick={() => {
									sheetOpen = false;
								}}
							/>
						{/each}
					</div>
					<Sheet.Footer>
						<div class="flex gap-2 w-32">
							<ExternalIconLink href={githubUrl}>
								<GithubIcon size={20} />
							</ExternalIconLink>
							<ExternalIconLink href={linkedinUrl}>
								<LinkedinIcon size={20} />
							</ExternalIconLink>
						</div>
					</Sheet.Footer>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</nav>
