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

	function calcStderrStdev(s: number, n: number) {
		return s / (2 * (n - 1)) ** 0.5;
	}

	let stderrStdev = $derived.by(() => {
		return calcStderrStdev(1, samplesSize);
	});
	let estStderrStdev = $derived.by(() => {
		if (samples.length > 0) {
			return calcStderrStdev(samples[0].stdev, samples[0].values.length);
		}
	});
	let replicateStderrStdev = $derived.by(() => {
		return deviation(samples.map((s) => s.stdev));
	});
</script>

<div class="aspect-video rounded-xl border p-4">
	<div class="grid grid-cols-2 gap-2">
		<div class="space-y-4">
			<div class="p-2">
				<div class="my-2 font-bold">Normal PDF <Katex math="N(0,1)" /></div>
				<NormPdf class="aspect-auto h-36" />
			</div>
			<div class="p-2">
				<div class="my-2 font-bold">
					Distribution of Sample Stdev <Katex math="s" />
				</div>
				{#if debouncedSamples.current.length > 2}
					<BasicHist
						class="aspect-auto h-36"
						values={debouncedSamples.current.map((s) => s.stdev)}
						axis="x"
					/>
				{:else}
					<div class="grid aspect-auto h-36 w-full">
						<div class="mx-auto my-4 text-sm italic">
							Sample more data to see distribution
						</div>
					</div>
				{/if}
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
			<Button onclick={addSample}>Sample Data</Button>
			<Button variant="outline" onclick={clearSample}>Clear Data</Button>
			<div class="mt-4 grid w-full gap-1.5">
				<Label>Standard Error of Sample Standard Deviation</Label>
				<div class="flex h-8 flex-row items-center gap-2">
					<Katex math="SE(S)=" />{stderrStdev?.toFixed(3)}
				</div>
			</div>
			<div class="grid w-full gap-1.5">
				<Label
					>Estimated Standard Error of Sample Standard Deviation (using
					replicate #{samples.length > 0 ? samples[0].id : ''})</Label
				>
				<div class="flex h-8 flex-row items-center gap-2">
					<Katex math={'\\hat{SE}(S)='} />
					{estStderrStdev?.toFixed(3)}
				</div>
			</div>
			<div class="grid w-full gap-1.5">
				<Label
					>Standard Deviation of Sample Standard Deviation (using {samples.length}
					replicates)</Label
				>
				<div class="flex h-8 flex-row items-center gap-2">
					{replicateStderrStdev?.toFixed(3)}
				</div>
			</div>
		</div>
	</div>
	<div>
		<SampleTable {samples} />
	</div>
</div>
