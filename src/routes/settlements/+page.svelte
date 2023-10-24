<script>
    import BookingButton from '$lib/components/BookingButton.svelte'
</script>

<!--Cards for quick navigation to articles-->

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

<!--Short page introduction-->

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

<!--Shadowspell article-->

<div class = "article" id = "shadowspell">
    <h1>Shadowspell</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg shadowspellCard"></div>
        <div>
            <p>Shadowspell, the gem of the country, as well as the nation's capital, is a beautiful city with rich history and beautiful architecture. 
            Entertain yourself by exploring it's streets. Take something home from the famous marketplace in the central heptagon.</p>
        </div>
        <div>
            <h3>Where You'll Stay</h3>
            <p>The beautiful Evenblaze Tower served the Evenblaze family for many years, but has now been converted into a breathtaking hotel in the heart of the city. 
                Enjoy the finest that Shadowspell has to offer, and a glimpse into the lives of L'nturé's nobility while also having the convienience of being 
                merely a few minutes walk from the central heptagon and many other iconic landmarks.</p>
        </div>
        <div class = "infoGridImg shadowspellThirdPic"></div>
        <div class = "infoGridImg shadowspellSecondPic"></div>
        <div>
            <h3>What You'll Do</h3>
            <p>Roam our beautiful capitol and see all of our beautiful architecture. 
                Shop your heart out in our stunning central heptagon and indulge in the local delacacies in some of the finest restaurants our nation has to offer.</p>
        </div>
    </div>
    <BookingButton/>
</div>

<!--Fairedge article-->

<div class = "article" id = "fairedge">
    <h1>Fairedge</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg fairedgeCard"></div>
        <div>
            <p>Nestled along the north edge of our central plains region, Xin'daré, is the quaint and beautiful town of Fairedge.
                The town has come far from it's origins as a small hunting village, but still boasts some of the highest quality meats, furs and skins in the world.
            </p>
        </div>
        <div>
            <h3>Where You'll Stay</h3>
            <p>Fairedge's historic hunting lodge has been lovingly preserved over the generations, and while it is no longer used by the hunters of old that kept the town fed,
                it now is available for all who come to experience the town to stay in. With many modern comforts mixed seamlessly with the more rustic decor, you'll be sure to 
                appreciate it's convienience and atmosphere during your trip.
            </p>
        </div>
        <div class = "infoGridImg fairedgeSecondPic"></div>
        <div class = "infoGridImg fairedgeThirdPic"></div>
        <div>
            <h3>What You'll Do</h3>
            <p>As the hunting capitol of L'nturé, there are many workshops for you to try your hand at the local trades.
                With leatherworking and butchery classes available, as well as tours of all of the well preserved historic buildings in the old town included in your stay, 
                you can make sure to appreciate Fairedge's fine history.
            </p>
        </div>
    </div>
    <BookingButton/>
</div>

<!--Silverwald article-->

<div class = "article" id = "silverwald">
    <h1>Silverwald</h1>
    <div class ="infoGrid">
        <div class = "infoGridImg silverwaldCard"></div>
        <div>
            <p>Long ago, the people of Silverwald were exceedingly wary of outsiders due to the many myths surrounding their home on the southern edge of Xin'daré.
                But now, the town welcomes all visitors with open arms, eager to share their stories with all who seek to learn.
            </p>
        </div>
        <div>
            <h3>Where You'll Stay</h3>
        </div>
        <div class = "infoGridImg placeholder"></div>
        <div class = "infoGridImg silverwaldThirdPic"></div>
        <div>
            <h3>What You'll Do</h3>
            <p>Silverwald is absolutely packed full of all sorts of activities for adventurers and story-lovers alike.
                You can visit the much loved folklore library, lovingly curated by locals who are eager to preserve their history and stories.
                If you're more into the dramatic, sate your thirst for theatrics at the local Silver Bullet theater, where hundreds of years of vocal storytelling is continued for all to see.
            </p>
        </div>
    </div>
    <BookingButton/>
</div>

<!--Tran'meré article-->

<div class = "article" id = "tranmere">
    <h1>Tran'meré</h1>
    <div class = "infoGrid">
        <div class = "infoGridImg tranmereCard"></div>
        <div>
            <p>Tran'meré is a gorgeous town located deep within the southern forest of Deepwick. 
                It is a town bursting with culture and history and the finest hospitality in the world.
                Truly one of the best destinations for those who seek a relaxing time surrounded by nature, or for curious minds to explore the rich knowledge hidden just underneath the surface.
            </p> 
        </div>
        <div>
            <h3>Where You'll Stay</h3>
            <p>The Guardian Inn is one of the most famous hotel and restaurants within all of L'nturé. 
                Managed for tens of generations by the kind and generous Makiko family, it is a much beloved landmark by all who live there and all who have visited.</p>
        </div>
        <div class = "infoGridImg tranmereSecondPic"></div>
        <div class = "infoGridImg placeholder"></div>
        <div>
            <h3>What You'll Do</h3>
        </div>
    </div>
    <BookingButton/>
</div>