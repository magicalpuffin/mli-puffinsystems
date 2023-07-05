<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<article class="prose">
  <div>{@html data.blog_html}</div>
</article>
