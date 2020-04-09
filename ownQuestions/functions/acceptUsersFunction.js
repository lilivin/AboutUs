//Akceptowanie graczy 

function acceptUsersFunction() {
    if(namesArray.length >=2) {
        addNameSection.style.display = "none";
        startSection.style.display = "grid"
        for(let index=0; index < namesArray.length; index++) {
            let p = document.createElement("option");
            p.value = namesArray[index];
            p.text = namesArray[index];
            imie.appendChild(p);
        }
        playerName.innerHTML = `${namesArray[namesArray.length-1]}`;
    } else {
        alert('Za mało graczy!');
    }
}