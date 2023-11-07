<script lang="ts">
  import type { PageData } from "./$types";
  import type { CardContent } from "$lib/types/card";
  import { fade } from "svelte/transition";

  import AboutMe from "$lib/components/cards/AboutMe.svelte";
  import CardCarousel from "$lib/components/cardCarousel/cardCarousel.svelte";

  export let data: PageData;

  let demoCardList: CardContent[] = data.demoCardList;
  let notebookCardList: CardContent[] = data.notebookCardList;
</script>

<div in:fade class="flex flex-col gap-2">
  <div>
    <h2 class="my-1 text-3xl font-bold tracking-widest" id="aboutme">
      About Me
    </h2>
    <AboutMe />
  </div>
  <div>
    <h2 class="my-1 text-3xl font-bold tracking-widest" id="demos">Demos</h2>
    <CardCarousel cardContentList={demoCardList} carouselName="demo" />
  </div>
  <div>
    <h2 class="my-1 text-3xl font-bold tracking-widest" id="notebooks">
      Notebooks
    </h2>
    <CardCarousel cardContentList={notebookCardList} carouselName="notebook" />
  </div>
</div>
