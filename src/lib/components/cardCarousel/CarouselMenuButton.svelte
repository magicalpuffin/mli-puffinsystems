<script lang="ts">
  export let href: string;
  export let buttonNumber: number
  export let buttonActive: boolean;
</script>

<a href={href} class="btn btn-sm" class:btn-secondary={buttonActive}
  >{buttonNumber}</a
>
