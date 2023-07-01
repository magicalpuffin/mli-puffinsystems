<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<article class="prose">
  <h1>Notebooks</h1>
  <p>Data analysis and small projects completed in jupyter notebook</p>
</article>

<hr />

{#each data.cards as cardContent}
  <Card {cardContent} />
{/each}
