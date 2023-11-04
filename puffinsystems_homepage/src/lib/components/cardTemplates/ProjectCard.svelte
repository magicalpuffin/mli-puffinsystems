<script lang="ts">
  import NewWindowButton from "$lib/components/buttons/NewWindowButton.svelte";
  import GithubButton from "$lib/components/buttons/GithubButton.svelte";

  export let title: string;
  export let detail_link: string;
  export let github_link: string;
  export let img_src: string;
  export let img_alt: string;
</script>

<div class="rounded-2xl border shadow-lg md:h-96">
  <div class="flex h-full flex-col">
    <div
      class="bg-base-200 flex flex-row items-center justify-between rounded-t-2xl p-2"
    >
      <div class="text-xl font-bold">{title}</div>
      <div class="gap-4">
        {#if detail_link}
          <NewWindowButton link={detail_link} />
        {/if}
        {#if github_link}
          <GithubButton link={github_link} />
        {/if}
      </div>
    </div>
    <div class="flex h-full flex-col overflow-hidden md:flex-row">
      <img
        class="aspect-square max-h-48 w-full object-cover md:aspect-auto md:h-full md:max-h-none"
        src={img_src}
        alt={img_alt}
      />
      <article class="prose mx-2 my-2">
        <slot />
      </article>
    </div>
  </div>
</div>
