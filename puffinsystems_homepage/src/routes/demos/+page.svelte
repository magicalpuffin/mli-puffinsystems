<script lang="ts">
  import type { CardType } from "$lib/types/card";
  import Card from "$lib/components/Card.svelte";

  let notebookCards: CardType[] = [
    {
      title: "Demo Manufacturing Kanban",
      img_src: "/images/card_image/demo_mfg_kanban.png",
      body_url: "/md_content/card_body/demo_mfg_kanban.md",
      github_link: "https://github.com/magicalpuffin/Demo-Manufacturing-Kanban",
      detail_link: "https://demo.puffinsystems.com/manufacturingkanban/",
    },
    {
      title: "Demo Markdown Notebook",
      img_src: "/images/card_image/demo_md_notebook.png",
      body_url: "/md_content/card_body/demo_md_notebook.md",
      github_link: "https://github.com/magicalpuffin/Demo-Markdown-Notebook",
      detail_link: "https://demo.puffinsystems.com/markdownnotebook/",
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
