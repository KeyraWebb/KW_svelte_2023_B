  <script>
    export let data;

    let locations = [
        "Shadowspell",
        "Fairedge",
        "Silverwald",
        "Tran'meré",
        "Deepwick",
        "Norhurst",
        "Xin'daré",
        "L'naaré Mountains",
        "Folklore",
        "History"
    ];

    let packageSelect = data.packageSelect;
  </script>
  
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
            {#each locations as location}
                <option value = "location" selected={packageSelect === location}> {location} </option>
            {/each}
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
