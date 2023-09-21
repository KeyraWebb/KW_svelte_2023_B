<script>
  import { onMount } from "svelte";

    let castles = [];

    

    const BASE_URL = 'https://api.unsplash.com'
    const CLIENT_ID = 'yaxJAENJi6W_YyX_CUCizhfQ5qi-W9LAAa4KUnlI87c'

    onMount(() => {
        fetch('${BASE_URL}/search/photos?query=castles&client_id=${CLIENT_ID}')
    .then(res => res.json)
    .then(data => {
        castles = data.results;
    })
    })

</script>

<div class = "gallery">
    
    {#each castles as castle}
        <img url = '${castle.urls.regular}' alt = 'castle'>
    {/each}

</div>