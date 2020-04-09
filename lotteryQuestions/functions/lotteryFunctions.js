//Losowanie kar alkoholowych

function punishmentAlcohol() {
    punishmentAlcoholNumber = Math.floor(Math.random() * punishmentAlcoholArray.length);
    startGameFunction();
}

//Losowanie challangy

function punishmentChallange() {
    punishmentChallangeNumber = Math.floor(Math.random() * punishmentChallangeArray.length);
    startGameFunction();
}

//Losowanie kar własnych

function punishmentMy() {
    punishmentMyNumber = Math.floor(Math.random() * myPunishments.length);
    startGameFunction();
}

//Losowanie użytkowników

function newUser() {
    i = Math.floor(Math.random() * questionsArray.length);
}