<script lang="ts">
  import type { CardType } from "$lib/types/card";

  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import OpenInWindowIcon from "$lib/icons/OpenInWindowIcon.svelte";
  import CardTemplate from "$lib/components/CardTemplate.svelte";

  let title = "Markdown Notebook";
  let detail_link = "https://demo.puffinsystems.com/markdownnotebook/";
  let github_link = "https://github.com/magicalpuffin/Demo-Markdown-Notebook";
</script>

<CardTemplate>
  <div class="flex h-full flex-col">
    <div
      class="flex flex-row justify-between bg-gray-200 px-4 py-4 text-xl font-bold"
    >
      <div>{title}</div>
      <div class="flex">
        <a
          href={detail_link}
          class="rounded-full text-black hover:text-blue-600"
          ><OpenInWindowIcon /></a
        >
        <a
          href={github_link}
          class="rounded-full text-black hover:text-blue-600"><GithubIcon /></a
        >
      </div>
    </div>
    <div class="flex h-full flex-row overflow-hidden">
      <img
        class="h-full"
        src={"/images/card_image/demo_md_notebook.png"}
        alt=""
      />
      <article class="prose">
        <p>
          A single page app markdown editor. Create, edit and save markdown
          notebooks. svelte, tailwindcss, ace, S3 A single page app markdown
          editor. Create, edit and save markdown notebooks. svelte, tailwindcss,
          ace, S3 A single page app markdown editor. Create, edit and save
          markdown notebooks. svelte, tailwindcss, ace, S3 A single page app
          markdown editor. Create, edit and save markdown notebooks. svelte,
          tailwindcss, ace, S3 A single page app markdown editor. Create, edit
          and save markdown notebooks. svelte, tailwindcss, ace, S3
        </p>
      </article>
    </div>
  </div>
</CardTemplate>
