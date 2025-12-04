<script lang="ts">
	interface Props {
		href: string;
		label: string;
	}

	let { href, label }: Props = $props();
</script>

<a
	{href}
	class="flex h-12 items-center border-b-2 border-transparent px-2 hover:border-b-orange-600 hover:text-orange-600"
	>{label}</a
>
