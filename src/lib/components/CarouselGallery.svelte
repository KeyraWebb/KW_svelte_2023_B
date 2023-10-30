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

<button on:click = {previous}> previous </button>


<img src = {images[index].urls.regular} alt= {images[index].description}/>


<button on:click = {next}> next </button>