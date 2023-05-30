<script lang="ts">
  import type { CardType } from "$lib/types/card";
  import Card from "$lib/components/Card.svelte";

  let notebookCards: CardType[] = [
    {
      img_src: "/card_images/invh_house_rental_data.png",
      github_link:
        "https://github.com/magicalpuffin/Py-Notebooks/tree/main/invh_house_rental_data",
      detail_link: "",
      card_title: "INVH Housing Data Analysis",
      card_body: `
Developed a model using machine learning to predict market_rent given factors such as beds, bath, sqrft and location.
Data was collected from a webscrapper.

jupyter, pandas, plotly, sklearn

- [Market Rent Prediction Preliminary](/notebooks/market_rent_prediciton_preliminary.html)
      `,
    },
    {
      img_src: "/card_images/tinywars_ranked_statistics.png",
      github_link:
        "https://github.com/magicalpuffin/Py-Notebooks/tree/main/TinyWars_ranked_statistics",
      detail_link: "",
      card_title: "Tiny Wars Ranked Statistics",
      card_body: `
Tiny Wars is a small online game with a ranked ladder. Cleaned the data to
create various data visualizations about ranked matches.

jupyter, pandas, plotly

- [Matchup Matrix](/notebooks/co_matchup_matrix.html)
- [CO Statistics](/notebooks/co_stats_all.html)
- [Map Winrates](/notebooks/map_winrates.html)
- [User ELO](/notebooks/user_elo.html)
      `,
    },
    {
      img_src: "/card_images/lp_tube_cutting.png",
      github_link:
        "https://github.com/magicalpuffin/Py-Notebooks/tree/main/lp_tube_cutting",
      detail_link: "",
      card_title: "Linear Programming Tube Cutting",
      card_body: `
Solves a basic tube cutting linear programming problem. Optimizes the parts
cut on stock material to minimize waste.

jupyter, pulp, pandas
      `,
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
