<script lang="ts">
  export let carouselName: string;
  export let buttonIndex: number;
  export let buttonActive: boolean;

  const href_link = `#${carouselName}-${buttonIndex + 1}`;
</script>

<a href={href_link} class="btn btn-sm" class:btn-secondary={buttonActive}
  >{buttonIndex + 1}</a
>
