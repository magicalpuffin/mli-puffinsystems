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
</script>

<nav
	class={`fixed top-0 left-0 z-50 w-full bg-white/45 backdrop-blur-md
          transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-full'}`}
>
	<div class="mx-auto flex h-12 max-w-4xl items-center justify-between border-b px-4">
		<a
			href="/"
			class="my-1 w-36 rounded-lg py-1 text-center font-mono text-lg font-bold hover:bg-gray-300/30 hover:text-orange-600 md:text-2xl"
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
			<Sheet.Root>
				<Sheet.Trigger class="align-middle">
					<MenuIcon />
				</Sheet.Trigger>
				<Sheet.Content side="top">
					<Sheet.Header><Sheet.Title>Michael Li</Sheet.Title></Sheet.Header>
					<div class="mx-4">
						{#each links as link}
							<MenuNavLink href={link.href} label={link.label} />
						{/each}
					</div>
					<Sheet.Footer>
						<div class="flex w-32 gap-2">
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
