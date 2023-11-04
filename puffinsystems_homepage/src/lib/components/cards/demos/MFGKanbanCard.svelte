<script lang="ts">
  import CardTemplate from "$lib/components/cardTemplates/ProjectCard.svelte";

  let title = "Manufacturing Kanban";
  let detail_link = "https://demo.puffinsystems.com/manufacturingkanban/";
  let github_link =
    "https://github.com/magicalpuffin/Demo-Manufacturing-Kanban";
  let img_src = "/images/card_image/demo_mfg_kanban.png";
  let img_alt = "";
</script>

<CardTemplate {title} {detail_link} {github_link} {img_src} {img_alt}>
  <p>
    Basic manufacturing kanban board in a single page app. Create parts,
    locations and workorders. Drag and drop to move workorders around.
  </p>
  <p>django, sqlite3, sortable, lambda</p>
  <a href="/blog/2023-07-15/demo-mfg-kanban/">Read More</a>
</CardTemplate>
