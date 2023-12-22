<script lang="ts">
  import type { PageData } from "./$types";
  import type { BlogPost } from "$lib/types/blog";

  import { fade } from "svelte/transition";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import BlogHeader from "$lib/components/blog/BlogHeader.svelte";

  export let data: PageData;

  let blogPost: BlogPost = data.blogPost;
  let blog_html = data.blog_html;
</script>

<Breadcrumbs />
<div in:fade>
  <BlogHeader {blogPost} />
  <div class="divider" />
  <article class="prose">
    {@html blog_html}
  </article>
</div>
