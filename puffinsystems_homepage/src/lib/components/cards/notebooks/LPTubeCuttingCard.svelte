<script lang="ts">
  import CardTemplate from "$lib/components/cardTemplates/ProjectCard.svelte";

  let title = "Linear Programming Tube Cutting";
  let detail_link = "";
  let github_link =
    "https://github.com/magicalpuffin/Py-Notebooks/tree/main/lp_tube_cutting";
  let img_src = "/images/card_image/lp_tube_cutting.png";
  let img_alt = "";
</script>

<CardTemplate {title} {detail_link} {github_link} {img_src} {img_alt}>
  <p>
    Solves a basic tube cutting linear programming problem. Optimizes the parts
    cut on stock material to minimize waste.
  </p>
  <p>jupyter, pulp, pandas</p>
</CardTemplate>
