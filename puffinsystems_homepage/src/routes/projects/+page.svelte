<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { projectCards } from "$lib/data/cardData";
</script>

<article class="prose">
  <h1>Projects</h1>
  <p>Various personal projects</p>
</article>

{#each projectCards as cardContent}
  <Card {cardContent} />
{/each}
