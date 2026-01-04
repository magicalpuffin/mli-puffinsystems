<script lang="ts">
	import { LineChart } from 'layerchart';
	import { curveNatural } from 'd3-shape';
	import * as Chart from '$lib/components/ui/chart/index.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props {
		class?: HTMLAttributes<HTMLDivElement>['class'];
	}

	let { class: className }: Props = $props();

	const chartData = [
		{ x: -3.5, y: 0.001 },
		{ x: -3.4, y: 0.001 },
		{ x: -3.3, y: 0.002 },
		{ x: -3.2, y: 0.002 },
		{ x: -3.1, y: 0.003 },
		{ x: -3.0, y: 0.004 },
		{ x: -2.9, y: 0.006 },
		{ x: -2.8, y: 0.008 },
		{ x: -2.7, y: 0.01 },
		{ x: -2.6, y: 0.014 },
		{ x: -2.5, y: 0.018 },
		{ x: -2.4, y: 0.022 },
		{ x: -2.3, y: 0.028 },
		{ x: -2.2, y: 0.035 },
		{ x: -2.1, y: 0.044 },
		{ x: -2.0, y: 0.054 },
		{ x: -1.9, y: 0.066 },
		{ x: -1.8, y: 0.079 },
		{ x: -1.7, y: 0.094 },
		{ x: -1.6, y: 0.111 },
		{ x: -1.5, y: 0.13 },
		{ x: -1.4, y: 0.15 },
		{ x: -1.3, y: 0.171 },
		{ x: -1.2, y: 0.194 },
		{ x: -1.1, y: 0.218 },
		{ x: -1.0, y: 0.242 },
		{ x: -0.9, y: 0.266 },
		{ x: -0.8, y: 0.29 },
		{ x: -0.7, y: 0.312 },
		{ x: -0.6, y: 0.333 },
		{ x: -0.5, y: 0.352 },
		{ x: -0.4, y: 0.368 },
		{ x: -0.3, y: 0.381 },
		{ x: -0.2, y: 0.391 },
		{ x: -0.1, y: 0.397 },
		{ x: 0.0, y: 0.399 },
		{ x: 0.1, y: 0.397 },
		{ x: 0.2, y: 0.391 },
		{ x: 0.3, y: 0.381 },
		{ x: 0.4, y: 0.368 },
		{ x: 0.5, y: 0.352 },
		{ x: 0.6, y: 0.333 },
		{ x: 0.7, y: 0.312 },
		{ x: 0.8, y: 0.29 },
		{ x: 0.9, y: 0.266 },
		{ x: 1.0, y: 0.242 },
		{ x: 1.1, y: 0.218 },
		{ x: 1.2, y: 0.194 },
		{ x: 1.3, y: 0.171 },
		{ x: 1.4, y: 0.15 },
		{ x: 1.5, y: 0.13 },
		{ x: 1.6, y: 0.111 },
		{ x: 1.7, y: 0.094 },
		{ x: 1.8, y: 0.079 },
		{ x: 1.9, y: 0.066 },
		{ x: 2.0, y: 0.054 },
		{ x: 2.1, y: 0.044 },
		{ x: 2.2, y: 0.035 },
		{ x: 2.3, y: 0.028 },
		{ x: 2.4, y: 0.022 },
		{ x: 2.5, y: 0.018 },
		{ x: 2.6, y: 0.014 },
		{ x: 2.7, y: 0.01 },
		{ x: 2.8, y: 0.008 },
		{ x: 2.9, y: 0.006 },
		{ x: 3.0, y: 0.004 },
		{ x: 3.1, y: 0.003 },
		{ x: 3.2, y: 0.002 },
		{ x: 3.3, y: 0.002 },
		{ x: 3.4, y: 0.001 },
		{ x: 3.5, y: 0.001 }
	];

	const chartConfig = {
		y: { label: 'norm_pdf', color: 'var(--primary)' }
	} satisfies Chart.ChartConfig;
</script>

<Chart.Container config={chartConfig} class={className}>
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
