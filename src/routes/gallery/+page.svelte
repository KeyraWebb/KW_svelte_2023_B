<script>
  import { onMount } from "svelte";
  import GalleryImg from "../../lib/components/GalleryImg.svelte";

    let castles = [];
    let forests = [];
    let ruins = [];

    const BASE_URL = 'https://api.unsplash.com'
    const CLIENT_ID = 'yaxJAENJi6W_YyX_CUCizhfQ5qi-W9LAAa4KUnlI87c'

    onMount(async () => {
        let resCastles = await fetch(`${BASE_URL}/search/photos?query=castles&client_id=${CLIENT_ID}&per_page=18`);
        let dataCastles = await resCastles.json();
        castles = dataCastles.results;

        let resForests = await fetch(`${BASE_URL}/search/photos?query=forest&client_id=${CLIENT_ID}&per_page=18`);
        let dataForests = await resForests.json();
        forests = dataForests.results;

        let resRuins = await fetch(`${BASE_URL}/search/photos?query=ruins&client_id=${CLIENT_ID}&per_page=18`);
        let dataRuins = await resRuins.json();
        ruins = dataRuins.results;
    })

</script>

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

<div class = "article" id = "castles">
    <h1>Castles</h1>
    <div class = "gallery">
    
        {#each castles as castle}
            <GalleryImg url={castle.urls.regular} />
        {/each}
    
    </div>
</div>



<div class = "article" id = "forests">
    <h1>Forests</h1>
    <div class = "gallery">
        {#each forests as forest}
            <GalleryImg url={forest.urls.regular}/>
        {/each}
    </div>
</div>

<div class = "article" id = "ruins">
    <h1>Ruins</h1>
    <div class = "gallery">
        {#each ruins as ruin}
            <GalleryImg url={ruin.urls.regular}/>
        {/each}
    </div>
</div>
