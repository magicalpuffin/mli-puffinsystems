<script>
  export let img_src = "";
  export let card_title = "";
  export let github_link = "";
  export let detail_link = "";
</script>

<div class="max-w-xl overflow-hidden rounded py-4 shadow-lg">
  <img class="h-48 w-full object-cover" src={img_src} alt="" />
  <div class="px-6 py-4">
    <div class="mb-2 flex justify-between text-xl font-bold">
      <div>{card_title}</div>
      <div class="flex">
        {#if detail_link}
          <a
            href={detail_link}
            class="rounded-full text-black hover:text-blue-600"
          >
            <svg
              width="24px"
              height="24px"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              ><path
                d="M8 21h12.4a.6.6 0 00.6-.6V3.6a.6.6 0 00-.6-.6H3.6a.6.6 0 00-.6.6V16M3.5 20.5L12 12m0 0v4m0-4H8"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            >
          </a>
        {/if}
        {#if github_link}
          <a
            href={github_link}
            class="rounded-full text-black hover:text-blue-600"
          >
            <svg
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              class="h-6 w-6"
              ><path
                d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
            >
          </a>
        {/if}
      </div>
    </div>
    <!--
      <a
        class="rounded-full border border-blue-600 px-4 py-1 text-sm font-semibold text-blue-600
        hover:border-transparent hover:bg-blue-600 hover:text-white
        focus:font-extrabold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        href={github_link}>Github Link</a
      >
    -->

    <article class="prose">
      <slot />
    </article>
  </div>
</div>
