<div class=formSelect>
    <h1>Booking Form</h1>

    <!--Booking form for people to 'sign up' for packages-->

    <form name="bookingForm" method="POST">
        <label for = "fname">First Name </label>
        <input type="text" id = "fname" placeholder="Your name..">
        <label for = "lname">Last Name </label>
        <input type = "text" id = "lname"  placeholder="Your Last name..">
        <label for = "package">Select your travel package </label>
        <select id = "packages" name = "package">
            <option value = "Blank"></option>
            <option value = "Shadowspell"> Shadowspell </option>
            <option value = "Fairedge"> Fairedge </option>
            <option value = "Silverwald"> Silverwald </option>
            <option value = "Tranmere"> Tran'meré</option>
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