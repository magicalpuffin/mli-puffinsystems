<script lang="ts">
  import { blogList } from "$lib/data/blogData";
  import { slugToTitle } from "$lib/utils/slugToTiltle";
  import { fade } from "svelte/transition";
</script>

<div in:fade class="container mx-2 my-2 max-w-3xl rounded-lg">
  <article class="prose">
    <h1>Blog</h1>
    <p>
      This page is still in progress. Here are some of the links to some blog
      posts.
    </p>
  </article>
  <div class="menu bg-base-200 rounded-box">
    {#each blogList as blogData}
      <li>
        <a href="/blog/{blogData.dateId}/{blogData.slug}">
          <p>{blogData.dateId} {slugToTitle(blogData.slug)}</p>
        </a>
      </li>
    {/each}
  </div>
</div>
