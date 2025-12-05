<script lang="ts">
	import '../app.css';
	import { Navbar } from '$lib/components/nav';

	let links: { href: string; label: string }[] = [
		{ href: '/#about', label: 'About' },
		{ href: '/#experience', label: 'Experience' },
		{ href: '/#project', label: 'Project' },
		{ href: '/blog', label: 'Blog' }
	];

	let { children } = $props();
</script>

<Navbar
	{links}
	githubUrl="https://github.com/magicalpuffin"
	linkedinUrl="https://www.linkedin.com/in/michael-li-745a13199/"
/>

<main>
	<div class="flex justify-center my-16 mx-4">
		<div class="container max-w-3xl">
			{@render children?.()}
		</div>
	</div>
</main>
