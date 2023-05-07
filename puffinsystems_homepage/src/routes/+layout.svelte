<script>
    import Navbar  from "$lib/Navbar.svelte";
</script>

<div>
    <Navbar/>
    <main>
        <div class="container mt-2">
            <div class="row justify-content-md-center">
                <div class="col-md-6">
                    <slot/>
                </div>
            </div>
        </div>
    </main>
</div>