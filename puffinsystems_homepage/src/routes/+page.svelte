<script lang="ts">
  import type { PageData } from "./$types";
  import type { CardContent } from "$lib/types/card";

  import AboutMe from "$lib/components/AboutMe.svelte";
  import CardCarousel from "$lib/components/cardCarousel/CardCarousel.svelte";
  import Header from "$lib/components/Header.svelte";

  export let data: PageData;

  let demoCardList: CardContent[] = data.demoCardList;
  let notebookCardList: CardContent[] = data.notebookCardList;
</script>

<svelte:head><title>Michael Li</title></svelte:head>

<div class="flex flex-col gap-2">
  <div>
    <Header text="About Me" id="aboutme" />
    <AboutMe />
  </div>
  <div>
    <Header text="Demos" id="demos" />
    <CardCarousel cardContentList={demoCardList} carouselName="demo" />
  </div>
  <div>
    <Header text="Notebooks" id="notebooks" />
    <CardCarousel cardContentList={notebookCardList} carouselName="notebook" />
  </div>
</div>
