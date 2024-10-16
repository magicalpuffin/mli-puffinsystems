<script lang="ts">
  import CarouselMenuButton from "./CarouselMenuButton.svelte";

  export let items: {href: string}[];
  export let activeIndex: number;
</script>

<div class="flex gap-1 py-2">
  {#each items as item, i}
    <CarouselMenuButton
      href={item.href}
      buttonNumber={i +1}
      buttonActive={i == activeIndex}
    />
  {/each}
</div>
