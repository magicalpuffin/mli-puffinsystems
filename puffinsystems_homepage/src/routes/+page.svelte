<script lang="ts">
  import type { PageData } from "./$types";
  import type { CardContent } from "$lib/types/card";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import AboutMe from "$lib/components/cards/AboutMe.svelte";
  import CardCarousel from "$lib/components/cardCarousel/cardCarousel.svelte";

  export let data: PageData;

  let demoCardList: CardContent[] = data.demoCardList;
  let notebookCardList: CardContent[] = data.notebookCardList;

  // let mountComplete = false;
  // onMount(() => {
  //   mountComplete = true;
  // });
</script>

<div in:fade class="flex flex-col gap-4">
  <h2 class="mx-2 my-2 text-3xl font-bold tracking-widest" id="aboutme">
    About Me
  </h2>
  <AboutMe />
  <CardCarousel cardContentList={demoCardList} carouselName="demo" />
  <CardCarousel cardContentList={notebookCardList} carouselName="notebook" />
</div>
