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
    <div class = "infoGrid">
        <div>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p>
        </div>
        <div class = "infoGridImg "></div>
    </div>
</div>

<div class = "article" id = "deepwick">
    <h1>Deepwick</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg deepwickForest"></div>
        <div>
            <p>Deepwick is the thick forest that cradles the south of L'nturé. It has been long known to be full of secrets and treasures aplenty, ripe for anyone with 
                an adventurous spirit to discover. Discover the hidden beauty of the deep forest with plenty of trails, hikes and camping sites perfect for immersing yourself in the untamed
                beauty of southern L'nturé</p> 
        </div>
        <div>
            <h2>Hikes and Trails</h2>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p>
        </div>
        <div class = "infoGridImg deepwickCard"></div>
        <div class = "infoGridImg deepwickThirdPic"></div>
        <div>
            <h2>Camping</h2>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p>
        </div>
    </div>
    <BookingButton/>
</div>

<div class = "article" id = "norhurst">
    <h1>Norhurst</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg norhurstCard"></div>
        <div>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p> 
        </div>
        <div>
            <h2>Hikes and Trails</h2>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p>
        </div>
        <div class = "infoGridImg norhurstSecondPic"></div>
        <div class = "infoGridImg norhurstThirdPic"></div>
        <div>
            <h2>Camping</h2>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p>
        </div>
    </div>
    <BookingButton/>
</div>

<div class = "article" id = "xindare">
    <h1>Xin'daré</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg xindareCard"></div>
        <div>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p> 
        </div>
        <div>
            <h2>Hikes and Trails</h2>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p>
        </div>
        <div class = "infoGridImg fairedgeThirdPic"></div>
        <div class = "infoGridImg xindareThirdPic"></div>
        <div>
            <h2>Camping</h2>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p>
        </div>
    </div>
    <BookingButton/>
</div>

<div class = "article" id = "lnaareMountains">
    <h1>L'naaré Mountains</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg lnaareCard"></div>
        <div>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p> 
        </div>
        <div>
            <h2>Hikes and Trails</h2>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p>
        </div>
        <div class = "infoGridImg lnaareSecondPic"></div>
        <div class = "infoGridImg lnaareThirdPic"></div>
        <div>
            <h2>Camping</h2>
            <p>Vivamus gravida aliquam commodo. Nullam tristique fringilla imperdiet. Praesent in mattis dolor. Cras eget lacus vitae nibh pretium rhoncus. Vivamus elementum faucibus eros sit amet vehicula. Praesent lacinia neque scelerisque sapien vulputate, eu fringilla risus consectetur. Nam quis justo mauris.</p>
        </div>
    </div>
    <BookingButton/>
</div>