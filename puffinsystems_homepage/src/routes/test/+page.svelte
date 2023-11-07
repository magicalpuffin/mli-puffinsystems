<script lang="ts">
  import type { PageData } from "./$types";
  import type { CardContent } from "$lib/types/card";
  import { onMount } from "svelte";
  import CardCarousel from "$lib/components/cardCarousel/cardCarousel.svelte";

  export let data: PageData;

  let demoCardList: CardContent[] = data.demoCardList;
  let notebookCardList: CardContent[] = data.notebookCardList;
  //   $: console.log({ xLeft, xWidth, xScroll });
</script>

<CardCarousel cardContentList={demoCardList} carouselName="demo" />
<CardCarousel cardContentList={notebookCardList} carouselName="notebook" />
