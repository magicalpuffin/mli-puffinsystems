<script lang="ts">
  import { blogList } from "$lib/data/blogData";
  import { slugToTitle } from "$lib/utils/slugToTiltle";
</script>

<div class="container mx-2 my-2 max-w-3xl rounded-lg">
  <article class="prose">
    <h1>Blog</h1>
    <p>
      This page is still in progress. Here are some of the links to some blog
      posts.
    </p>
  </article>
  <div class="my-4 flex flex-col">
    {#each blogList as blogData}
      <a
        class="flex rounded-lg border border-blue-600 px-4 py-4 text-blue-600 shadow-lg hover:bg-blue-600 hover:text-white"
        href="/blog/{blogData.dateId}/{blogData.slug}"
      >
        <p>{blogData.dateId} {slugToTitle(blogData.slug)}</p>
      </a>
    {/each}
  </div>
</div>
