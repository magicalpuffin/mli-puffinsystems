<script lang="ts">
	interface Props {
		href: string;
		label: string;
	}

	let { href, label }: Props = $props();
</script>

<a
	{href}
	class="flex h-12 items-center border-l-2 px-2 hover:border-l-orange-600 hover:text-orange-600"
	>{label}</a
>
