//code for the drop down navigation bar to drop down

let dropdownNav = function(){
    let dropdown = document.getElementById(`hiddenLinks`);
    if (window.innerWidth >= 1000) { //checks the window size for responsiveness
        dropdown.style.height = dropdown.style.height === `105px` ? `0px` : `105px`; //wide
    }
    else{
        dropdown.style.height = dropdown.style.height === `735px` ? `0px` : `735px`; //long
    }   
}

