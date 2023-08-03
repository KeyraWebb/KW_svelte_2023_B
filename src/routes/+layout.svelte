<script>
    import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
    import '@fontsource/bungee';
</script>

<svelte:head>
    <link rel = "stylesheet" href="css/main.css">
</svelte:head>

<Header/>

<slot />

<Footer/>