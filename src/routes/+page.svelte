<script lang="ts">
	import type { PageData } from './$types';
	import { ExperienceSection } from '$lib/components/section/experience-section';
	import SectionHeader from '$lib/components/section/section-header.svelte';
	import BlogMenuItem from '$lib/components/blog/blog-menu-item.svelte';
	import { Button } from '$lib/components/ui/button';
	import ProjectCard from '$lib/components/section/project-card.svelte';
	import RandomHist from '$lib/content/interactive/chart/random-hist.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head
	><title>Michael Li</title><meta
		name="description"
		content="Hello! My name is Michael Li. I'm an industrial engineer interested in using statistics and software to solve manufacturing problems."
	/></svelte:head
>

<div class="my-4 space-y-32">
	<div>
		<div class="flex flex-col-reverse gap-8 md:flex-row">
			<div class="shrink-0">
				<div class="text-xl font-medium">Hello! My name is</div>
				<h1 class="mx-4 font-mono text-6xl font-bold scroll-mt-32" id="about">
					Michael Li
				</h1>
				<div class="text-gray-600">Manufacturing / Statistics / Software</div>
			</div>
			<RandomHist />
		</div>
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
		<div class="space-y-16">
			<ProjectCard
				imgSrc="/blog/20241210/ai_working.png"
				imgAlt="Creating query using prompt"
				githubLink={'https://github.com/magicalpuffin/demo-ai-db-query'}
				externalLink={'https://demo.ai-db-query.puffinsystems.com/'}
				detailsLink={'/blog/creating-ai-sql-query-sveltekit'}
				title="AI Database Query"
				description="Use AI to generate SQL queries based on prompts. Identifies relevant	tables using a vector database to provide additional context."
				tags={['sveltekit', 'typescript', 'cloudflare', 'ai']}
			/>
			<ProjectCard
				imgSrc="/blog/20240117/pandas_to_pydantic.png"
				imgAlt="Using pandas-to-pydantic library"
				imgSide="right"
				githubLink={'https://github.com/magicalpuffin/pandas-to-pydantic'}
				detailsLink={'/blog/pandas-to-pydantic'}
				title="Pandas to Pydantic"
				description="A simple library for converting pandas dataframes into pydantic models."
				tags={['python', 'pandas']}
			/>
		</div>
	</div>
	<div class="mb-16">
		<SectionHeader id="blog" label="Blog" />
		{#each data.blogPosts as blog}
			<BlogMenuItem {blog} />
		{/each}
		<div class="flex justify-center my-2">
			<Button variant="secondary" size="sm" href="/blog">View All</Button>
		</div>
	</div>
</div>
