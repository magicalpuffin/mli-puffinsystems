<script lang="ts">
  import CardTemplate from "$lib/components/cardTemplates/ProjectCard.svelte";

  let title = "Linear Programming Tube Cutting";
  let detail_link = "";
  let github_link =
    "https://github.com/magicalpuffin/Py-Notebooks/tree/main/lp_tube_cutting";
</script>

<CardTemplate {title} {detail_link} {github_link}>
  <div class="flex h-full flex-col overflow-hidden md:flex-row">
    <img
      class="aspect-square h-full max-h-48 object-cover md:h-full md:max-h-none"
      src={"/images/card_image/lp_tube_cutting.png"}
      alt=""
    />
    <article class="prose mx-2 my-2">
      <p>
        Solves a basic tube cutting linear programming problem. Optimizes the
        parts cut on stock material to minimize waste.
      </p>
      <p>jupyter, pulp, pandas</p>
    </article>
  </div>
</CardTemplate>
