<script lang="ts">
	import { Tabs } from 'bits-ui';
	import { fade } from 'svelte/transition';

	interface Props {
		experiences: {
			name: string;
			title: string;
			duration: string;
			description: string[];
		}[];
	}

	let { experiences }: Props = $props();
	let selectedTab = $derived(experiences[0].name);
</script>

<Tabs.Root
	bind:value={selectedTab}
	orientation="vertical"
	class="flex flex-col gap-4 m-2 md:flex-row md:h-96 h-fit"
>
	<Tabs.List class="flex flex-row w-full md:flex-col h-fit shrink-0 md:w-42">
		{#each experiences as e}
			<Tabs.Trigger
				value={e.name}
				class="flex h-12 w-full items-center border-t-2 border-secondary px-2 font-medium hover:border-l-primary hover:bg-secondary/30 hover:text-primary data-[state=active]:border-primary data-[state=active]:text-primary md:border-t-0 md:border-l-2"
				>{e.name}</Tabs.Trigger
			>
		{/each}
	</Tabs.List>
	<div class="w-full">
		{#each experiences as e}
			<Tabs.Content value={e.name}>
				{#if selectedTab === e.name}
					<div transition:fade class="group">
						<h3 class="my-2 text-xl font-semibold">{e.name}</h3>
						<div class="flex flex-row justify-between">
							<span class="font-medium">{e.title}</span><span
								class="text-gray-600">{e.duration}</span
							>
						</div>
						<!-- <p -->
						<!-- 	class="p-4 my-2 border hover:shadow-xl border-primary duration-600" -->
						<!-- > -->
						<!-- 	{e.description} -->
						<!-- </p> -->
						<div
							class="p-4 my-2 border group-hover:shadow-xl border-primary duration-600"
						>
							<ul class="pl-4 space-y-2 list-[square] marker:text-primary">
								{#each e.description as line}
									<li>{line}</li>
								{/each}
							</ul>
						</div>
					</div>
				{/if}
			</Tabs.Content>
		{/each}
	</div>
</Tabs.Root>
