<script lang="ts">
  import GithubIcon from "$lib/icons/GithubIcon.svelte";
  import OpenInWindowIcon from "$lib/icons/OpenInWindowIcon.svelte";

  export let title: string;
  export let detail_link: string;
  export let github_link: string;
</script>

<div class="rounded-lg border shadow-lg md:h-96">
  <div class="flex h-full flex-col">
    <div class="flex flex-row justify-between bg-gray-200 px-4 py-4">
      <div class="text-xl font-bold">{title}</div>
      <div class="flex flex-row justify-between gap-4">
        <a
          href={detail_link}
          class="flex flex-row items-center gap-2 rounded-full px-2 text-black hover:border-blue-600 hover:text-blue-600 md:border md:border-black"
          target="_blank"
          rel="noopener noreferrer"
          ><p class="hidden md:block">Open</p>
          <OpenInWindowIcon /></a
        >
        <a
          href={github_link}
          class="flex flex-row items-center gap-2 rounded-full px-2 text-black hover:border-blue-600 hover:text-blue-600 md:border md:border-black"
          target="_blank"
          rel="noopener noreferrer"
          ><p class="hidden md:block">Github</p>
          <GithubIcon /></a
        >
      </div>
    </div>

    <slot />
  </div>
</div>
