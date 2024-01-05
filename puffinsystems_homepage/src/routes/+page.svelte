<script lang="ts">
  import type { PageData } from "./$types";
  import type { CardContent } from "$lib/types/card";
  import { fade } from "svelte/transition";

  import AboutMe from "$lib/components/AboutMe.svelte";
  import CardCarousel from "$lib/components/cardCarousel/CardCarousel.svelte";
  import Header from "$lib/components/Header.svelte";

  export let data: PageData;

  let demoCardList: CardContent[] = data.demoCardList;
  let notebookCardList: CardContent[] = data.notebookCardList;
</script>

<div in:fade class="flex flex-col gap-2">
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
