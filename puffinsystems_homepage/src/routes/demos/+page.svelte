<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { demoCards } from "$lib/data/cardData";
</script>

<article class="prose">
  <h1>Demos</h1>
  <p>
    Smaller projects which were quickly created to demonstrate or test a
    concept.
  </p>
</article>

<hr />

{#each demoCards as cardContent}
  <Card {cardContent} />
{/each}
