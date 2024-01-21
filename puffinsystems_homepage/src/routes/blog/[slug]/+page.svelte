<script lang="ts">
  import type { PageData } from "./$types";
  import type { BlogPost } from "$lib/types/blog";

  import { fade } from "svelte/transition";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import BlogContent from "$lib/components/blog/BlogContent.svelte";
  import "$lib/styles/github-dark.css";
  import "$lib/styles/blog-styles.css";

  export let data: PageData;

  let blogPost: BlogPost = data.blogPost;
</script>

<svelte:head><title>{blogPost.title}</title></svelte:head>

<div in:fade>
  <BlogContent {blogPost} />
</div>
