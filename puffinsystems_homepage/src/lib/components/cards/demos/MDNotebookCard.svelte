<script lang="ts">
  import CardTemplate from "$lib/components/CardTemplate.svelte";

  let title = "Markdown Notebook";
  let detail_link = "https://demo.puffinsystems.com/markdownnotebook/";
  let github_link = "https://github.com/magicalpuffin/Demo-Markdown-Notebook";
</script>

<CardTemplate {title} {detail_link} {github_link}>
  <div class="flex h-full flex-col overflow-hidden md:flex-row">
    <img
      class="aspect-square max-h-48 w-full object-cover md:aspect-auto md:h-full md:max-h-none"
      src={"/images/card_image/demo_md_notebook.png"}
      alt=""
    />
    <article class="prose mx-2 my-2">
      <p>
        Create, edit and save markdown notebooks. I created this app to learn
        Svelte and how it could be used with JS libraries such as Ace Editor.
      </p>
      <p>
        All files are kept in local browser storage. Web app was deployed as
        static files on AWS S3.
      </p>
      <a href="/blog/2023-07-12/demo-markdown-notebook/">Read More</a>
    </article>
  </div>
</CardTemplate>
