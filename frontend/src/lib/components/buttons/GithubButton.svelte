<script lang="ts">
  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  export let link: string;
</script>

<a
  href={link}
  class="btn btn-ghost btn-sm"
  target="_blank"
  rel="noopener noreferrer"
  ><p class="hidden md:block">Github</p>
  <GithubIcon /></a
>
