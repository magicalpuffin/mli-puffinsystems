<script lang="ts">
  import type { CardType } from "$lib/types/card";
  import Card from "$lib/components/Card.svelte";

  let notebookCards: CardType[] = [
    {
      img_src: "/card_images/demo_manufacturing_kanban.png",
      github_link: "https://github.com/magicalpuffin/Demo-Manufacturing-Kanban",
      detail_link: "https://demo.puffinsystems.com/manufacturingkanban/",
      card_title: "Demo Manufacturing Kanban",
      card_body: `
Basic manufacturing kanban board in a single page app. Create parts,
locations and workorders. Drag and drop to move workorders around.

django, sqlite3, sortable, lambda
      `,
    },
    {
      img_src: "/card_images/demo_markdown_notebook.png",
      github_link: "https://github.com/magicalpuffin/Demo-Markdown-Notebook",
      detail_link: "https://demo.puffinsystems.com/markdownnotebook/",
      card_title: "Demo Markdown Notebook",
      card_body: `
A single page app markdown editor. Create, edit and save markdown notebooks.

svelte, tailwindcss, ace, S3
      `,
    },
  ];
</script>

<article class="prose">
  <h1>Demos</h1>
  <p>
    Smaller projects which were quickly created to demonstrate or test a
    concept.
  </p>
</article>

<hr />

{#each notebookCards as cardContent}
  <Card {cardContent} />
{/each}
