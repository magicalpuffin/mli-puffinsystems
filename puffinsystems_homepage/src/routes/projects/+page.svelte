<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<article class="prose">
  <h1>Projects</h1>
  <p>Various personal projects</p>
</article>

{#each data.cards as cardContent}
  <Card {cardContent} />
{/each}
