<script>
  import MenuIcon from "$lib/icons/MenuIcon.svelte";
  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<nav class="mx-2 border-b py-4 md:flex md:justify-center">
  <div class="flex items-center justify-between">
    <!-- Logo -->
    <a
      class="px-6 text-xl font-bold text-gray-800 hover:text-blue-400 md:text-2xl"
      href="/"
      >Michael Li
    </a>
    <!-- Mobile menu button -->
    <button
      on:click={toggleNavbar}
      class="flex text-gray-800 hover:text-gray-400 focus:text-gray-400 focus:outline-none md:hidden"
      type="button"
    >
      <MenuIcon />
    </button>
  </div>
  <!-- Nav Links -->
  <div
    class="mt-8 flex-col space-y-4 md:mt-0 md:flex md:flex-row md:items-center md:space-x-10 md:space-y-0 {showMenu
      ? 'flex'
      : 'hidden'}"
  >
    <a class="text-gray-800 hover:text-blue-400" href="/#demos">Demos</a>
    <a class="text-gray-800 hover:text-blue-400" href="/#notebooks">Notebooks</a
    >
    <a class="text-gray-800 hover:text-blue-400" href="/blog">Blog</a>
  </div>
</nav>
