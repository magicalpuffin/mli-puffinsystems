<script lang="ts">
	import * as Chart from '$lib/components/ui/chart';
	import { bin, range } from 'd3-array';
	import {
		randomNormal,
		randomExponential,
		randomUniform,
		randomInt,
		randomWeibull
	} from 'd3-random';
	import { cubicInOut } from 'svelte/easing';
	import { BarChart, Highlight, type ChartContextValue } from 'layerchart';
	import { onDestroy, onMount } from 'svelte';

	interface Props {
		sampleSize?: number;
		incrementSize?: number;
		timeoutDuration?: number;
	}

	let {
		sampleSize = 1000,
		incrementSize = 50,
		timeoutDuration = 500
	}: Props = $props();

	const distributions = [
		{
			random: randomNormal(),
			bin: bin()
				.domain([-3.5, 3.5])
				.thresholds(range(-3.5, 3.5, 0.5))
		},
		{
			random: randomExponential(1),
			bin: bin()
				.domain([0, 3.5])
				.thresholds(range(0, 3.5, 0.25))
		},
		{
			random: randomUniform(5),
			bin: bin()
				.domain([0, 5])
				.thresholds(range(0, 5, 0.25))
		}
		// {
		// 	random: randomWeibull(0.9, 6, 0.5),
		// 	bin: bin()
		// .domain([0, 5])
		// .thresholds(range(0, 5, 0.25))
		// }
	];

	const distribution = distributions[randomInt(distributions.length)()];
	// const distribution = distributions[3];

	const values = Array.from({ length: sampleSize }, () =>
		distribution.random()
	);
	let sliceEnd = $state(incrementSize);

	const bins = $derived.by(() => {
		const b = distribution.bin(values.slice(0, sliceEnd));

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

	let interval: number | undefined;

	onMount(() => {
		interval = window.setInterval(() => {
			if (sliceEnd >= sampleSize) {
				clearInterval(interval);
				return;
			}
			sliceEnd += incrementSize;
			// console.log(sliceEnd);
		}, timeoutDuration);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<Chart.Container
	config={chartConfig}
	class="p-2 w-full h-16 rounded-xl border md:h-auto aspect-auto md:min-h-[50px]"
>
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
