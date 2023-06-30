<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { notebookCards } from "$lib/data/cardData";
</script>

<article class="prose">
  <h1>Notebooks</h1>
  <p>Data analysis and small projects completed in jupyter notebook</p>
</article>

<hr />

{#each notebookCards as cardContent}
  <Card {cardContent} />
{/each}
