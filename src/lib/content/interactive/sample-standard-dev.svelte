<script lang="ts">
	import { LineChart } from 'layerchart';
	import { bin, mean, range, deviation } from 'd3-array';
	import { randomNormal } from 'd3-random';
	import { curveNatural } from 'd3-shape';
	import * as Chart from '$lib/components/ui/chart/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import RowHist from './row-hist.svelte';

	const chartData = [
		{ x: -3.5, y: 0.0008726827 },
		{ x: -3.4, y: 0.0012322192 },
		{ x: -3.3, y: 0.0017225689 },
		{ x: -3.2, y: 0.0023840882 },
		{ x: -3.1, y: 0.0032668191 },
		{ x: -3.0, y: 0.0044318484 },
		{ x: -2.9, y: 0.0059525324 },
		{ x: -2.8, y: 0.0079154516 },
		{ x: -2.7, y: 0.0104209348 },
		{ x: -2.6, y: 0.0135829692 },
		{ x: -2.5, y: 0.0175283005 },
		{ x: -2.4, y: 0.0223945303 },
		{ x: -2.3, y: 0.0283270377 },
		{ x: -2.2, y: 0.0354745928 },
		{ x: -2.1, y: 0.043983596 },
		{ x: -2.0, y: 0.0539909665 },
		{ x: -1.9, y: 0.0656158148 },
		{ x: -1.8, y: 0.0789501583 },
		{ x: -1.7, y: 0.0940490774 },
		{ x: -1.6, y: 0.1109208347 },
		{ x: -1.5, y: 0.1295175957 },
		{ x: -1.4, y: 0.1497274656 },
		{ x: -1.3, y: 0.171368592 },
		{ x: -1.2, y: 0.194186055 },
		{ x: -1.1, y: 0.217852177 },
		{ x: -1.0, y: 0.2419707245 },
		{ x: -0.9, y: 0.2660852499 },
		{ x: -0.8, y: 0.2896915528 },
		{ x: -0.7, y: 0.3122539334 },
		{ x: -0.6, y: 0.3332246029 },
		{ x: -0.5, y: 0.3520653268 },
		{ x: -0.4, y: 0.3682701403 },
		{ x: -0.3, y: 0.3813878155 },
		{ x: -0.2, y: 0.391042694 },
		{ x: -0.1, y: 0.3969525475 },
		{ x: 0.0, y: 0.3989422804 },
		{ x: 0.1, y: 0.3969525475 },
		{ x: 0.2, y: 0.391042694 },
		{ x: 0.3, y: 0.3813878155 },
		{ x: 0.4, y: 0.3682701403 },
		{ x: 0.5, y: 0.3520653268 },
		{ x: 0.6, y: 0.3332246029 },
		{ x: 0.7, y: 0.3122539334 },
		{ x: 0.8, y: 0.2896915528 },
		{ x: 0.9, y: 0.2660852499 },
		{ x: 1.0, y: 0.2419707245 },
		{ x: 1.1, y: 0.217852177 },
		{ x: 1.2, y: 0.194186055 },
		{ x: 1.3, y: 0.171368592 },
		{ x: 1.4, y: 0.1497274656 },
		{ x: 1.5, y: 0.1295175957 },
		{ x: 1.6, y: 0.1109208347 },
		{ x: 1.7, y: 0.0940490774 },
		{ x: 1.8, y: 0.0789501583 },
		{ x: 1.9, y: 0.0656158148 },
		{ x: 2.0, y: 0.0539909665 },
		{ x: 2.1, y: 0.043983596 },
		{ x: 2.2, y: 0.0354745928 },
		{ x: 2.3, y: 0.0283270377 },
		{ x: 2.4, y: 0.0223945303 },
		{ x: 2.5, y: 0.0175283005 },
		{ x: 2.6, y: 0.0135829692 },
		{ x: 2.7, y: 0.0104209348 },
		{ x: 2.8, y: 0.0079154516 },
		{ x: 2.9, y: 0.0059525324 },
		{ x: 3.0, y: 0.0044318484 },
		{ x: 3.1, y: 0.0032668191 },
		{ x: 3.2, y: 0.0023840882 },
		{ x: 3.3, y: 0.0017225689 },
		{ x: 3.4, y: 0.0012322192 },
		{ x: 3.5, y: 0.0008726827 }
	];

	const chartConfig = {
		y: { label: 'norm_pdf', color: 'var(--primary)' }
	} satisfies Chart.ChartConfig;

	const distribution = {
		random: randomNormal(),
		bin: bin()
			.domain([-3.5, 3.5])
			.thresholds(range(-3.5, 3.5, 0.5))
	};

	const samplesSize = 10;

	let samples: {
		sampleNum: number;
		data: number[];
		mean: number;
		stdev: number;
	}[] = $state([]);

	function addSample() {
		const data = Array.from({ length: samplesSize }, () =>
			distribution.random()
		);
		samples.push({
			sampleNum: samples.length + 1,
			data: data,
			mean: mean(data),
			stdev: deviation(data)
		});
	}
</script>

<div class="aspect-video rounded-xl border p-4">
	<Chart.Container config={chartConfig} class="h-56">
		<LineChart
			data={chartData}
			x="x"
			axis="x"
			series={[
				{
					key: 'y',
					label: 'norm_pdf',
					color: chartConfig.y.color
				}
			]}
			props={{
				spline: { curve: curveNatural, motion: 'tween', strokeWidth: 2 },
				highlight: { points: { r: 4 } }
			}}
		>
			{#snippet tooltip()}
				<Chart.Tooltip hideLabel />
			{/snippet}
		</LineChart>
	</Chart.Container>
	<Button
		onclick={() => {
			addSample();
		}}>Sample Data</Button
	>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head>#</Table.Head>
				<Table.Head>Sample Size</Table.Head>
				<Table.Head>Mean</Table.Head>
				<Table.Head>Standard Deviation</Table.Head>
				<Table.Head class="w-64">Distribution</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each samples as s}
				<Table.Row>
					<Table.Cell>{s.sampleNum}</Table.Cell>
					<Table.Cell>{samplesSize}</Table.Cell>
					<Table.Cell>{s.mean.toFixed(3)}</Table.Cell>
					<Table.Cell>{s.stdev.toFixed(3)}</Table.Cell>
					<Table.Cell><RowHist values={s.data} /></Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
