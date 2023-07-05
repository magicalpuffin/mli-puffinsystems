<script lang="ts">
  import { blogList } from "$lib/data/blogData";
</script>

<div>
  <p>I haven't written any posts yet.</p>
  {#each blogList as blogData}
    <p>{blogData.slug}</p>
  {/each}
</div>
