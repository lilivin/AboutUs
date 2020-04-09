//Walidacja

function playerValidationFunction() {
    newUser();
    newPlayer();
    playerName.innerHTML = `Odpowiada <b>${namesArray[playerNumber]}</b>`;
    if(questions.length > 0) {
        if(namesArray[playerNumber] == questions[i].imiePlayer) {
            playerValidationFunction()
        } else {
            startGameFunction();
        }
    } else {
        alert("Brak pytań");
    }
}