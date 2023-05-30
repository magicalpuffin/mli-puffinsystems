<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div>
  <Navbar />
  <main>
    <div class="container mx-auto my-2 max-w-xl items-center justify-center">
      <slot />
    </div>
  </main>
</div>
