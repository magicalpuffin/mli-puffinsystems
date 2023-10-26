<script>
  import MenuIcon from "$lib/icons/MenuIcon.svelte";
  let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }
</script>

<nav class="navbar flex-col border-b md:flex-row md:justify-center">
  <div class="w-full grow justify-between md:w-auto md:grow-0">
    <!-- Logo -->
    <a class="hover:text-secondary px-6 text-xl font-bold md:text-2xl" href="/"
      >Michael Li
    </a>
    <!-- Mobile menu button -->
    <button
      on:click={toggleNavbar}
      class="btn btn-ghost hover:text-secondary px-6 md:hidden"
      type="button"
    >
      <MenuIcon />
    </button>
  </div>
  <!-- Nav Links -->
  <div
    class="mt-4 flex-col space-y-4 md:mt-0 md:flex md:flex-row md:items-center md:space-x-10 md:space-y-0 {showMenu
      ? 'flex'
      : 'hidden'}"
  >
    <a class="hover:text-secondary" href="/#demos">Demos</a>
    <a class="hover:text-secondary" href="/#notebooks">Notebooks</a>
    <a class="hover:text-secondary" href="/blog">Blog</a>
  </div>
</nav>
