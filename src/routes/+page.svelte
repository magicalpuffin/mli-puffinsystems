<script lang="ts">
	import type { PageData } from './$types';
	import { ExperienceSection } from '$lib/components/section/experience-section';
	import SectionHeader from '$lib/components/section/section-header.svelte';
	import BlogMenuItem from '$lib/components/blog/blog-menu-item.svelte';
	import { Button } from '$lib/components/ui/button';
	import ProjectCard from '$lib/components/section/project-card.svelte';

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

<div class="my-4 space-y-32">
	<div>
		<div class="text-xl font-medium">Hello! My name is</div>
		<h1 class="mx-4 font-mono text-6xl font-bold scroll-mt-16" id="about">
			Michael Li
		</h1>
		<div class="text-gray-600">Manufacturing / Statistics / Software</div>

		<div class="p-4 my-4 border hover:shadow-xl border-primary duration-600">
			<p>
				I'm an industrial engineer interested in using statistics and software
				to solve manufacturing problems. I enjoy thinking about complex systems,
				finding improvements using statistics, and developing software
				solutions.
			</p>
		</div>
	</div>
	<div>
		<SectionHeader id={'experience'} label="Experience" />
		<ExperienceSection
			experiences={[
				{
					name: 'RefleXion Medical',
					title: 'Manufacturing Engineer',
					duration: 'January 2022 - October 2025',
					description: [
						'Supported calibration and acceptance testing of radiotherapy systems',
						'Worked crossfunctionally with R&D to investigate nonconformances, determine root cause, and implement corrective actions',
						'Applied Design of Experiments (DOE) and multivariate regression to model mechanical factors affecting beam alignment, resulting in improved alignment accuracy.',
						'Developed a Python regression and visualization tool (PySide + Plotly) to optimize beam alignment, allowing for tighter specs and reduced process time by 50%.'
					]
				},
				{
					name: 'General Atomics',
					title: 'Intern',
					duration: 'June 2021 - September 2021',
					description: [
						'Developed a Python script to analyze WIP, creating production priority and status reports.',
						'Analyzed lamination consumable utilization using Excel to reduce material shortages.'
					]
				}
			]}
		/>
	</div>
	<div>
		<SectionHeader id="project" label="Project" />
		<ProjectCard
			imgSrc="/content/images/blog/20241210/20241210_ai_working.png"
			imgAlt="Creating query using prompt"
			githubLink={'https://github.com/magicalpuffin/demo-ai-db-query'}
			detailsLink={'/blog/creating-ai-sql-query-sveltekit'}
			title="AI Database Query"
			description="Use AI to generate SQL queries based on prompts. Identifies relevant	tables using a vector database to provide additional context."
			tags={['sveltekit', 'typescript', 'cloudflare', 'ai']}
		/>
	</div>
	<div>
		<SectionHeader id="blog" label="Blog" />
		{#each data.blogPosts as blog}
			<BlogMenuItem {blog} />
		{/each}
		<div class="flex justify-center my-2">
			<Button variant="secondary" size="sm" href="/blog">View All</Button>
		</div>
	</div>
</div>
