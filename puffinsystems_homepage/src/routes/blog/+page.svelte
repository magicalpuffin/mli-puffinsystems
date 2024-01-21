<script lang="ts">
  import type { PageData } from "./$types";
  import type { BlogPost } from "$lib/types/blog";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Header from "$lib/components/Header.svelte";

  export let data: PageData;

  let blogPostList: BlogPost[] = data.blogPostList;
</script>

<svelte:head><title>My Blog Posts</title></svelte:head>

<Header text="My Blog Posts" id="blog" />
<div class="menu bg-base-200 rounded-box mt-2">
  {#each blogPostList as blogPost}
    <li>
      <a href="/blog/{blogPost.slug_url}">
        <p>{blogPost.date_created} {blogPost.title}</p>
      </a>
    </li>
  {/each}
</div>
