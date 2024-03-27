<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */
  import { markdownToHtml } from "$lib/utils/markdownToHtml";

  import "$lib/styles/github-dark.css";
  import "$lib/styles/blog-styles.css";

  export let content: string;
</script>

<!-- <article class="base"> -->
<article class="prose">
  <!-- <article class="prose prose-img:mb-0"> -->
  <!-- <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <p>This is a paragraph. <a href="#">This is a link</a>.</p>
  <ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
    <li>Unordered list item 3</li>
  </ul>
  <ol>
    <li>Ordered list item 1</li>
    <li>Ordered list item 2</li>
    <li>Ordered list item 3</li>
  </ol>
  <blockquote>
    This is a blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit.
  </blockquote>
  <pre><code
      >// This is a code block
  console.log("Hello, world!");
  </code></pre> -->
  {@html markdownToHtml(content)}
</article>
