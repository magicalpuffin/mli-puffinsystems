<script lang="ts">
  import OpenNewWindow from "~icons/iconoir/open-new-window";
  export let link: string;
</script>

<a
  href={link}
  class="btn btn-ghost btn-sm"
  target="_blank"
  rel="noopener noreferrer"
  ><p class="hidden md:block">Open</p>
  <OpenNewWindow style="font-size: 1.5em" />
</a>
