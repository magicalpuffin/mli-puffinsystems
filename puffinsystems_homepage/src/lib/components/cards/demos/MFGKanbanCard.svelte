<script lang="ts">
  import CardTemplate from "$lib/components/CardTemplate.svelte";

  let title = "Markdown Notebook";
  let detail_link = "https://demo.puffinsystems.com/manufacturingkanban/";
  let github_link =
    "https://github.com/magicalpuffin/Demo-Manufacturing-Kanban";
</script>

<CardTemplate {title} {detail_link} {github_link}>
  <div class="flex h-full flex-row overflow-hidden">
    <img
      class="hidden h-full md:block"
      src={"/images/card_image/demo_mfg_kanban.png"}
      alt=""
    />
    <article class="prose mx-2 my-2">
      <p>
        Basic manufacturing kanban board in a single page app. Create parts,
        locations and workorders. Drag and drop to move workorders around.
      </p>
      <p>django, sqlite3, sortable, lambda</p>
    </article>
  </div>
</CardTemplate>
