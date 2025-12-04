<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/';

	interface Props {
		id: string;
		label: string;
	}

	let { id, label }: Props = $props();
</script>

<div class="flex flex-row items-center gap-4">
	<h2 class="text-2xl font-bold" {id}>{label}</h2>
	<Separator class="shrink" />
</div>
