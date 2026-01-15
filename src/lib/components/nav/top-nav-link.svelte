<script lang="ts">
	interface Props {
		href: string;
		label: string;
		active?: boolean;
		onclick?: () => void;
	}

	let { href, label, active, onclick }: Props = $props();
</script>

<a
	{href}
	{onclick}
	class="flex items-center px-2 h-full border-b-2 border-transparent hover:border-b-primary hover:bg-secondary/30 hover:text-primary"
	class:border-b-primary={active}
	class:text-primary={active}>{label}</a
>
