<script lang="ts">
  import type { PageData } from "./$types";
  import type { BlogPost } from "$lib/types/blog";
  import { fade } from "svelte/transition";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Header from "$lib/components/Header.svelte";

  export let data: PageData;

  let blogPostList: BlogPost[] = data.blogPostList;
</script>

<Breadcrumbs />
<div in:fade class="container mx-2 my-2 max-w-3xl rounded-lg">
  <Header text="Blog" id="blog" />
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
