<script>
  import Nav from "$lib/components/Nav.svelte";
  
</script>

<!--Header for the website-->

<header id = "top">

    <!--Hamburger button to toggle nav bar-->

    <div class="hamburg">
      <div class = navBtn>
        <button on:click = {dropdownNav}><i class="fa-solid fa-bars"></i></button>
    </div>
    </div>

    <!--Logo / link back to main page-->

    <div class="beep">
      <a href="/">Visit L'nturé</a> 
    </div>
</header>