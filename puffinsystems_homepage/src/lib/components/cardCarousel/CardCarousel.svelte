<script lang="ts">
  import type { CardContent } from "$lib/types/card";
  import type { CarouselState } from "$lib/types/carousel";

  import { onMount } from "svelte";
  import ProjectCard from "$lib/components/cardCarousel/ProjectCard.svelte";
  import CarouselMenu from "$lib/components/cardCarousel/CarouselMenu.svelte";

  export let cardContentList: CardContent[];
  export let carouselName: string;

  let carousel: HTMLElement;

  let carouselState: CarouselState;

  function parseScroll(carousel: HTMLElement) {
    let newCarouselState: CarouselState;

    newCarouselState = {
      xLeft: carousel.scrollLeft,
      xWidth: carousel.clientWidth,
      xScroll: carousel.scrollWidth,
    };

    return newCarouselState;
  }

  onMount(() => {
    carouselState = parseScroll(carousel);
  });
</script>

<CarouselMenu {cardContentList} {carouselName} {carouselState} />
<div
  class="carousel w-full"
  bind:this={carousel}
  on:scroll={() => {
    carouselState = parseScroll(carousel);
  }}
>
  {#each cardContentList as cardContent, i}
    <div id="{carouselName}-{i + 1}" class="carousel-item w-full">
      <ProjectCard {cardContent} />
    </div>
  {/each}
</div>
