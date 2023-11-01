<!--Api implementation-->
<script>
  import CarouselGallery from "../../lib/components/CarouselGallery.svelte";

  export let data;
  console.log(data.castles);

    const BASE_URL = 'https://api.unsplash.com'
    const CLIENT_ID = 'yaxJAENJi6W_YyX_CUCizhfQ5qi-W9LAAa4KUnlI87c'

    // onMount(async () => {
    //     let resCastles = await fetch(`${BASE_URL}/search/photos?query=castles&client_id=${CLIENT_ID}&per_page=18`);
    //     let dataCastles = await resCastles.json();
    //     castles = dataCastles.results;

    //     let resForests = await fetch(`${BASE_URL}/search/photos?query=forest&client_id=${CLIENT_ID}&per_page=18`);
    //     let dataForests = await resForests.json();
    //     forests = dataForests.results;

    //     let resRuins = await fetch(`${BASE_URL}/search/photos?query=ruins&client_id=${CLIENT_ID}&per_page=18`);
    //     let dataRuins = await resRuins.json();
    //     ruins = dataRuins.results;

    //     console.log(castles);
    // })

    

</script>

<!--Heading and Cards for easy navigation-->

<div class = "article">
    <h1>Gallery</h1>
</div>

<div class = "townCards">
    <div>
        <a href = "#castles"><h2>Castles</h2></a>
        <a href="#castles" class = "shadowspellCard">&nbsp;</a>
    </div>
    <div>
        <a href = "#forests"><h2>Forests</h2></a>
        <a href = "#forests" class = "splashBanner">&nbsp;</a>
    </div>
    <div>
        <a href = "#ruins"><h2>Ruins</h2></a>
        <a href = "#ruins"class = "overgrownCastle">&nbsp;</a>
    </div>
</div>

<!--Castle Images-->

<div class = "article" id = "castles">
    <h1>Castles</h1>
    <div class = "gallery">
        <CarouselGallery images={data.castles}/>
    </div>
</div>

<!--Forest Images-->

<div class = "article" id = "forests">
    <h1>Forests</h1>
    <div class = "gallery">
        <CarouselGallery images={data.forests}/>
    </div>
</div>

<!--Ruin Images-->

<div class = "article" id = "ruins">
    <h1>Ruins</h1>
    <div class = "gallery">
        <CarouselGallery images={data.ruins}/>
    </div>
</div>
