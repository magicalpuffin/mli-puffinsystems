<script lang="ts">
  import type { CardContent } from "$lib/types/card";
  import { onMount } from "svelte";
  import ProjectCard from "$lib/components/cardTemplates/ProjectCard.svelte";
  import CarouselButtons from "$lib/components/cardCarousel/carouselButtons.svelte";

  export let cardContentList: CardContent[];
  export let carouselName: string;

  let carousel: HTMLElement;
  let xLeft: number;
  let xWidth: number;
  let xScroll: number;

  function parseScroll() {
    xLeft = carousel.scrollLeft;
    xWidth = carousel.clientWidth;
    xScroll = carousel.scrollWidth;
  }
  onMount(() => {
    parseScroll();
  });

  //   $: console.log({ xLeft, xWidth, xScroll });
</script>

<CarouselButtons {cardContentList} {carouselName} {xLeft} {xWidth} />
<div class="carousel w-full" bind:this={carousel} on:scroll={parseScroll}>
  {#each cardContentList as cardContent, i}
    <div id="{carouselName}-{i + 1}" class="carousel-item w-full">
      <ProjectCard {cardContent} />
    </div>
  {/each}
</div>
