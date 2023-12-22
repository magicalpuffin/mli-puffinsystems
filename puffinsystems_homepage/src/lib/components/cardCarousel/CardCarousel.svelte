<script lang="ts">
  import type { CardContent } from "$lib/types/card";

  import ProjectCard from "$lib/components/cardCarousel/ProjectCard.svelte";
  import CarouselMenu from "$lib/components/cardCarousel/CarouselMenu.svelte";

  export let cardContentList: CardContent[];
  export let carouselName: string;

  let carousel: HTMLElement;

  let activeIndex: number = 0;

  function parseScroll() {
    const xLeft = carousel.scrollLeft;
    const xWidth = carousel.clientWidth;

    const activeIndex = Math.round(xLeft / xWidth);

    return activeIndex;
  }
</script>

<CarouselMenu {cardContentList} {carouselName} {activeIndex} />
<div
  class="carousel w-full"
  bind:this={carousel}
  on:scroll={() => {
    activeIndex = parseScroll();
  }}
>
  {#each cardContentList as cardContent, i}
    <div id="{carouselName}-{i + 1}" class="carousel-item w-full">
      <ProjectCard {cardContent} />
    </div>
  {/each}
</div>
