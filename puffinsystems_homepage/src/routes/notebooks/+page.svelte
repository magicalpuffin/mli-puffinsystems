<script lang="ts">
  import type { CardType } from "$lib/types/card";
  import Card from "$lib/components/Card.svelte";

  let notebookCards: CardType[] = [
    {
      title: "INVH Housing Data Analysis",
      body_url: "/md_content/card_body/invh_data.md",
      img_src: "/images/card_image/invh_data.png",
      github_link:
        "https://github.com/magicalpuffin/Py-Notebooks/tree/main/invh_house_rental_data",
      detail_link: "",
    },
    {
      title: "Tiny Wars Ranked Statistics",
      body_url: "/md_content/card_body/tinywars_stats.md",
      img_src: "/images/card_image/tinywars_stats.png",
      github_link:
        "https://github.com/magicalpuffin/Py-Notebooks/tree/main/TinyWars_ranked_statistics",
      detail_link: "",
    },
    {
      title: "Linear Programming Tube Cutting",
      body_url: "/md_content/card_body/lp_tube_cutting.md",
      img_src: "/images/card_image/lp_tube_cutting.png",
      github_link:
        "https://github.com/magicalpuffin/Py-Notebooks/tree/main/lp_tube_cutting",
      detail_link: "",
    },
  ];
</script>

<article class="prose">
  <h1>Notebooks</h1>
  <p>Data analysis and small projects completed in jupyter notebook</p>
</article>

<hr />

{#each notebookCards as cardContent}
  <Card {cardContent} />
{/each}
