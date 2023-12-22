<script lang="ts">
  import type { CarouselState } from "$lib/types/carousel";

  export let carouselName: string;
  export let buttonIndex: number;
  export let carouselState: CarouselState;

  const href_link = `#${carouselName}-${buttonIndex + 1}`;

  function isButtonSelected(carouselState: CarouselState, buttonIndex: number) {
    if (typeof carouselState == "undefined") {
      return false;
    }
    let xLeft = carouselState.xLeft;
    let xWidth = carouselState.xWidth;

    let xLeftLower = xWidth * buttonIndex;
    let xLeftUpper = xWidth * (buttonIndex + 1);

    if (xLeft >= xLeftLower && xLeft < xLeftUpper) {
      return true;
    }

    return false;
  }
</script>

<a
  href={href_link}
  class="btn btn-sm {isButtonSelected(carouselState, buttonIndex)
    ? 'btn-secondary'
    : ''}">{buttonIndex + 1}</a
>
