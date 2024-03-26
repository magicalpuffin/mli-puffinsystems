<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */
  import { markdownToHtml } from "$lib/utils/markdownToHtml";

  import "$lib/styles/github-dark.css";
  import "$lib/styles/blog-styles.css";

  export let content: string;
</script>

<article class="prose">
  {@html markdownToHtml(content)}
</article>
