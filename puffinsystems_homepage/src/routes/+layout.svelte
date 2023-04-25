<script>
    import Navbar  from "./Navbar.svelte";
</script>

<div>
    <Navbar/>

    <main>
        <div class="container mt-2">

            <slot/>
        </div>
    </main>
</div>