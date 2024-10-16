<script lang="ts">

  export let activeIndex: number = 0;
  let carousel: HTMLElement;

  function updateActiveIndex() {
    const xLeft = carousel.scrollLeft;
    const xWidth = carousel.clientWidth;

    const activeIndex = Math.round(xLeft / xWidth);

    return activeIndex;
  }
</script>

<div
  class="carousel w-full"
  bind:this={carousel}
  on:scroll={() => {
    activeIndex = updateActiveIndex();
  }}
>
  <slot/>
</div>
