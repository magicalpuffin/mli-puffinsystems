<script>
	import NameLogo from './NameLogo.svelte';
	import NavbarLinks from './NavbarLinks.svelte';
	import MenuIcon from '@lucide/svelte/icons/menu';
</script>

<nav class="border-b navbar bg-base-100">
	<div class="navbar-start">
		<div class="md:hidden">
			<NameLogo />
		</div>
	</div>
	<div class="navbar-center">
		<div class="hidden md:flex">
			<NameLogo />
			<ul class="menu menu-horizontal">
				<NavbarLinks />
			</ul>
		</div>
	</div>
	<div class="navbar-end">
		<div class="md:hidden dropdown dropdown-end">
			<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
			<div tabindex="0" class="btn btn-ghost">
				<MenuIcon />
			</div>
			<ul
				class="p-2 w-52 shadow-sm menu dropdown-content bg-base-100 rounded-box z-1"
			>
				<NavbarLinks />
			</ul>
		</div>
	</div>
</nav>
