<script lang="ts">
	interface Props {
		href: string;
		label: string;
		onclick?: () => void;
	}

	let { href, label, onclick }: Props = $props();
</script>

<a
	{href}
	{onclick}
	class="flex items-center px-2 h-12 border-l-2 hover:text-orange-600 hover:border-l-orange-600"
	>{label}</a
>
