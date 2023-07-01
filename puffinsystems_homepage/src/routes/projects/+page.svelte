<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { projectCards } from "$lib/data/cardData";
  import { fetchMarkdown } from "$lib/utils/fetchMarkdown";
  import { onMount } from "svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  // let tempText = data.tempText;

  // let promise_tempText: Promise<string>;
  // onMount(() => {
  //   promise_tempText = fetchMarkdown(
  //     "/md_content/card_body/demo_mfg_kanban.md"
  //   );
  // });
</script>

<!-- <article class="prose">
  <h1>Projects</h1>
  <p>Various personal projects</p>
  <div>{@html tempText}</div>
  {#await promise_tempText}
    <p>Loading...</p>
  {:then tempText}
    {@html tempText}
  {/await}
</article> -->

{#each data.cards as cardContent}
  <Card {cardContent} />
{/each}
