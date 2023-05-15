<script>
  import Card from "$lib/Card.svelte";
  import InvhHousingData from "./InvhHousingData.md";
  import TinywarsRankedStatistics from "./TinywarsRankedStatistics.md";
  import LpTubeCutting from "./LpTubeCutting.md";
</script>

<article class="prose">
  <h2>Notebooks</h2>
  <p>Data analysis and small projects completed in jupyter notebook</p>
</article>

<hr />

<Card
  img_src="/card_images/invh_house_rental_data.png"
  card_title="INVH Housing Data Analysis"
  github_link="https://github.com/magicalpuffin/Py-Notebooks/tree/main/invh_house_rental_data"
>
  <InvhHousingData />
</Card>

<Card
  img_src="/card_images/tinywars_ranked_statistics.png"
  card_title="Tiny Wars Ranked Statistics"
  github_link="https://github.com/magicalpuffin/Py-Notebooks/tree/main/TinyWars_ranked_statistics"
>
  <TinywarsRankedStatistics />
</Card>

<Card
  img_src="/card_images/lp_tube_cutting.png"
  card_title="Linear Programming Tube Cutting"
  github_link="https://github.com/magicalpuffin/Py-Notebooks/tree/main/lp_tube_cutting"
>
  <LpTubeCutting />
</Card>
