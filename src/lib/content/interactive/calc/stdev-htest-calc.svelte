<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Katex from '$lib/components/katex.svelte';
	import chisquare from '@stdlib/stats-base-dists-chisquare';
	import * as Select from '$lib/components/ui/select/index.js';

	let samplesSize = $state(30);
	let standardDeviation = $state(1);
	let sigma = $state(1);
	let side = $state('two_tailed');

	function stdev_hypothesis_test(s: number, sigma: number, n: number) {
		const df = n - 1;
		const test_stat = (df * s ** 2) / sigma ** 2;

		if (side == 'two_tailed') {
			const p_value =
				Math.min(
					chisquare.cdf(test_stat, df),
					1 - chisquare.cdf(test_stat, df)
				) * 2;

			return [p_value, test_stat];
		}

		if (side == 'left_tailed') {
			const p_value = chisquare.cdf(test_stat, df);

			return [p_value, test_stat];
		}
		if (side == 'right_tailed') {
			const p_value = 1 - chisquare.cdf(test_stat, df);
			return [p_value, test_stat];
		}
	}

	let htest_result = $derived(
		stdev_hypothesis_test(standardDeviation, sigma, samplesSize)
	);

	const sideOptions = [
		{ value: 'left_tailed', label: 'Left Tailed' },
		{ value: 'right_tailed', label: 'Right Tailed' },
		{ value: 'two_tailed', label: 'Two Tailed' }
	];

	const triggerContent = $derived(
		sideOptions.find((f) => f.value === side)?.label ?? 'Select side'
	);
</script>

<div class="gap-4 p-4 w-full rounded-2xl border md:grid md:grid-cols-2">
	<div>
		<div class="grid gap-1.5 my-4 w-full">
			<Label>Population Standard Deviation</Label>
			<div class="flex flex-row gap-2 items-center">
				<div class="w-24"><Katex math="\sigma = " /></div>
				<Input type="number" min="0" bind:value={sigma} />
			</div>
		</div>
		<div class="grid gap-1.5 my-4 w-full">
			<Label>Sample Standard Deviation</Label>
			<div class="flex flex-row gap-2 items-center">
				<div class="w-24"><Katex math="s = " /></div>
				<Input type="number" min="0" bind:value={standardDeviation} />
			</div>
		</div>
		<div class="grid gap-1.5 my-4 w-full">
			<Label>Sample Size</Label>
			<div class="flex flex-row gap-2 items-center">
				<div class="w-24"><Katex math="n = " /></div>
				<Input type="number" min="2" bind:value={samplesSize} />
			</div>
		</div>
	</div>
	<div>
		<div class="grid gap-1.5 my-4 w-full">
			<Label>Side</Label>
			<Select.Root type="single" bind:value={side}>
				<Select.Trigger class="w-[180px]">
					{triggerContent}
				</Select.Trigger>
				<Select.Content>
					{#each sideOptions as side (side.value)}
						<Select.Item value={side.value} label={side.label}>
							{side.label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
		<div class="grid gap-1.5 my-4 w-full">
			<Label>Confidence Interval</Label>
			<div class="flex items-center h-9">
				{#if htest_result}
					P Value: {htest_result[0].toFixed(3)}
					Test Statistic: {htest_result[1].toFixed(3)}
				{/if}
			</div>
		</div>
	</div>
</div>
