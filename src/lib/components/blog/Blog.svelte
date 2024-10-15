<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */
  import type { BlogPost } from "$lib/types/blog";
  import BlogHeader from "./BlogHeader.svelte";
  import BlogContent from "./BlogContent.svelte";

  export let blogPost: BlogPost;
</script>

<BlogHeader
  title={blogPost.title}
  dateCreated={blogPost.date_created}
  dateUpdated={blogPost.date_created.getDate() ==
  blogPost.date_updated.getDate()
    ? undefined
    : blogPost.date_updated}
/>
<div class="divider my-1" />
<BlogContent content={blogPost.content} />
