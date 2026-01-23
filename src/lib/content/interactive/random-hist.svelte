<script lang="ts">
	import {
		randomNormal,
		randomExponential,
		randomUniform,
		randomInt
	} from 'd3-random';
	import { onDestroy, onMount } from 'svelte';
	import BasicHist from './basic-hist.svelte';

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
			min: -3.5,
			max: 3.5,
			binSize: 0.5
		},
		{
			random: randomExponential(1),
			min: 0,
			max: 3.5,
			binSize: 0.25
		},
		{
			random: randomUniform(5),
			min: 0,
			max: 5,
			binSize: 0.25
		}
	];

	const distribution = distributions[randomInt(distributions.length)()];
	// const distribution = distributions[3];

	const values = $derived(
		Array.from({ length: sampleSize }, () => distribution.random())
	);
	let sliceEnd = $derived(incrementSize);

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

<BasicHist
	class="p-2 w-full h-16 rounded-xl border md:h-auto aspect-auto md:min-h-[50px]"
	values={values.slice(0, sliceEnd)}
	min={distribution.min}
	max={distribution.max}
	binSize={distribution.binSize}
	axis={false}
/>
