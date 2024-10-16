<script lang="ts">

  import { NewWindowButton, GithubButton } from "$lib/components/buttons";

  export let title:string
  export let detailUrl: string | undefined = undefined
  export let githubUrl: string | undefined = undefined
  export let imgSrc: string
</script>

<div class="rounded-2xl border shadow-lg md:h-96">
  <div class="flex h-full flex-col">
    <div
      class="bg-base-200 flex flex-row items-center justify-between rounded-t-2xl p-2"
    >
      <div class="text-xl font-bold">{title}</div>
      <div class="gap-4">
        {#if detailUrl}
          <NewWindowButton link={detailUrl} />
        {/if}
        {#if githubUrl}
          <GithubButton link={githubUrl} />
        {/if}
      </div>
    </div>
    <div class="flex h-full flex-col overflow-hidden md:flex-row">
      <img
        class="aspect-square max-h-48 w-full object-cover md:aspect-auto md:h-full md:max-h-none"
        src={imgSrc}
        alt="project screenshot"
      />
      <article class="prose mx-2 my-2">
        <slot/>
      </article>
    </div>
  </div>
</div>
