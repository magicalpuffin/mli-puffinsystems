<script lang="ts">
  import type { PageData } from "./$types";
  import type { BlogPost } from "$lib/types/blog";

  import { fade } from "svelte/transition";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import BlogContent from "$lib/components/blog/BlogContent.svelte";

  export let data: PageData;

  let blogPost: BlogPost = data.blogPost;
</script>

<Breadcrumbs />
<div in:fade>
  <BlogContent {blogPost} />
</div>
