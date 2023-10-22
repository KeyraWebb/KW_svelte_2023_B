let dropdownNav = function(){
    let dropdown = document.getElementById(`hiddenLinks`);
    if (window.innerWidth >= 1000) {
        dropdown.style.height = dropdown.style.height === `105px` ? `0px` : `105px`;
    }
    else{
        dropdown.style.height = dropdown.style.height === `735px` ? `0px` : `735px`;
    }
    
}

