<script>
    import BookingButton from '$lib/components/BookingButton.svelte'
</script>

<div class = "townCards">
    <div>
        <a href = "#shadowspell"><h2>Shadowspell</h2></a>
        <a class = "shadowspellCard" href="#shadowspell">&nbsp;</a>
    </div>
    <div>
        <a href = "#fairedge"><h2 class = "lightCard">Fairedge</h2></a>
        <a class = "fairedgeCard" href ="#fairedge">&nbsp;</a>
    </div>
    <div>
        <a href = "#silverwald"><h2>Silverwald</h2></a>
        <a class = "silverwaldCard" href = "#silverwald">&nbsp;</a>
    </div>
    <div href = "#tranmere">
        <a href = "#tranmere"><h2>Tran'meré</h2></a>
        <a class = "tranmereCard" href = "#tranmere">&nbsp;</a>
    </div>
</div>

<div class = "article">
    <h1>Settlements</h1>
    <div class = "infoGrid">
        <div>
            <p>L'nturé has many fantastic settlements, ripe for exploration and relaxation for the perfect holiday experience.<br><br>
                With legendary hospitality, engaging tours and entertaining activities, you'll never run out of things to do. 
            </p>
        </div>
    </div>
    <div class = "infogridImg"></div>
</div>

<div class = "article" id = "shadowspell">
    <h1>Shadowspell</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg shadowspellCard"></div>
        <div>
            <p>Shadowspell, the gem of the country, as well as the nation's capital, is a beautiful city with rich history and beautiful archetechture. 
            Entertain yourself by exploring it's streets. Take something home from the famous marketplace in the central trapezoid.</p>
        </div>
        <div>
            <h3>Where You'll Stay</h3>
        </div>
        <div class = "infoGridImg shadowspellThirdPic"></div>
        <div class = "infoGridImg shadowspellSecondPic"></div>
        <div>
            <h3>What You'll Do</h3>
        </div>
    </div>
    <BookingButton/>
</div>

<div class = "article" id = "fairedge">
    <h1>Fairedge</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg fairedgeCard"></div>
        <div></div>
        <div>
            <h3>Where You'll Stay</h3>
        </div>
        <div class = "infoGridImg placeholder"></div>
        <div class = "infoGridImg placeholder"></div>
        <div>
            <h3>What You'll Do</h3>
        </div>
    </div>
    <BookingButton/>
</div>

<div class = "article" id = "silverwald">
    <h1>Silverwald</h1>
    <div class ="infoGrid">
        <div class = "infoGridImg silverwaldCard"></div>
        <div>
        </div>
        <div>
            <h3>Where You'll Stay</h3>
        </div>
        <div class = "infoGridImg placeholder"></div>
        <div class = "infoGridImg placeholder"></div>
        <div>
            <h3>What You'll Do</h3>
        </div>
    </div>
    <BookingButton/>
</div>

<div class = "article" id = "tranmere">
    <h1>Tran'meré</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg tranmereCard"></div>
        <div>
            
        </div>
        <div>
            <h3>Where You'll Stay</h3>
        </div>
        <div class = "infoGridImg placeholder"></div>
        <div class = "infoGridImg placeholder"></div>
        <div>
            <h3>What You'll Do</h3>
        </div>
    </div>
    <BookingButton/>
</div>