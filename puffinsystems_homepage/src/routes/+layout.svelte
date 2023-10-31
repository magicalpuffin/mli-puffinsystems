<script>
  import "../app.css";
  import Navbar from "$lib/components/navbar/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div>
  <Navbar />
  <main>
    <div class="mx-2 my-2 flex justify-center">
      <slot />
    </div>
  </main>
  <Footer />
</div>
