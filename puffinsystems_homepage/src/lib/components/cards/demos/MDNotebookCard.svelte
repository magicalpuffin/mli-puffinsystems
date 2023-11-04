<script lang="ts">
  import CardTemplate from "$lib/components/cardTemplates/ProjectCard.svelte";

  let title = "Markdown Notebook";
  let detail_link = "https://demo.puffinsystems.com/markdownnotebook/";
  let github_link = "https://github.com/magicalpuffin/Demo-Markdown-Notebook";
  let img_src = "/images/card_image/demo_md_notebook.png";
  let img_alt = "markdown notebook";
</script>

<CardTemplate {title} {detail_link} {github_link} {img_src} {img_alt}>
  <p>
    Create, edit and save markdown notebooks. I created this app to learn Svelte
    and how it could be used with JS libraries such as Ace Editor.
  </p>
  <p>
    All files are kept in local browser storage. Web app was deployed as static
    files on AWS S3.
  </p>
  <a href="/blog/2023-07-12/demo-markdown-notebook/">Read More</a>
</CardTemplate>
