<script lang="ts">
	import '../app.css';
	import { Navbar } from '$lib/components/nav';

	let links: { href: string; label: string; scrollId: string }[] = [
		{ href: '/#about', label: 'About', scrollId: 'about' },
		{ href: '/#experience', label: 'Experience', scrollId: 'experience' },
		{ href: '/#project', label: 'Project', scrollId: 'project' },
		{ href: '/blog', label: 'Blog', scrollId: 'blog' }
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
