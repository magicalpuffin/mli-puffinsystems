<script lang="ts">
	import { LineChart } from 'layerchart';
	import { curveNatural } from 'd3-shape';
	import * as Chart from '$lib/components/ui/chart/index.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props {
		class?: HTMLAttributes<HTMLDivElement>['class'];
	}

	let { class: className }: Props = $props();

	const chartData = [
		{ n: 10, lower: 0.688, upper: 1.826 },
		{ n: 11, lower: 0.699, upper: 1.755 },
		{ n: 12, lower: 0.708, upper: 1.698 },
		{ n: 13, lower: 0.717, upper: 1.651 },
		{ n: 14, lower: 0.725, upper: 1.611 },
		{ n: 15, lower: 0.732, upper: 1.577 },
		{ n: 16, lower: 0.739, upper: 1.548 },
		{ n: 17, lower: 0.745, upper: 1.522 },
		{ n: 18, lower: 0.75, upper: 1.499 },
		{ n: 19, lower: 0.756, upper: 1.479 },
		{ n: 20, lower: 0.76, upper: 1.461 },
		{ n: 21, lower: 0.765, upper: 1.444 },
		{ n: 22, lower: 0.769, upper: 1.429 },
		{ n: 23, lower: 0.773, upper: 1.415 },
		{ n: 24, lower: 0.777, upper: 1.403 },
		{ n: 25, lower: 0.781, upper: 1.391 },
		{ n: 26, lower: 0.784, upper: 1.38 },
		{ n: 27, lower: 0.788, upper: 1.37 },
		{ n: 28, lower: 0.791, upper: 1.361 },
		{ n: 29, lower: 0.794, upper: 1.352 },
		{ n: 30, lower: 0.796, upper: 1.344 },
		{ n: 31, lower: 0.799, upper: 1.337 },
		{ n: 32, lower: 0.802, upper: 1.329 },
		{ n: 33, lower: 0.804, upper: 1.323 },
		{ n: 34, lower: 0.807, upper: 1.316 },
		{ n: 35, lower: 0.809, upper: 1.31 },
		{ n: 36, lower: 0.811, upper: 1.304 },
		{ n: 37, lower: 0.813, upper: 1.299 },
		{ n: 38, lower: 0.815, upper: 1.294 },
		{ n: 39, lower: 0.817, upper: 1.289 },
		{ n: 40, lower: 0.819, upper: 1.284 },
		{ n: 41, lower: 0.821, upper: 1.28 },
		{ n: 42, lower: 0.823, upper: 1.275 },
		{ n: 43, lower: 0.825, upper: 1.271 },
		{ n: 44, lower: 0.826, upper: 1.267 },
		{ n: 45, lower: 0.828, upper: 1.263 },
		{ n: 46, lower: 0.829, upper: 1.26 },
		{ n: 47, lower: 0.831, upper: 1.256 },
		{ n: 48, lower: 0.832, upper: 1.253 },
		{ n: 49, lower: 0.834, upper: 1.249 },
		{ n: 50, lower: 0.835, upper: 1.246 },
		{ n: 51, lower: 0.837, upper: 1.243 },
		{ n: 52, lower: 0.838, upper: 1.24 },
		{ n: 53, lower: 0.839, upper: 1.237 },
		{ n: 54, lower: 0.841, upper: 1.235 },
		{ n: 55, lower: 0.842, upper: 1.232 },
		{ n: 56, lower: 0.843, upper: 1.229 },
		{ n: 57, lower: 0.844, upper: 1.227 },
		{ n: 58, lower: 0.845, upper: 1.224 },
		{ n: 59, lower: 0.847, upper: 1.222 },
		{ n: 60, lower: 0.848, upper: 1.22 },
		{ n: 61, lower: 0.849, upper: 1.217 },
		{ n: 62, lower: 0.85, upper: 1.215 },
		{ n: 63, lower: 0.851, upper: 1.213 },
		{ n: 64, lower: 0.852, upper: 1.211 },
		{ n: 65, lower: 0.853, upper: 1.209 },
		{ n: 66, lower: 0.854, upper: 1.207 },
		{ n: 67, lower: 0.855, upper: 1.205 },
		{ n: 68, lower: 0.856, upper: 1.203 },
		{ n: 69, lower: 0.857, upper: 1.202 },
		{ n: 70, lower: 0.857, upper: 1.2 },
		{ n: 71, lower: 0.858, upper: 1.198 },
		{ n: 72, lower: 0.859, upper: 1.197 },
		{ n: 73, lower: 0.86, upper: 1.195 },
		{ n: 74, lower: 0.861, upper: 1.193 },
		{ n: 75, lower: 0.862, upper: 1.192 },
		{ n: 76, lower: 0.862, upper: 1.19 },
		{ n: 77, lower: 0.863, upper: 1.189 },
		{ n: 78, lower: 0.864, upper: 1.187 },
		{ n: 79, lower: 0.865, upper: 1.186 },
		{ n: 80, lower: 0.865, upper: 1.184 },
		{ n: 81, lower: 0.866, upper: 1.183 },
		{ n: 82, lower: 0.867, upper: 1.182 },
		{ n: 83, lower: 0.868, upper: 1.18 },
		{ n: 84, lower: 0.868, upper: 1.179 },
		{ n: 85, lower: 0.869, upper: 1.178 },
		{ n: 86, lower: 0.87, upper: 1.177 },
		{ n: 87, lower: 0.87, upper: 1.175 },
		{ n: 88, lower: 0.871, upper: 1.174 },
		{ n: 89, lower: 0.872, upper: 1.173 },
		{ n: 90, lower: 0.872, upper: 1.172 },
		{ n: 91, lower: 0.873, upper: 1.171 },
		{ n: 92, lower: 0.873, upper: 1.17 },
		{ n: 93, lower: 0.874, upper: 1.169 },
		{ n: 94, lower: 0.875, upper: 1.168 },
		{ n: 95, lower: 0.875, upper: 1.167 },
		{ n: 96, lower: 0.876, upper: 1.166 },
		{ n: 97, lower: 0.876, upper: 1.165 },
		{ n: 98, lower: 0.877, upper: 1.164 },
		{ n: 99, lower: 0.877, upper: 1.163 },
		{ n: 100, lower: 0.878, upper: 1.162 }
	];

	const chartConfig = {
		upper: { label: 'CI Upper', color: 'var(--chart-1)' },
		lower: { label: 'CI Lower', color: 'var(--chart-2)' }
	} satisfies Chart.ChartConfig;
