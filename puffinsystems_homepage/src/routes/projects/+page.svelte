<script lang="ts">
  import type { CardType } from "$lib/types/card";
  import Card from "$lib/components/Card.svelte";

  let notebookCards: CardType[] = [
    {
      img_src: "/card_images/spending_tracker.png",
      github_link: "https://github.com/magicalpuffin/Spending-Tracker",
      detail_link: "https://spendingtracker.puffinsystems.com",
      card_title: "Spending Tracker",
      card_body: `
A basic django web app for tracking your sepending. Create, upload, and categorize transactions.
View a breakdown of your transactions by category over time.

django, postgres, plotly, lambda
`,
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
