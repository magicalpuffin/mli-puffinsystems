<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import { CalendarIcon, InfoIcon } from "$lib/icons";

  export let title: string;
  export let dateCreated: Date;
  export let dateUpdated: Date | undefined;

  const tooltipText = `Updated: ${dateUpdated?.toLocaleDateString("en-US", {
    weekday: undefined,
    year: "numeric",
    month: "long",
    day: "numeric",
  })}`;
</script>

<Header text={title} id="blogTitle" />
<div
  class="tooltip-bottom flex w-fit gap-2"
  class:tooltip={dateUpdated}
  data-tip={tooltipText}
>
  {#if dateUpdated}
    <CalendarIcon />
    <InfoIcon />
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
