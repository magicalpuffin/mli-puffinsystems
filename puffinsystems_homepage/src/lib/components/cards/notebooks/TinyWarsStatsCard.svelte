<script lang="ts">
  import CardTemplate from "$lib/components/cardTemplates/ProjectCard.svelte";

  let title = "TinyWars Statistics";
  let detail_link = "";
  let github_link =
    "https://github.com/magicalpuffin/Py-Notebooks/tree/main/TinyWars_ranked_statistics";
</script>

<CardTemplate {title} {detail_link} {github_link}>
  <div class="flex h-full flex-col overflow-hidden md:flex-row">
    <img
      class="aspect-square h-full max-h-48 object-cover md:h-full md:max-h-none"
      src={"/images/card_image/tinywars_stats.png"}
      alt=""
    />
    <article class="prose mx-2 my-2">
      <p>
        Tiny Wars is a small online game with a ranked ladder. Cleaned the data
        to create various data visualizations about ranked matches.
      </p>
      <p>jupyter, pandas, plotly</p>
      <p class="my-0">
        <a href="/notebooks/co_matchup_matrix.html">Matchup Matrix</a>
      </p>
      <p class="my-0">
        <a href="/notebooks/co_stats_all.html">CO Statistics</a>
      </p>
      <p class="my-0">
        <a href="/notebooks/map_winrates.html">Map Winrates</a>
      </p>
      <p class="my-0">
        <a href="/notebooks/user_elo.html">User Elo</a>
      </p>
    </article>
  </div>
</CardTemplate>
