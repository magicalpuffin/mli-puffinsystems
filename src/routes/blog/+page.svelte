<script lang="ts">
  import type { PageData } from "./$types";
  import type { BlogPost } from "$lib/types/blog";
  import Header from "$lib/components/Header.svelte";

  export let data: PageData;

  let blogPostList: BlogPost[] = data.blogPostList;
</script>

<svelte:head
  ><title>My Blog Posts</title><meta
    name="description"
    content="List of my blog posts"
  /></svelte:head
>

<Header text="My Blog Posts" id="blog" />
<div class="menu bg-base-200 rounded-box mt-2">
  {#each blogPostList as blogPost}
    <li>
      <a href="/blog/{blogPost.post_id}">
        <p>
          {blogPost.date_created.toLocaleDateString()}
          {blogPost.title}
        </p>
      </a>
    </li>
  {/each}
</div>
