<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */
  import { markdownToHtml } from "$lib/utils/markdownToHtml";

  import "$lib/styles/github-dark.css";
  import "$lib/styles/blog-styles.css";

  export let content: string;
</script>

<article
  class="prose prose-img:my-0 prose-img:rounded-lg prose-img:mx-auto prose-img:shadow-lg"
>
  {@html markdownToHtml(content)}
</article>
