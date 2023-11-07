export async function load({ params, url }) {
    let packageSelect = url.searchParams.get('packageSelect');
    return {packageSelect};
}