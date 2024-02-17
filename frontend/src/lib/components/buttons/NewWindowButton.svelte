<script lang="ts">
  import OpenInWindowIcon from "$lib/icons/OpenInWindowIcon.svelte";
  export let link: string;
</script>

<a
  href={link}
  class="btn btn-ghost btn-sm"
  target="_blank"
  rel="noopener noreferrer"
  ><p class="hidden md:block">Open</p>
  <OpenInWindowIcon /></a
>
