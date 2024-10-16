<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main>
	<div class="flex justify-center my-2 mx-2">
		<div class="container max-w-3xl">
			<slot></slot>
		</div>
	</div>
</main>
<Footer></Footer>
