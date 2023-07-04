<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import AboutMe from "$lib/components/AboutMe.svelte";

  import MdNotebookCard from "$lib/components/cards/demos/MDNotebookCard.svelte";
  import MfgKanbanCard from "$lib/components/cards/demos/MFGKanbanCard.svelte";

  import InvhDataCard from "$lib/components/cards/notebooks/INVHDataCard.svelte";
  import TinyWarsStatsCard from "$lib/components/cards/notebooks/TinyWarsStatsCard.svelte";
  import LpTubeCuttingCard from "$lib/components/cards/notebooks/LPTubeCuttingCard.svelte";

  let mountComplete = false;
  onMount(() => {
    mountComplete = true;
  });
</script>

{#if mountComplete}
  <div transition:fade class="container flex max-w-3xl flex-col gap-4">
    <div class="">
      <h2 class="mx-2 my-2 text-3xl font-bold tracking-widest">About Me</h2>
      <AboutMe />
    </div>
    <div class="">
      <h2 class="mx-2 my-2 text-3xl font-bold tracking-widest">Demos</h2>
      <div class="flex snap-x snap-mandatory flex-row gap-16 overflow-x-scroll">
        <div class="w-full shrink-0 snap-center">
          <MdNotebookCard />
        </div>
        <div class="w-full shrink-0 snap-center">
          <MfgKanbanCard />
        </div>
      </div>
    </div>
    <div class="">
      <h2 class="mx-2 my-2 text-3xl font-bold tracking-widest">Notebooks</h2>
      <div class="flex snap-x snap-mandatory flex-row gap-16 overflow-x-scroll">
        <div class="w-full shrink-0 snap-center">
          <InvhDataCard />
        </div>
        <div class="w-full shrink-0 snap-center">
          <TinyWarsStatsCard />
        </div>
        <div class="w-full shrink-0 snap-center">
          <LpTubeCuttingCard />
        </div>
      </div>
    </div>
  </div>
{/if}
