<script lang="ts">
  import AboutMe from "$lib/components/AboutMe.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import MdNotebookCard from "$lib/components/cards/demos/MDNotebookCard.svelte";

  let mountComplete = false;
  onMount(() => {
    mountComplete = true;
  });
</script>

<div class="flex flex-col">
  {#if mountComplete}
    <div transition:fade class="my-2">
      <AboutMe />
    </div>
  {/if}
  <div>
    <MdNotebookCard />
  </div>
</div>
