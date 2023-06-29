<script lang="ts">
  import type { CardType } from "$lib/types/card";
  import Card from "$lib/components/Card.svelte";

  let notebookCards: CardType[] = [
    {
      title: "Spending Tracker",
      body_url: "/md_content/card_body/spending_tracker.md",
      img_src: "/images/card_image/spending_tracker.png",
      github_link: "https://github.com/magicalpuffin/Spending-Tracker",
      detail_link: "https://spendingtracker.puffinsystems.com",
    },
  ];
</script>

<article class="prose">
  <h1>Projects</h1>
  <p>Various personal projects</p>
</article>

{#each notebookCards as cardContent}
  <Card {cardContent} />
{/each}
