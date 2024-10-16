<script lang="ts">
  import ProjectCard from "$lib/components/cardCarousel/ProjectCard.svelte";
  import CarouselMenu from "$lib/components/cardCarousel/CarouselMenu.svelte";

  let carousel: HTMLElement;
  let activeIndex: number = 0;

  function updateActiveIndex() {
    const xLeft = carousel.scrollLeft;
    const xWidth = carousel.clientWidth;

    const activeIndex = Math.round(xLeft / xWidth);

    return activeIndex;
  }
</script>

<!--
<CarouselMenu {cardContentList} {carouselName} {activeIndex} />
-->
<div
  class="carousel w-full"
  bind:this={carousel}
  on:scroll={() => {
    activeIndex = updateActiveIndex();
  }}
>
  <slot/>
</div>
