<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import CalendarIcon from "~icons/iconoir/calendar";
  import InfoCircleIcon from "~icons/iconoir/info-circle";

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
    <CalendarIcon style="font-size: 1.25em" />
    <InfoCircleIcon style="font-size: 1.25em" />
  {:else}
    <CalendarIcon style="font-size: 1.25em" />
  {/if}
  <p class="text-md font-light">
    {dateCreated.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </p>
</div>
