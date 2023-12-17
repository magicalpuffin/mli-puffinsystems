<script lang="ts">
  import type { PageData } from "./$types";
  import type { BlogPost } from "$lib/types/blog";
  import { fade } from "svelte/transition";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Header from "$lib/components/Header.svelte";

  export let data: PageData;

  let blogPost: BlogPost = data.blogPost;
  let blog_html = data.blog_html;

  // console.log(blog_html)
  </script>

<Breadcrumbs />
<div in:fade>
  <Header text={blogPost.title} id="blogtitle" />
  <div class="flex">
    <p class="text-md font-light">Created {blogPost.date_created}</p>
    <div class="divider divider-horizontal" />
    <p class="text-md font-light">Updated {blogPost.date_updated}</p>
  </div>
  <div class="divider" />
  <article class="prose">
    {@html blog_html}
  </article>
</div>
