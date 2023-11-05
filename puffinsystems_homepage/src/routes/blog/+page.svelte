<script lang="ts">
  import type { PageData } from "./$types";
  import type { BlogPost } from "$lib/types/blog";
  import { slugToTitle } from "$lib/utils/slugToTiltle";
  import { fade } from "svelte/transition";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

  export let data: PageData;

  let blogPostList: BlogPost[] = data.blogPostList;
</script>

<Breadcrumbs />
<div in:fade class="container mx-2 my-2 max-w-3xl rounded-lg">
  <article class="prose">
    <h1>Blog</h1>
    <p>
      This page is still in progress. Here are some of the links to some blog
      posts.
    </p>
  </article>
  <div class="menu bg-base-200 rounded-box">
    {#each blogPostList as blogPost}
      <li>
        <a href="/blog/{blogPost.slug_url}">
          <p>{blogPost.date_created} {blogPost.title}</p>
        </a>
      </li>
    {/each}
  </div>
</div>
