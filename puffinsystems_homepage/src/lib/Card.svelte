<script>
  export let img_src = "";
  export let card_title = "";
  export let github_link = "";
</script>

<div class="max-w-xl overflow-hidden rounded py-4 shadow-lg">
  <img class="h-48 w-full object-cover" src={img_src} alt="" />
  <div class="px-6 py-4">
    <div class="mb-2 text-xl font-bold">{card_title}</div>
    <a
      class="rounded-full border border-blue-600 px-4 py-1 text-sm font-semibold text-blue-600
      hover:border-transparent hover:bg-blue-600 hover:text-white
      focus:font-extrabold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      href={github_link}>Github Link</a
    >
    <article class="prose">
      <slot />
    </article>
  </div>
</div>
