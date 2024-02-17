<script lang="ts">
  import type { CardContent } from "$lib/types/card";

  import CarouselMenuButton from "./CarouselMenuButton.svelte";

  export let cardContentList: CardContent[];
  export let carouselName: string;
  export let activeIndex: number;
</script>

<div class="flex gap-1 py-2">
  {#each cardContentList as cardContent, i}
    <CarouselMenuButton
      {carouselName}
      buttonIndex={i}
      buttonActive={i == activeIndex}
    />
  {/each}
</div>
