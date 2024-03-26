<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import { CalendarIcon, CalendarPlusIcon } from "$lib/icons";

  export let title: string;
  export let dateCreated: Date;
  export let dateUpdated: Date | undefined;
</script>

<Header text={title} id="blogTitle" />
<div
  class="tooltip-bottom flex w-fit gap-2"
  class:tooltip={dateUpdated}
  data-tip="Last Updated: {dateUpdated?.toLocaleDateString('en-US', {
    weekday: undefined,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}"
>
  {#if dateUpdated}
    <CalendarPlusIcon />
  {:else}
    <CalendarIcon />
  {/if}
  <p class="text-md font-light">
    {dateCreated.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </p>
</div>
