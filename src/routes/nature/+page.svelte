<script>
    import BookingButton from '$lib/components/BookingButton.svelte'
</script>

<!--Cards for easy navigation to articles-->

<div class = "townCards">
    <div>
        <a href = "#deepwick"><h2>Deepwick</h2></a>
        <a href = "#deepwick" class = "deepwickCard">&nbsp;</a>
    </div>
    <div>
        <a href = "#norhurst"><h2>Norhurst</h2></a>
        <a href = "#norhurst" class = "norhurstCard">&nbsp;</a>
    </div>
    <div>
        <a href = "#xindare"><h2>Xin'daré</h2></a>
        <a href = "#xindare" class = "xindareCard">&nbsp;</a>
    </div>
    <div>
        <a href = "#lnaareMountains"><h2>L'naaré Mountains</h2></a>
        <a href = "#lnaareMountains" class = "lnaareCard">&nbsp;</a>
    </div>
</div>

<!--Articles for nature attraction information-->

<div class = "article">
    <h1>Nature</h1>
    <div class = "infoGrid"></div>
</div>

<div class = "article" id = "deepwick">
    <h1>Deepwick</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg placeholder"></div>
        <div>
            <p>Deepwick is the thick forest that cradles the south of L'nturé. It has been long known to be full of secrets and treasures aplenty, ripe for anyone with 
                an adventurous spirit to discover.</p> 
        </div>
        <div>
            <h2>Hikes and Trails</h2>
        </div>
        <div class = "infoGridImg placeholder"></div>
        <div class = "infoGridImg placeholder"></div>
        <div></div>
    </div>
    <BookingButton/>
</div>

<div class = "article" id = "norhurst">
    <h1>Norhurst</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg placeholder"></div>
        <div>
            <p></p> 
        </div>
        <div>
            <h2></h2>
            <p></p>
        </div>
        <div class = "infoGridImg placeholder"></div>
        <div class = "infoGridImg placeholder"></div>
        <div>
            <h2></h2>
            <p></p>
        </div>
    </div>
    <BookingButton/>
</div>

<div class = "article" id = "xindare">
    <h1>Xin'daré</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg placeholder"></div>
        <div>
            <p></p> 
        </div>
        <div>
            <h2></h2>
            <p></p>
        </div>
        <div class = "infoGridImg placeholder"></div>
        <div class = "infoGridImg placeholder"></div>
        <div>
            <h2></h2>
            <p></p>
        </div>
    </div>
    <BookingButton/>
</div>

<div class = "article" id = "lnaareMountains">
    <h1>L'naaré Mountains</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg placeholder"></div>
        <div>
            <p></p> 
        </div>
        <div>
            <h2></h2>
            <p></p>
        </div>
        <div class = "infoGridImg placeholder"></div>
        <div class = "infoGridImg placeholder"></div>
        <div>
            <h2></h2>
            <p></p>
        </div>
    </div>
    <BookingButton/>
</div>