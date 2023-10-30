export async function load({fetch}){
    const BASE_URL = 'https://api.unsplash.com'
    const CLIENT_ID = 'yaxJAENJi6W_YyX_CUCizhfQ5qi-W9LAAa4KUnlI87c'

    let resCastles = await fetch(`${BASE_URL}/search/photos?query=castles&client_id=${CLIENT_ID}&per_page=18`);
    let dataCastles = await resCastles.json();
    let castles = dataCastles.results;

    let resForests = await fetch(`${BASE_URL}/search/photos?query=forest&client_id=${CLIENT_ID}&per_page=18`);
    let dataForests = await resForests.json();
    let forests = dataForests.results;

    let resRuins = await fetch(`${BASE_URL}/search/photos?query=ruins&client_id=${CLIENT_ID}&per_page=18`);
    let dataRuins = await resRuins.json();
    let ruins = dataRuins.results;

    console.log(castles);
    return {castles,forests,ruins};
}