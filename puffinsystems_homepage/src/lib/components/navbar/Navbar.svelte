<script>
  import MenuIcon from "$lib/icons/MenuIcon.svelte";
  import NameLogo from "./NameLogo.svelte";
  let showMenu = false;
</script>

<nav class="navbar bg-base-100 border-b">
  <div class="navbar-start">
    <div class="md:hidden">
      <NameLogo />
    </div>
  </div>
  <div class="navbar-center">
    <div class="hidden md:flex">
      <NameLogo />
      <ul class="menu menu-horizontal">
        <li>
          <a class="hover:text-secondary" href="/#demos">Demos</a>
        </li>
        <li>
          <a class="hover:text-secondary" href="/#notebooks">Notebooks</a>
        </li>
        <li>
          <a class="hover:text-secondary" href="/blog">Blog</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="navbar-end">
    <div class="dropdown dropdown-end md:hidden">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div tabindex="0" class="btn btn-ghost">
        <MenuIcon />
      </div>
      <ul
        class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a class="hover:text-secondary" href="/#demos">Demos</a>
        </li>
        <li>
          <a class="hover:text-secondary" href="/#notebooks">Notebooks</a>
        </li>
        <li>
          <a class="hover:text-secondary" href="/blog">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
