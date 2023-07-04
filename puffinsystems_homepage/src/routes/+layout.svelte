<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div>
  <Navbar />
  <main>
    <div class="mx-2 my-2 flex justify-center">
      <slot />
    </div>
  </main>
</div>
