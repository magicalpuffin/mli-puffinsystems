<script lang="ts">
	import * as Chart from '$lib/components/ui/chart';
	import { bin, range } from 'd3-array';
	import { cubicInOut } from 'svelte/easing';
	import { BarChart, Highlight, type ChartContextValue } from 'layerchart';

	interface Props {
		values: number[];
	}

	let { values }: Props = $props();

	const bins = $derived.by(() => {
		const b = bin()
			.domain([-3.5, 3.5])
			.thresholds(range(-3.5, 3.5, 0.5))(values);

		b.forEach((b) => {
			Object.assign(b, {
				binLabel: `[${b.x0}, ${b.x1}]`
			});
		});
		return b;
	});

	const chartConfig = {
		// x0: {
		// 	color: '#2563eb'
		// },
		// length: {
		// 	color: '#2563eb'
		// }
	} satisfies Chart.ChartConfig;

	let context = $state<ChartContextValue>();

	// $effect(() => {
	// 	console.log(bins);
	// });
</script>

<Chart.Container config={chartConfig} class="aspect-auto h-8">
	<BarChart
		bind:context
		data={bins}
		axis={false}
		x="binLabel"
		y="length"
		bandPadding={0.1}
		series={[{ key: 'length', label: 'Size', color: 'var(--primary)' }]}
		props={{
			bars: {
				stroke: 'none',
				radius: 5,
				rounded: 'all',
				initialY: context?.height,
				initialHeight: 0,
				motion: {
					y: { type: 'tween', duration: 500, easing: cubicInOut },
					height: { type: 'tween', duration: 500, easing: cubicInOut }
				}
			}
		}}
	>
		{#snippet belowMarks()}
			<Highlight area={{ class: 'fill-muted' }} />
		{/snippet}
		{#snippet tooltip()}
			<Chart.Tooltip />
		{/snippet}
	</BarChart>
</Chart.Container>
