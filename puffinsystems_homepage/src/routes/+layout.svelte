<script>
  import "../app.css";
  import Navbar from "$lib/Navbar.svelte";
</script>

<div>
  <Navbar />
  <main>
    <div class="container mx-auto max-w-xl items-center justify-center">
      <slot />
    </div>
  </main>
</div>
