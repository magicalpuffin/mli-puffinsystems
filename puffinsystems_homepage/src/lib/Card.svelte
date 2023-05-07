<script>
    export let img_src="";
    export let card_title="";

</script>

<div class="card mt-2">
    <img src={img_src} class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">{card_title}</h5>
        <div class="card-text">
            <slot/>
        </div>
    </div>
</div>

<style>
    .card-img-top{
        height: 200px;
        object-fit: cover;
    }
</style>