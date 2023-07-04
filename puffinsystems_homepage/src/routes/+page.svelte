<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import AboutMe from "$lib/components/AboutMe.svelte";
  import MdNotebookCard from "$lib/components/cards/demos/MDNotebookCard.svelte";
  import MfgKanbanCard from "$lib/components/cards/demos/MFGKanbanCard.svelte";

  let mountComplete = false;
  onMount(() => {
    mountComplete = true;
  });
</script>

{#if mountComplete}
  <div transition:fade class="flex flex-col gap-4">
    <div>
      <h2 class="text-3xl font-bold tracking-widest">About Me</h2>
      <AboutMe />
    </div>
    <!-- <div class="max-w-3xl">
      <h2 class="text-3xl font-bold tracking-widest">Demos</h2>
      <div class="flex snap-x snap-mandatory flex-row gap-16 overflow-x-scroll">
        <div class="snap-center md:shrink-0">
          <MdNotebookCard />
        </div>
        <div class="snap-center md:shrink-0">
          <MfgKanbanCard />
        </div>
      </div>
    </div> -->
  </div>
{/if}
