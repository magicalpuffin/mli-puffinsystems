<script lang="ts">
  import CardTemplate from "$lib/components/cardTemplates/ProjectCard.svelte";

  let title = "TinyWars Statistics";
  let detail_link = "";
  let github_link =
    "https://github.com/magicalpuffin/Py-Notebooks/tree/main/TinyWars_ranked_statistics";
  let img_src = "/images/card_image/tinywars_stats.png";
  let img_alt = "";
</script>

<CardTemplate {title} {detail_link} {github_link} {img_src} {img_alt}>
  <p>
    Tiny Wars is a small online game with a ranked ladder. Cleaned the data to
    create various data visualizations about ranked matches.
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
</CardTemplate>
