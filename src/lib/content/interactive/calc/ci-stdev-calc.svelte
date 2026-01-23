<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Katex from '$lib/components/katex.svelte';
	import chisquare from '@stdlib/stats-base-dists-chisquare';
	import * as Select from '$lib/components/ui/select/index.js';

	let samplesSize = $state(30);
	let standardDeviation = $state(1);
	let confidence_level = $state(0.95);
	let side = $state('two_sided');

	function calcCiStdev(s: number, n: number, confidence_level: number) {
		const df = n - 1;
		const alpha = 1 - confidence_level;

		if (side === 'two_sided') {
			const q_upper = chisquare.quantile(1 - alpha / 2, df);
			const q_lower = chisquare.quantile(alpha / 2, df);
			const ci_lower = ((df * s ** 2) / q_upper) ** 0.5;
			const ci_upper = ((df * s ** 2) / q_lower) ** 0.5;

			return [ci_lower, ci_upper];
		}
		if (side === 'left_sided') {
			const q_lower = chisquare.quantile(alpha, df);
			const ci_upper = ((df * s ** 2) / q_lower) ** 0.5;
			return [0, ci_upper];
		}
		if (side === 'right_sided') {
			const q_upper = chisquare.quantile(1 - alpha, df);
			const ci_lower = ((df * s ** 2) / q_upper) ** 0.5;
			return [ci_lower, Infinity];
		}
	}

	let ci = $derived(
		calcCiStdev(standardDeviation, samplesSize, confidence_level)
	);
	const sideOptions = [
		{ value: 'left_sided', label: 'Left Sided' },
		{ value: 'right_sided', label: 'Right Sided' },
		{ value: 'two_sided', label: 'Two Sided' }
	];

	const triggerContent = $derived(
		sideOptions.find((f) => f.value === side)?.label ?? 'Select side'
	);
</script>

<div class="gap-4 p-4 w-full rounded-2xl border md:grid md:grid-cols-2">
	<div>
		<div class="grid gap-1.5 my-4 w-full">
			<Label>Standard Deviation</Label>
			<div class="flex flex-row gap-2 items-center">
				<Katex class="w-24" math="s = " />
				<Input type="number" min="0" bind:value={standardDeviation} />
			</div>
		</div>
		<div class="grid gap-1.5 my-4 w-full">
			<Label>Sample Size</Label>
			<div class="flex flex-row gap-2 items-center">
				<Katex class="w-24" math="n = " />
				<Input type="number" min="2" bind:value={samplesSize} />
			</div>
		</div>
		<div class="grid gap-1.5 my-4 w-full">
			<Label>Confidence Level</Label>
			<div class="flex flex-row gap-2 items-center">
				<Katex class="w-24" math="1- \alpha = " />
				<Input
					type="number"
					min="0"
					max="1"
					step="0.01"
					bind:value={confidence_level}
				/>
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
				{#if ci}
					{#if side == 'two_sided'}
						<Katex
							math={`${ci[0].toFixed(3)} \\leq \\sigma \\leq ${ci[1].toFixed(3)}`}
						/>
					{:else if side === 'left_sided'}
						<Katex math="\sigma \leq {ci[1].toFixed(3)}" />
					{:else if side === 'right_sided'}
						<Katex math="{ci[0].toFixed(3)} \leq \sigma" />
					{/if}
				{/if}
			</div>
		</div>
	</div>
</div>
