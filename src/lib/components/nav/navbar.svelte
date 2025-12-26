<script lang="ts">
	import { onMount } from 'svelte';
	import { MenuIcon } from '@lucide/svelte';
	import { GitHubIcon, LinkedInIcon } from '$lib/components/icons';
	import * as Sheet from '$lib/components/ui/sheet';
	import TopNavLink from './top-nav-link.svelte';
	import MenuNavLink from './menu-nav-link.svelte';
	import ExternalIconLink from './external-icon-link.svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	interface Props {
		links: { href: string; label: string; scrollId: string }[];
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

		links.forEach((sec) => {
			const el = document.getElementById(sec.scrollId);
			if (el) observer.observe(el);
		});
	};

	// Register scroll listener
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		// observeSections();
		// if (page.url.pathname.startsWith('/blog')) {
		// 	active = 'blog';
		// }

		return () => window.removeEventListener('scroll', handleScroll);
	});

	afterNavigate(() => {
		// headings disappear on nav
		observeSections();

		// check if on blog path
		if (page.url.pathname.startsWith('/blog')) {
			active = 'blog';
		}
	});

	let sheetOpen = $state(false);
</script>

<nav
	class={`fixed top-0 left-0 z-50 w-full bg-white/45 backdrop-blur-md
          transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-full'}`}
>
	<div
		class="mx-auto flex h-12 max-w-4xl items-center justify-between border-b border-secondary px-4"
	>
		<a
			href="/"
			class="my-1 w-36 rounded-lg py-1 text-center font-mono text-lg font-bold hover:bg-secondary/30 hover:text-primary md:text-2xl"
			>Michael Li</a
		>
		<div class="hidden flex-row gap-6 sm:flex">
			{#each links as link}
				<TopNavLink
					href={link.href}
					label={link.label}
					active={active === link.scrollId}
					onclick={() => {
						// active = link.scrollId;
					}}
				/>
			{/each}
		</div>
		<div class="hidden gap-2 sm:flex md:w-36">
			<ExternalIconLink href={githubUrl}>
				<GitHubIcon />
			</ExternalIconLink>
			<ExternalIconLink href={linkedinUrl}>
				<LinkedInIcon />
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
						<div class="flex w-32 gap-2">
							<ExternalIconLink href={githubUrl}>
								<GitHubIcon />
							</ExternalIconLink>
							<ExternalIconLink href={linkedinUrl}>
								<LinkedInIcon />
							</ExternalIconLink>
						</div>
					</Sheet.Footer>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</nav>
