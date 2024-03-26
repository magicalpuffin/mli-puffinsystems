<script lang="ts">
  import type { PageData } from "./$types";
  import type { BlogPost } from "$lib/types/blog";

  import { Blog } from "$lib/components/blog";

  export let data: PageData;

  let blogPost: BlogPost = data.blogPost;
</script>

<svelte:head
  ><title>{blogPost.title}</title><meta
    name="description"
    content={blogPost.description}
  /></svelte:head
>

<Blog {blogPost} />
