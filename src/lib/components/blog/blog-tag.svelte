<script lang="ts">
	interface Props {
		label: string;
	}

	let { label }: Props = $props();
</script>

<span
	class="py-1 px-2 text-xs font-medium rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80"
	>{label}</span
>
