<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let positionStart = 0;
  export let positionEnd = 0;
  export let xLeft = 0;

  const dispatch = createEventDispatcher();
</script>

<button
  on:click={() => {
    dispatch("clickDot", positionStart);
    // console.log(positionStart);
    // console.log(positionEnd);
    // console.log(xLeft);
  }}
  class="rounded-full border border-blue-600 px-3 py-3 {xLeft >=
    positionStart && xLeft < positionEnd
    ? 'bg-blue-600'
    : 'bg-white'}"
/>
