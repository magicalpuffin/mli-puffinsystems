<script lang="ts">
  import InvhDataCard from "$lib/components/cards/notebooks/INVHDataCard.svelte";
  import TinyWarsStatsCard from "$lib/components/cards/notebooks/TinyWarsStatsCard.svelte";
  import LpTubeCuttingCard from "$lib/components/cards/notebooks/LPTubeCuttingCard.svelte";
</script>

<h2 class="mx-2 my-2 text-3xl font-bold tracking-widest" id="notebooks">
  Notebooks
</h2>
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
