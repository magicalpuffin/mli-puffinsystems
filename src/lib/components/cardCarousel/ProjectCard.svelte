<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */

  import type { CardContent } from "$lib/types/card";

  import { NewWindowButton, GithubButton } from "$lib/components/buttons";
  //import { markdownToHtml } from "$lib/utils/markdownToHtml";

  export let cardContent: CardContent;
</script>

<div class="rounded-2xl border shadow-lg md:h-96">
  <div class="flex h-full flex-col">
    <div
      class="bg-base-200 flex flex-row items-center justify-between rounded-t-2xl p-2"
    >
      <div class="text-xl font-bold">{cardContent.title}</div>
      <div class="gap-4">
        {#if cardContent.detail_url}
          <NewWindowButton link={cardContent.detail_url} />
        {/if}
        {#if cardContent.github_url}
          <GithubButton link={cardContent.github_url} />
        {/if}
      </div>
    </div>
    <div class="flex h-full flex-col overflow-hidden md:flex-row">
      <img
        class="aspect-square max-h-48 w-full object-cover md:aspect-auto md:h-full md:max-h-none"
        src={cardContent.img_src}
        alt="project screenshot"
      />
      <article class="prose mx-2 my-2">
        <!--
        {@html markdownToHtml(cardContent.content)}
        -->
      </article>
    </div>
  </div>
</div>
