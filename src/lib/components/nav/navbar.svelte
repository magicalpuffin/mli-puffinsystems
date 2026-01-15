<script lang="ts">
	import { onMount } from 'svelte';
	import { MenuIcon } from '@lucide/svelte';
	import { GitHubIcon, LinkedInIcon } from '$lib/components/icons';
	import * as Sheet from '$lib/components/ui/sheet';
	import TopNavLink from './top-nav-link.svelte';
	import MenuNavLink from './menu-nav-link.svelte';
	import ExternalLinkIconTemplate from './external-link-icon-template.svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	interface Props {
		links: { href: string; label: string; scrollId: string }[];
		githubUrl: string;
		linkedinUrl: string;
	}

	let { links, githubUrl, linkedinUrl }: Props = $props();

	let lastScrollY = 0;
	let showNavbar = $state(true);
	let sheetOpen = $state(false);
	let activeId = $state('');
	let observer: IntersectionObserver | null = null;

	function handleScroll() {
		const current = window.scrollY;
		showNavbar = current < lastScrollY || current < 10; // always show near top
		lastScrollY = current;
	}

	const observeSections = () => {
		observer?.disconnect();
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				});
			},
			{
				rootMargin: '0px 0px -70% 0px',
				threshold: 0
			}
		);

		links.forEach((sec) => {
			const el = document.getElementById(sec.scrollId);
			if (el) observer?.observe(el);
		});
	};

	// Register scroll listener
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	afterNavigate(() => {
		// due to headings disappearing on nav
		observeSections();

		// workaround due to separate blog url path
		if (page.url.pathname.startsWith('/blog')) {
			activeId = 'blog';
		}
	});
</script>

{#snippet externalIconLinks()}
	<ExternalLinkIconTemplate href={githubUrl}>
		<GitHubIcon />
	</ExternalLinkIconTemplate>
	<ExternalLinkIconTemplate href={linkedinUrl}>
		<LinkedInIcon />
	</ExternalLinkIconTemplate>
{/snippet}

<nav
	class="fixed top-0 left-0 z-50 w-full bg-white/45 backdrop-blur-md
          transition-transform duration-500 {showNavbar
		? 'translate-y-0'
		: '-translate-y-full'}"
>
	<div
		class="flex justify-between items-center px-4 mx-auto max-w-4xl h-12 border-b border-secondary"
	>
		<div class="flex justify-center md:w-40">
			<a
				href="/"
				class="py-1 px-2 font-mono text-lg font-bold text-center rounded-lg md:text-2xl hover:bg-secondary/30 hover:text-primary"
				>Michael Li</a
			>
		</div>
		<div class="hidden flex-row gap-6 h-12 sm:flex">
			{#each links as link}
				<TopNavLink
					href={link.href}
					label={link.label}
					active={activeId === link.scrollId}
				/>
			{/each}
		</div>
		<div class="hidden gap-2 sm:flex md:w-40">
			{@render externalIconLinks()}
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
						<div class="flex gap-2 w-40">
							{@render externalIconLinks()}
						</div>
					</Sheet.Footer>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</nav>
