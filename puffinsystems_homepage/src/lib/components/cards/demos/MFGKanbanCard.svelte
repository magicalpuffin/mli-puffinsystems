<script lang="ts">
  import CardTemplate from "$lib/components/cardTemplates/ProjectCard.svelte";

  let title = "Manufacturing Kanban";
  let detail_link = "https://demo.puffinsystems.com/manufacturingkanban/";
  let github_link =
    "https://github.com/magicalpuffin/Demo-Manufacturing-Kanban";
</script>

<CardTemplate {title} {detail_link} {github_link}>
  <div class="flex h-full flex-col overflow-hidden md:flex-row">
    <img
      class="aspect-square h-full max-h-48 object-cover md:aspect-auto md:h-full md:max-h-none"
      src={"/images/card_image/demo_mfg_kanban.png"}
      alt=""
    />
    <article class="prose mx-2 my-2">
      <p>
        Basic manufacturing kanban board in a single page app. Create parts,
        locations and workorders. Drag and drop to move workorders around.
      </p>
      <p>django, sqlite3, sortable, lambda</p>
      <a href="/blog/2023-07-15/demo-mfg-kanban/">Read More</a>
    </article>
  </div>
</CardTemplate>
