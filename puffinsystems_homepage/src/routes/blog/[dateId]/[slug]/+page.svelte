<script lang="ts">
  import type { PageData } from "./$types";
  import { slugToTitle } from "$lib/utils/slugToTiltle";

  export let data: PageData;

  let blog_title = slugToTitle(data.slug);
</script>

<div class="container mx-2 my-2 max-w-3xl rounded-lg border">
  <div class="mx-8 my-4">
    <article class="prose">
      <h1>
        {blog_title}
      </h1>
      <p class="text-md font-light">
        Created Date: {data.date}
      </p>
      <div>{@html data.blog_html}</div>
    </article>
  </div>
</div>