</script>

<div class="p-4 w-full rounded-xl border aspect-auto">
	<div class="my-2 text-sm font-bold md:text-base">
		95% Confidence Interval of Standard Deviation vs Sample Size
	</div>
	<Chart.Container config={chartConfig} class={className}>
		<LineChart
			data={chartData}
			x="n"
			axis
			padding={{ left: 50, right: 50, top: 50, bottom: 50 }}
			legend={{ placement: 'top-right' }}
			series={[
				{
					key: 'upper',
					label: chartConfig.upper.label,
					color: chartConfig.upper.color
				},
				{
					key: 'lower',
					label: chartConfig.lower.label,
					color: chartConfig.lower.color
				}
			]}
			props={{
				spline: { curve: curveNatural, motion: 'tween', strokeWidth: 2 },
				highlight: { points: { r: 4 } },
				yAxis: {
					label: 'Confidence Interval Multiple',
					labelPlacement: 'middle',
					classes: { label: 'font-semibold' }
				},
				xAxis: {
					label: 'Sample Size',
					labelPlacement: 'middle',
					classes: { label: 'font-semibold' }
				}
			}}
		>
			{#snippet tooltip()}
				<Chart.Tooltip labelFormatter={(d) => `Sample Size: ${d}`}>
					{#snippet formatter({ name, value })}
						<div
							class="flex items-center text-xs min-w-[130px] text-muted-foreground"
						>
							{chartConfig[name as keyof typeof chartConfig]?.label || name}
							<div
								class="flex gap-0.5 items-baseline font-mono font-medium tabular-nums ms-auto text-foreground"
							>
								s*
								{value.toFixed(3)}
							</div>
						</div>
					{/snippet}
				</Chart.Tooltip>
			{/snippet}
		</LineChart>
	</Chart.Container>
</div>
