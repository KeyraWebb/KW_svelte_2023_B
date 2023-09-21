<h1>Booking Form</h1>

<form>
    <label for = "fname">First Name: </label>
    <input type="text" id = "fname"><br>
    <label for = "lname">Last Name: </label>
    <input type = "text" id = "lname"><br>
    <label for = "package">Select your travel package: </label>
    <input list = "packages" name = "package" id = "package">
    <datalist id = "packages">
        <option value = "Shadowspell"></option>
        <option value = "Fairedge"></option>
        <option value = "Silverwald"></option>
    </datalist>
</form>