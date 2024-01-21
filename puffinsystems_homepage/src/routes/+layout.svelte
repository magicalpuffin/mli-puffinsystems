<script>
  import "../app.css";
  import "../github-dark.css";
  import Navbar from "$lib/components/navbar/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar />
<main>
  <div class="mx-2 my-2 flex justify-center">
    <div class="container max-w-3xl">
      <slot />
    </div>
  </div>
</main>
<Footer />
