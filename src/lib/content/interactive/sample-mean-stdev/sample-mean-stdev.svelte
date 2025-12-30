<script lang="ts">
	import { bin, mean, range, deviation } from 'd3-array';
	import { randomNormal } from 'd3-random';
	import Button from '$lib/components/ui/button/button.svelte';
	import BasicHist from '../basic-hist.svelte';
	import NormPdf from './norm-pdf.svelte';
	import SampleTable from './sample-table.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';

	const distribution = {
		random: randomNormal(),
		bin: bin()
			.domain([-3.5, 3.5])
			.thresholds(range(-3.5, 3.5, 0.5))
	};

	let samplesSize = $state(10);

	let samples: {
		values: number[];
		mean: number;
		stdev: number;
	}[] = $state([]);

	function addSample() {
		const data = Array.from({ length: samplesSize }, () =>
			distribution.random()
		);
		samples.push({
			values: data,
			mean: mean(data) as number,
			stdev: deviation(data) as number
		});
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
		<div>
			<div>
				<div class="my-2 font-bold">Normal PDF</div>
				<NormPdf />
				<div class="my-2 font-bold">
					Distribution of Sample Standard Deviation
				</div>
				<BasicHist values={samples.map((s) => s.stdev)} axis={true} />
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<div class="grid w-full max-w-sm items-center gap-1.5">
				<Label>Sample Size</Label>
				<Input type="number" min="1" max="100" bind:value={samplesSize} />
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
			<div>Standard Error of Sample Standard Deviation{stderrStdev}</div>
			<div>
				Expected Standard Error of Sample Standard Deviation{expectedStderrStdev}
			</div>
		</div>
	</div>
	<div class="h-64 overflow-x-hidden overflow-y-scroll">
		<SampleTable {samples} />
	</div>
</div>
