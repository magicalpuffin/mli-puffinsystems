<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let imgsrc: string;
  export let imgalt: string;
</script>

<div class="card md:card-side bg-base-100 border shadow-lg md:h-96">
  <figure class="shrink-0">
    <img
      class="aspect-square max-h-96 w-full object-cover md:aspect-auto"
      src={imgsrc}
      alt={imgalt}
    />
  </figure>
  <div class="card-body flex flex-col gap-0 p-0">
    <div class="bg-base-200 p-2 md:rounded-tr-2xl">
      <h2 class="card-title text-3xl">{title}</h2>
      <p>{subtitle}</p>
    </div>
    <article class="prose p-2">
      <slot />
    </article>
  </div>
</div>
