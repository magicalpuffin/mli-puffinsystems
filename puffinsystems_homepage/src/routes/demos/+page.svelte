<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<article class="prose">
  <h1>Demos</h1>
  <p>
    Smaller projects which were quickly created to demonstrate or test a
    concept.
  </p>
</article>

<hr />

{#each data.cards as cardContent}
  <Card {cardContent} />
{/each}
