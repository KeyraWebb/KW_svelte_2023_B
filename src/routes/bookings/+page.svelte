    <!--Package and pricing-->
    <div class = "article">
        <h1>Packages and Pricing</h1>
        <p>Thank you for taking interest in visiting our country! We have several packages available for you to get the best possible experience during your stay.</p>
        <div>
            <div></div>
        </div>
    </div>

<div class=formSelect>

    <h1>Booking Form</h1>

    <!--Booking form for people to 'sign up' for packages-->

    <form name="bookingForm">
        <label for = "fname">First Name </label>
        <input type="text" id = "fname" placeholder="Your name.." required>
        <label for = "lname">Last Name </label>
        <input type = "text" id = "lname"  placeholder="Your Last name.." required>
        <label for = "package">Select your travel package </label>
        <select id = "packages" name = "package">
            <option value = "Blank"></option>
            <option value = "Shadowspell"> Shadowspell </option>
            <option value = "Fairedge"> Fairedge </option>
            <option value = "Silverwald"> Silverwald </option>
            <option value = "Tranmere"> Tran'meré</option>
            <option value = "Deepwick">Deepwick</option>
            <option value = "Norhurst">Norhurst</option>
            <option value = "Xindare">Xin'daré</option>
            <option value = "LnaareMountains">L'naaré Mountains</option>
            <option value = "Folklore">Folklore</option>
            <option value = "History"> History</option>
        </select>
            <div class = "dateSelect">
                <label for = "startDate">Travel start date</label>
                <label for = "endDate"> Travel end date</label>
                <input type = "date" name = "startDate">
                <input type = "date" name ="endDate">
            </div>
        <input type = "submit" value = "Submit">
    </form>
</div>
