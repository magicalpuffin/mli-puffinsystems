<script lang="ts">
  import MdNotebookCard from "$lib/components/cards/demos/MDNotebookCard.svelte";
  import MfgKanbanCard from "$lib/components/cards/demos/MFGKanbanCard.svelte";
  import { onMount } from "svelte";

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

<div class="py-2">
  <a
    href="#item1"
    class="btn btn-sm {xLeft >= 0 && xLeft < xWidth ? 'btn-primary' : ''}">1</a
  >
  <a
    href="#item2"
    class="btn btn-sm {xLeft >= xWidth && xLeft < xWidth * 2
      ? 'btn-primary'
      : ''}">2</a
  >
</div>
<div class="carousel" bind:this={carousel} on:scroll={parseScroll}>
  <div id="item1" class="carousel-item w-full">
    <MdNotebookCard />
  </div>
  <div id="item2" class="carousel-item w-full">
    <MfgKanbanCard />
  </div>
</div>
