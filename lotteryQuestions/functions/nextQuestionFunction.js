//Funkcja odpowiedzialna za wyświetlanie następnego pytania

function nextQuestionFunction() {
    if(tryb == "comptetition") {
        resultSection.style.display = "none";
        pointsPlayerSection.style.display = "grid";
        document.getElementById(players[playerNumber].playerName).innerHTML = `<b>${players[playerNumber].playerName}</b> : ${players[playerNumber].points} pkt`;
        loseImgDefaultQuestions.style.display = "none";
        winImgDefaultQuestions.style.display = "none";
        if(playerNumber < players.length-1) {
            playerNumber++;
        } else {
            playerNumber = 0;
        }
    } else {
        punishment.innerHTML='';
        gameSection.style.display = "grid";
        resultSection.style.display = "none";
        loseImgDefaultQuestions.style.display = "none";
        winImgDefaultQuestions.style.display = "none";
        if(punishmentAlcoholNumber >= 0) {
            punishmentAlcoholNumber = -1;
            punishmentAlcohol();
        } else if(punishmentChallangeNumber >= 0){
            punishmentChallangeNumber = -1;
            punishmentChallange();
        } else {
            punishmentMyNumber = -1;
            punishmentMy();
        }
    }
}