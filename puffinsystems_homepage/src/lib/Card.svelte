<script>
  export let img_src = "";
  export let card_title = "";
</script>

<div class="max-w-xl overflow-hidden rounded py-4 shadow-lg">
  <img class="h-48 w-full object-cover" src={img_src} alt="" />
  <div class="px-6 py-4">
    <div class="mb-2 text-xl font-bold">{card_title}</div>
    <div>
      <slot />
    </div>
  </div>
</div>
