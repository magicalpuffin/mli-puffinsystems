<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import type { BlogPost } from "$lib/types/blog";

  export let blogPost: BlogPost;
</script>

<Header text={blogPost.title} id="blogTitle" />
<div class="flex">
  <p class="text-md font-light">Created {blogPost.date_created}</p>
  <div class="divider divider-horizontal" />
  <p class="text-md font-light">Updated {blogPost.date_updated}</p>
</div>
