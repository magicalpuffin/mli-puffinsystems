<script lang="ts">
  import InvhDataCard from "$lib/components/cards/notebooks/INVHDataCard.svelte";
  import TinyWarsStatsCard from "$lib/components/cards/notebooks/TinyWarsStatsCard.svelte";
  import LpTubeCuttingCard from "$lib/components/cards/notebooks/LPTubeCuttingCard.svelte";
  import { onMount } from "svelte";
  import CarouselDot from "./CarouselDot.svelte";

  // carousel based on:
  // https://stackoverflow.com/questions/64727026/getting-scroll-of-element-in-svelte

  let carousel: HTMLElement;

  // hard coded, dependent on gap set
  let gap_px = 64;

  let xLeft = 0;
  let xWidth = 0;
  let xScroll = 0;

  $: scrollNext = xWidth + gap_px;
  $: scrollPositions = [
    { start: 0, end: scrollNext },
    { start: scrollNext, end: 2 * scrollNext },
    { start: 2 * scrollNext, end: xScroll },
  ];

  function parseScroll() {
    xLeft = carousel.scrollLeft;
    xWidth = carousel.clientWidth;
    xScroll = carousel.scrollWidth;
  }
  function scrollTo(scrollPosition: number) {
    carousel.scrollLeft = scrollPosition;
  }
  onMount(() => {
    parseScroll();
  });
</script>

<h2 class="mx-2 my-2 text-3xl font-bold tracking-widest" id="notebooks">
  Notebooks
</h2>
<!-- <div>{xLeft}</div>
<div>{xWidth}</div>
<div>{xScroll}</div> -->
<div class="mx-2 my-2 flex flex-row gap-1">
  {#each scrollPositions as scrollPosition}
    <CarouselDot
      on:clickDot={(e) => {
        scrollTo(e.detail);
      }}
      positionStart={scrollPosition.start}
      positionEnd={scrollPosition.end}
      {xLeft}
    />
  {/each}
</div>
<div
  bind:this={carousel}
  on:scroll={parseScroll}
  class="flex snap-x snap-mandatory flex-row gap-16 overflow-x-scroll"
>
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
