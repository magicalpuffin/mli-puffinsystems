<script lang="ts">
	import { bin, mean, range, deviation } from 'd3-array';
	import { randomNormal } from 'd3-random';
	import Button from '$lib/components/ui/button/button.svelte';
	import BasicHist from '../basic-hist.svelte';
	import NormPdf from './norm-pdf.svelte';
	import SampleTable from './sample-table.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Debounced } from 'runed';
	import Katex from '$lib/components/katex.svelte';

	const distribution = {
		random: randomNormal(),
		bin: bin()
			.domain([-3.5, 3.5])
			.thresholds(range(-3.5, 3.5, 0.5))
	};

	let samplesSize = $state(10);

	let samples: {
		id: number;
		values: number[];
		mean: number;
		stdev: number;
	}[] = $state([]);

	let debouncedSamples = new Debounced(() => samples, 250);

	$effect(() => {
		// reset sample if sample size changes
		if (samples.length > 1) {
			if (samples[0].values.length != samplesSize) {
				clearSample();
			}
		}
	});

	function addSample() {
		const data = Array.from({ length: samplesSize }, () =>
			distribution.random()
		);
		samples = [
			{
				id: samples.length + 1,
				values: data,
				mean: mean(data) as number,
				stdev: deviation(data) as number
			},
			...samples
		];
	}
	function clearSample() {
		samples = [];
	}

	let stderrStdev = $derived.by(() => {
		return deviation(samples.map((s) => s.stdev));
	});
	let expectedStderrStdev = $derived.by(() => {
		return 1 / (2 * (samplesSize - 1)) ** 0.5;
	});
</script>

<div class="aspect-video rounded-xl border p-4">
	<div class="grid grid-cols-2 gap-2">
		<div class="space-y-4">
			<div class="p-2">
				<div class="my-2 font-bold">Normal PDF <Katex math="N(0,1)" /></div>
				<NormPdf />
			</div>
			<div class="p-2">
				<div class="my-2 font-bold">
					Distribution of Sample Stdev <Katex math="s" />
				</div>
				<BasicHist
					values={debouncedSamples.current.map((s) => s.stdev)}
					axis="x"
				/>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<div class="my-4 grid w-full gap-1.5">
				<Label>Sample Size</Label>
				<div class="flex flex-row items-center gap-2">
					<Katex math="n = " /><Input
						type="number"
						min="1"
						max="100"
						bind:value={samplesSize}
					/>
				</div>
			</div>
			<Button
				onclick={() => {
					addSample();
				}}>Sample Data</Button
			>
			<Button
				variant="outline"
				onclick={() => {
					clearSample();
				}}>Clear Data</Button
			>
			<div class="my-4 grid w-full gap-1.5">
				<Label>Standard Error of Sample Standard Deviation</Label>
				<div class="flex flex-row items-center gap-2">
					<Katex math="SE(S)=" />{expectedStderrStdev?.toFixed(3)}
				</div>
			</div>
			{#if samples.length > 2}
				<div class="my-4 grid w-full gap-1.5">
					<Label
						>Estimated Standard Error of Sample Standard Deviation using
						replicate #{samples[0].id}</Label
					>
					<div class="flex flex-row items-center gap-2">
						<Katex math={'\\hat{SE}(S)='} />
						{(
							(samples[0].stdev / (2 * (samples[0].values.length - 1))) **
							0.5
						).toFixed(3)}
					</div>
				</div>
			{/if}
			<div class="my-4 grid w-full gap-1.5">
				<Label
					>Standard Error of Sample Standard Deviation using {samples.length} replicates</Label
				>
				<div class="flex flex-row items-center gap-2">
					{stderrStdev?.toFixed(3)}
				</div>
			</div>
		</div>
	</div>
	<div>
		<SampleTable {samples} />
	</div>
</div>
