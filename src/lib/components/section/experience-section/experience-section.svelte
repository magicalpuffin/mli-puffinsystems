<script lang="ts">
	import { Tabs } from 'bits-ui';
	import { fade } from 'svelte/transition';

	interface Props {
		experiences: {
			name: string;
			title: string;
			duration: string;
			description: string;
		}[];
	}

	let { experiences }: Props = $props();
	let selectedTab = $state(experiences[0].name);
</script>

<Tabs.Root
	bind:value={selectedTab}
	orientation="vertical"
	class="flex flex-col gap-4 m-2 h-96 md:flex-row md:h-64"
>
	<Tabs.List class="flex flex-row w-full md:flex-col h-fit shrink-0 md:w-42">
		{#each experiences as e}
			<Tabs.Trigger
				value={e.name}
				class="flex h-12 w-full items-center border-t-2 px-2 font-medium hover:border-l-orange-600 hover:bg-gray-300/30 hover:text-orange-600 data-[state=active]:border-orange-600 data-[state=active]:text-orange-600 md:border-t-0 md:border-l-2"
				>{e.name}</Tabs.Trigger
			>
		{/each}
	</Tabs.List>
	<div class="w-full">
		{#each experiences as e}
			<Tabs.Content value={e.name}>
				{#if selectedTab === e.name}
					<div transition:fade>
						<h3 class="my-2 text-xl font-semibold">{e.name}</h3>
						<div class="flex flex-row justify-between">
							<span class="font-medium">{e.title}</span><span
								class="text-gray-600">{e.duration}</span
							>
						</div>
						<p
							class="p-4 my-2 border border-orange-600 hover:shadow-xl duration-600"
						>
							{e.description}
						</p>
					</div>
				{/if}
			</Tabs.Content>
		{/each}
	</div>
</Tabs.Root>
