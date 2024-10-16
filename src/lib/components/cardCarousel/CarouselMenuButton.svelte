<script lang="ts">
  export let carouselName: string;
  export let buttonIndex: number;
  export let buttonActive: boolean;

  const buttonNumber = buttonIndex + 1;

  const href = `#${carouselName}-${buttonNumber}`;
</script>

<a href={href} class="btn btn-sm" class:btn-secondary={buttonActive}
  >{buttonNumber}</a
>
