<script>
    export let images;
    let index = 0;

    let next = function(){
        index = (index + 1) % images.length;
    }

    let previous = function(){
        index = (index - 1) % images.length;
    }

    console.log(images[index]);
    console.log(images);
</script>

<button on:click = {previous}> <i class="fa-solid fa-angle-left"></i></button>

<div style="background-image:url({images[index].urls.regular})"></div>

<button on:click = {next}> <i class="fa-solid fa-angle-right"></i> </button>