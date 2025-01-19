<script lang="ts">
	import AboutMe from '$lib/content/AboutMe.svelte';
	import {
		Carousel,
		CarouselCard,
		CarouselMenu
	} from '$lib/components/carousel';
	import Heading1 from '$lib/components/Heading1.svelte';

	let demoCarouselIndex = $state(0);
	let notebookCarouselIndex = $state(0);
</script>

<svelte:head
	><title>Michael Li</title><meta
		name="description"
		content="Michael Li. Personal website showcasing project and blog."
	/></svelte:head
>

<div class="flex flex-col gap-2">
	<div>
		<Heading1 id="aboutme">About Me</Heading1>
		<AboutMe />
	</div>
	<div>
		<Heading1 id="demos">Demos</Heading1>
		<CarouselMenu
			links={['#ai-db-query', '#markdown-notebook', '#manufacturing-kanban']}
			activeIndex={demoCarouselIndex}
		/>
		<Carousel bind:activeIndex={demoCarouselIndex}>
			<div id="ai-db-query" class="w-full carousel-item">
				<CarouselCard
					title="AI DB Query"
					imgSrc="/content/images/blog/20241210/20241210_ai_working.png"
					githubUrl="https://github.com/magicalpuffin/demo-ai-db-query"
				>
					<p>
						Use AI to generate SQL queries based on prompts. Identifies relevant
						tables using a vector database to provide additional context.
					</p>
					<p>SvelteKit, Cloudflare Workers AI, Cloudflare Vectorize</p>
					<a href="blog/creating-ai-sql-query-sveltekit">Read More</a>
				</CarouselCard>
			</div>
			<div id="markdown-notebook" class="w-full carousel-item">
				<CarouselCard
					title="Markdown Notebook"
					imgSrc="/static/content/images/card/demo_md_notebook.png"
					githubUrl="https://github.com/magicalpuffin/Demo-Markdown-Notebook"
				>
					<p>
						Create, edit and save markdown notebooks. This project was created
						when I was first learning Svelte.
					</p>
					<a href="blog/demo-markdown-notebook">Read More</a>
				</CarouselCard>
			</div>
			<div id="manufacturing-kanban" class="w-full carousel-item">
				<CarouselCard
					title="Manufacturing Kanban"
					imgSrc="/static/content/images/card/demo_mfg_kanban.png"
					githubUrl="https://github.com/magicalpuffin/Demo-Manufacturing-Kanban"
				>
					<p>
						Basic manufacturing kanban board. Create parts, locations, and
						workorders. Drag and drop to move workorders around.
					</p>
					<p>SvelteKit, DrizzleORM, tRPC, SortableJS, AWS Lambda</p>
					<a href="blog/demo-manufacturing-kanban-2">Read More</a>
				</CarouselCard>
			</div>
		</Carousel>
	</div>
	<div>
		<Heading1 id="notebooks">Notebooks</Heading1>
		<CarouselMenu
			links={[
				'#linear-programming-tube-cutting',
				'#housing-rental-data-analysis',
				'#tiny-wars-ranked-statistics'
			]}
			activeIndex={notebookCarouselIndex}
		/>
		<Carousel bind:activeIndex={notebookCarouselIndex}>
			<div id="linear-programming-tube-cutting" class="w-full carousel-item">
				<CarouselCard
					title="Linear Programming Tube Cutting"
					imgSrc="/static/content/images/card/lp_tube_cutting.png"
					githubUrl="https://github.com/magicalpuffin/Py-Notebooks/tree/main/lp_tube_cutting"
				>
					<p>
						Solves a basic tube cutting linear programming problem. Optimizes
						the parts cut on stock material to minimize waste.
					</p>
					<p>jupyter, pulp, pandas</p>
				</CarouselCard>
			</div>
			<div id="housing-rental-data-analysis" class="w-full carousel-item">
				<CarouselCard
					title="Housing Rental Data Analysis"
					imgSrc="/static/content/images/card/invh_data.png"
					githubUrl="https://github.com/magicalpuffin/Py-Notebooks/tree/main/invh_house_rental_data"
				>
					<p>
						Developed a model using machine learning to predict market_rent
						given factors such as beds, bath, sqrft and location. Data was
						collected from a web scrapper.
					</p>
					<p>jupyter, pandas, plotly, sklearn</p>
					<a
						href="/static/content/notebooks/market_rent_prediciton_preliminary.htm"
						>Market Rent Prediction Preliminary</a
					>
				</CarouselCard>
			</div>
			<div id="tiny-wars-ranked-statistics" class="w-full carousel-item">
				<CarouselCard
					title="Tiny Wars Ranked Statistics"
					imgSrc="/static/content/images/card/tinywars_stats.png"
					githubUrl="https://github.com/magicalpuffin/Py-Notebooks/tree/main/TinyWars_ranked_statistics"
				>
					<p>
						Tiny Wars is a small online game with a ranked ladder. Cleaned the
						data to create various data visualizations about ranked matches.
					</p>
					<p>jupyter, pandas, plotly</p>
					<ul>
						<li>
							<a href="/static/content/notebooks/co_matchup_matrix.htm"
								>Matchup Matrix</a
							>
						</li>
						<li>
							<a href="/static/content/notebooks/co_stats_all.htm"
								>CO Statistics</a
							>
						</li>
						<li>
							<a href="/static/content/notebooks/map_winrates.htm"
								>Matchup Matrix</a
							>
						</li>
						<li>
							<a href="/static/content/notebooks/user_elo.htm">User Elo</a>
						</li>
					</ul>
				</CarouselCard>
			</div>
		</Carousel>
	</div>
</div>
