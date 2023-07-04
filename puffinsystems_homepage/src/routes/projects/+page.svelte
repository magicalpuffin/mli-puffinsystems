<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import type { PageData } from "./$types";
  import AboutMe from "$lib/components/AboutMe.svelte";
  import MdNotebookCard from "$lib/components/cards/demos/MDNotebookCard.svelte";

  // export let data: PageData;
</script>

<!-- <article class="prose">
  <h1>Projects</h1>
  <p>Various personal projects</p>
</article>

{#each data.cards as cardContent}
  <Card {cardContent} />
{/each} -->

<div class="flex flex-col">
  <AboutMe />
  <!-- <MdNotebookCard /> -->
</div>
<!-- <div class="container flex h-96 max-w-xl flex-col border">
  <h1 class="bg-gray-200 py-2 text-lg">This is a header</h1>
  <div class="flex h-full flex-row overflow-hidden">
    <img class="h-full" src="/images/orange_rectangle.png" alt="" />
    <article class="prose">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </article>
  </div>
</div> -->
