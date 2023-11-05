<script lang="ts">
  import type { PageData } from "./$types";
  import type { BlogPost } from "$lib/types/blog";
  import { slugToTitle } from "$lib/utils/slugToTiltle";
  import { fade } from "svelte/transition";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

  export let data: PageData;

  let blogPost: BlogPost = data.blogPost;
  let blog_html = data.blog_html;
</script>

<Breadcrumbs />
<div in:fade>
  <h1 class="text-3xl font-bold">
    {blogPost.title}
  </h1>
  <p class="text-md font-light">Created Date: {blogPost.date_created}</p>
  <p class="text-md font-light">Updated Date: {blogPost.date_updated}</p>
  <article class="prose">
    {@html blog_html}
  </article>
</div>
