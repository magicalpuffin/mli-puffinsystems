<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import BasicHist from '../basic-hist.svelte';

	interface Props {
		samples: {
			values: number[];
			mean: number;
			stdev: number;
		}[];
	}

	let { samples }: Props = $props();
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>#</Table.Head>
			<Table.Head>Sample</Table.Head>
			<Table.Head>Mean</Table.Head>
			<Table.Head>Stdev</Table.Head>
			<Table.Head class="w-1/2">Distribution</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each samples as s, i}
			<Table.Row>
				<Table.Cell>{i + 1}</Table.Cell>
				<Table.Cell>{s.values.length}</Table.Cell>
				<Table.Cell>{s.mean.toFixed(3)}</Table.Cell>
				<Table.Cell>{s.stdev.toFixed(3)}</Table.Cell>
				<Table.Cell
					><BasicHist
						class="aspect-auto h-8"
						values={s.values}
						min={-3.5}
						max={3.5}
						binSize={0.5}
					/></Table.Cell
				>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
