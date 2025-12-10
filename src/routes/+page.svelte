<script lang="ts">
	import type { PageData } from './$types';
	import { ExperienceSection } from '$lib/components/section/experience-section';
	import SectionHeader from '$lib/components/section/section-header.svelte';
	import BlogMenuItem from '$lib/components/blog/blog-menu-item.svelte';
	// import { Button } from '$lib/components/ui/button';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head
	><title>Michael Li</title><meta
		name="description"
		content="Michael Li. Personal website showcasing project and blog."
	/></svelte:head
>

<!-- <Button variant="default">Primary Button</Button> -->
<!-- <Button variant="secondary">Primary Button</Button> -->

<div class="my-4">
	<div class="text-xl font-medium">Hello! My name is</div>
	<h1 class="mx-4 font-mono text-6xl font-bold scroll-mt-16" id="about">
		Michael Li
	</h1>
	<div class="text-gray-600">Manufacturing / Statistics / Software</div>

	<div class="p-4 my-4 border hover:shadow-xl border-primary duration-600">
		<p>
			I'm an industrial engineer interested in using statistics and software to
			solve manufacturing problems. I enjoy thinking about complex systems,
			finding improvements using statistics, and developing software solutions.
		</p>
	</div>
</div>

<div class="my-32">
	<SectionHeader id={'experience'} label="Experience" />
	<ExperienceSection
		experiences={[
			{
				name: 'RefleXion Medical',
				title: 'Manufacturing Engineer',
				duration: 'January 2022 - October 2025',
				description: `Supported the manufacturing of complex radiotherapy systems, including system calibration and
			acceptance testing. Used statistics to understand manufacturing processes and developed a
			linear regression model for mechanical alignment. Released a python application for automating
			alignment calculations.`
			},
			{
				name: 'General Atomics',
				title: 'Intern',
				duration: 'June 2021 - September 2021',
				description: `Industrial engineering intern for aerospace composites.`
			}
		]}
	/>
</div>

<div class="my-32">
	<SectionHeader id="project" label="Project" />
	<div class="flex flex-col gap-4 m-2 md:flex-row">
		<img
			src="https://mli.puffinsystems.com/content/images/blog/20241210/20241210_ai_working.png"
			alt="temp"
			class="object-cover w-96 shadow-xl aspect-video"
		/>
		<div>
			<h3 class="text-xl font-medium">AI DB Query</h3>
			<p class="p-2 border border-primary">
				Use AI to generate SQL queries based on prompts. Identifies relevant
				tables using a vector database to provide additional context.
			</p>
		</div>
	</div>
</div>

<div class="my-32">
	<SectionHeader id="blog" label="Blog" />
	{#each data.blogPosts as blog}
		<BlogMenuItem {blog} />
	{/each}
</div>
