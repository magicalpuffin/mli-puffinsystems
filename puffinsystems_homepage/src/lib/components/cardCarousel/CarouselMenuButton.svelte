<script lang="ts">
  export let carouselName: string;
  export let buttonIndex: number;
  export let xLeft: number;
  export let xWidth: number;

  const href_link = `#${carouselName}-${buttonIndex + 1}`;

  let buttonSelected = false;
  if (xLeft >= xWidth * buttonIndex && xLeft < xWidth * (buttonIndex + 1)) {
    buttonSelected = true;
  }
</script>

<a href={href_link} class="btn btn-sm {buttonSelected ? 'btn-secondary' : ''}"
  >{buttonIndex + 1}</a
>
