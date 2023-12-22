<script lang="ts">
  import type { CardContent } from "$lib/types/card";

  // import CarouselMenuButton from "./CarouselMenuButton.svelte";

  export let cardContentList: CardContent[];
  export let carouselName: string;
  export let xLeft: number;
  export let xWidth: number;
</script>

<div class="flex gap-1 py-2">
  {#each cardContentList as cardContent, i}
    <!-- <CarouselMenuButton {carouselName} buttonIndex={i} bind:xLeft bind:xWidth /> -->
    <a
      href="#{carouselName}-{i + 1}"
      class="btn btn-sm {xLeft >= xWidth * i && xLeft < xWidth * (i + 1)
        ? 'btn-secondary'
        : ''}">{i + 1}</a
    >
  {/each}
</div>
