<script lang="ts">
	import * as Chart from '$lib/components/ui/chart';
	import { bin, range } from 'd3-array';
	import { cubicInOut } from 'svelte/easing';
	import { BarChart, Highlight, type ChartContextValue } from 'layerchart';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props {
		values: number[];
		min?: number;
		max?: number;
		binSize?: number;
		axis?: boolean | 'x' | 'y';
		grid?: boolean;
		class?: HTMLAttributes<HTMLDivElement>['class'];
	}

	let {
		values,
		min,
		max,
		binSize,
		axis = false,
		grid = true,
		class: className
	}: Props = $props();

	let binMethod = $derived.by(() => {
		if (typeof min !== 'undefined' && typeof max !== 'undefined') {
			return bin()
				.domain([min, max])
				.thresholds(range(min, max, binSize));
		} else {
			return bin();
		}
	});

	const bins = $derived.by(() => {
		const b = binMethod(values);

		b.forEach((b) => {
			Object.assign(b, {
				binLabel: `[${b.x0}, ${b.x1}]`
			});
		});
		return b;
	});

	const chartConfig = {
		length: {
			label: 'Size',
			color: 'var(--primary)'
		}
	} satisfies Chart.ChartConfig;

	let context = $state<ChartContextValue>();
</script>

<Chart.Container config={chartConfig} class={className}>
	<BarChart
		bind:context
		data={bins}
		{axis}
		{grid}
		x="binLabel"
		y="length"
		bandPadding={0.1}
		series={[
			{
				key: 'length',
				label: chartConfig.length.label,
				color: chartConfig.length.color
			}
		]}
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
