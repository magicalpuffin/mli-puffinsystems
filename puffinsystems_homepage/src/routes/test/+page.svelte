<script lang="ts">
  import type { PageData } from "./$types";
  import type { CardContent } from "$lib/types/card";
  import MdNotebookCard from "$lib/components/cards/demos/MDNotebookCard.svelte";
  import MfgKanbanCard from "$lib/components/cards/demos/MFGKanbanCard.svelte";
  import { onMount } from "svelte";
  import ProjectCard from "$lib/components/cardTemplates/ProjectCard.svelte";

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

  export let data: PageData;

  let cardContentList: CardContent[] = data.cardContentList;
  //   $: console.log({ xLeft, xWidth, xScroll });
</script>

<div class="py-2">
  {#each cardContentList as cardContent, i}
    <a
      href="#item{i + 1}"
      class="btn btn-sm {xLeft >= xWidth * i && xLeft < xWidth * (i + 1)
        ? 'btn-primary'
        : ''}">{i + 1}</a
    >
  {/each}
</div>
<div class="carousel w-full" bind:this={carousel} on:scroll={parseScroll}>
  {#each cardContentList as cardContent, i}
    <div id="item{i + 1}" class="carousel-item w-full">
      <ProjectCard cardContent={cardContentList[i]} />
    </div>
  {/each}
</div>
