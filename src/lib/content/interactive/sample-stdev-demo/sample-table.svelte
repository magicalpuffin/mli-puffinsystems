<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import BasicHist from '../basic-hist.svelte';
	import Katex from '$lib/components/katex.svelte';
	import { fly } from 'svelte/transition';

	interface Props {
		samples: {
			id: number;
			values: number[];
			mean: number;
			stdev: number;
		}[];
	}

	let { samples }: Props = $props();
</script>

<div
	data-slot="table-container"
	class="overflow-y-auto overflow-x-hidden relative my-4 w-full h-56"
>
	<table
		data-slot="table"
		class="w-full text-sm border-collapse not-prose caption-bottom"
	>
		<Table.Header>
			<Table.Row>
				<Table.Head class="sticky top-0 z-10 bg-white">#</Table.Head>
				<Table.Head class="sticky top-0 z-10 bg-white"
					>Size <Katex math="n" /></Table.Head
				>
				<Table.Head class="sticky top-0 z-10 bg-white"
					>Mean <Katex math={'\\hat{x}'} /></Table.Head
				>
				<Table.Head class="sticky top-0 z-10 bg-white"
					>Stdev <Katex math="s" /></Table.Head
				>
				<Table.Head class="sticky top-0 z-10 w-1/2 bg-white"
					>Distribution</Table.Head
				>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each samples as s (s.id)}
				<tr
					data-slot="table-row"
					class="border-b transition-colors data-[state=selected]:bg-muted hover:[&,&>svelte-css-wrapper]:[&>th,td]:bg-muted/50"
					transition:fly={{ x: 50 }}
				>
					<Table.Cell>{s.id}</Table.Cell>
					<Table.Cell>{s.values.length}</Table.Cell>
					<Table.Cell>{s.mean.toFixed(3)}</Table.Cell>
					<Table.Cell>{s.stdev.toFixed(3)}</Table.Cell>
					<Table.Cell
						><BasicHist
							class="h-8 aspect-auto"
							values={s.values}
							grid={false}
							min={-3.5}
							max={3.5}
							binSize={0.5}
						/></Table.Cell
					>
				</tr>
			{/each}
		</Table.Body>
	</table>
</div>
