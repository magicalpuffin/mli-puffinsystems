<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/';

	interface Props {
		id: string;
		label: string;
	}

	let { id, label }: Props = $props();
</script>

<div class="flex flex-row gap-4 items-center my-4">
	<h2 class="text-2xl font-bold tracking-wide" {id}>{label}</h2>
	<Separator class="shrink bg-secondary" />
</div>
