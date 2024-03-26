<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import CalendarIcon from "$lib/icons/Calendar.svelte";

  export let title: string;
  export let dateCreated: Date;
  export let dateUpdated: Date;
</script>

<Header text={title} id="blogTitle" />
<div
  class="tooltip tooltip-bottom flex w-fit gap-2"
  data-tip="Last Updated: {dateUpdated.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}"
>
  <CalendarIcon />
  <p class="text-md font-light">
    {dateCreated.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </p>
</div>
