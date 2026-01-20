<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import Katex from '$lib/components/katex.svelte';

	let samplesSize = $state(30);
	let standardDeviation = $state(1);

	function calcStderrStdev(s: number, n: number) {
		return s / (2 * (n - 1)) ** 0.5;
	}

	function calcStderrVar(s: number, n: number) {
		return s ** 2 * (2 / (n - 1)) ** 0.5;
	}

	let stderrStdev = $derived(calcStderrStdev(standardDeviation, samplesSize));
	let stderrVar = $derived(calcStderrVar(standardDeviation, samplesSize));
</script>

<div class="gap-4 p-4 w-full rounded-2xl border md:grid md:grid-cols-2">
	<div>
		<div class="grid gap-1.5 my-4 w-full">
			<Label>Standard Deviation</Label>
			<div class="flex flex-row gap-2 items-center">
				<div class="w-24"><Katex math="\sigma \ or \ s = " /></div>
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
			<Label>Standard Error of Sample Standard Deviation</Label>
			<div class="flex items-center h-9">
				<div class="w-48">
					<Katex math={'SE(S) \\ or \\ \\hat{SE}(S) = '} />
				</div>
				{stderrStdev.toFixed(3)}
			</div>
		</div>
		<div class="grid gap-1.5 my-4 w-full">
			<Label>Standard Error of Sample Variance</Label>
			<div class="flex items-center h-9">
				<div class="w-48">
					<Katex math={'SE(S^{2}) \\ or \\ \\hat{SE}(S^{2}) = '} />
				</div>
				{stderrVar.toFixed(3)}
			</div>
		</div>
	</div>
</div>
