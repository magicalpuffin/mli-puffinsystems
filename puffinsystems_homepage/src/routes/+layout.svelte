<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div>
  <Navbar />
  <main>
    <div class="my-2 flex justify-center">
      <div class="container mx-2 max-w-xl">
        <slot />
      </div>
    </div>
  </main>
</div>
