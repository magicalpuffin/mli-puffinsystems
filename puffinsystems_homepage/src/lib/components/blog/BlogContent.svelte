<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */
  import type { BlogPost } from "$lib/types/blog";
  import { markdown_to_html } from "$lib/utils/markdown_to_html";
  import BlogHeader from "./BlogHeader.svelte";

  export let blogPost: BlogPost;
</script>

<BlogHeader {blogPost} />
<div class="divider" />
<article class="prose">
  {@html markdown_to_html(blogPost.content)}
</article>
