let punishment = document.getElementById('punishment');
let winDefaultQuestions = document.getElementById('winDefaultQuestions');
let winImgDefaultQuestions = document.getElementById('winImgDefaultQuestions');
let loseImgDefaultQuestions = document.getElementById('loseImgDefaultQuestions')

//Funkcja sprawdzająca poprawność odpowiedzi

function checkAnswerFunction() {
    yourAnswerDefaultQuestions = document.querySelector('input[name="answerValueDefaultQuestions"]:checked').value;
    if (tryb == "comptetition") {
        if(yourAnswerDefaultQuestions == questionsArray[i].popOdp) {
            winDefaultQuestions.innerHTML = "Gratulacje! Wygrałeś.";
            players[playerNumber].points++;
            winImgDefaultQuestions.style.display = "block";
        } else {
            winDefaultQuestions.innerHTML = "Niestety! Przegrałeś.";
            loseImgDefaultQuestions.style.display = "block";
        }
        resultSection.style.display="grid";
        gameSection.style.display = "none";
        questionsArray.splice(i, 1);
        document.querySelector('input[name="answerValueDefaultQuestions"]:checked').checked = false;
    } else {
        yourAnswerDefaultQuestions = document.querySelector('input[name="answerValueDefaultQuestions"]:checked').value;
        if(yourAnswerDefaultQuestions == questionsArray[i].popOdp) {
            winDefaultQuestions.innerHTML = "Gratulacje! Wygrałeś.";
            resultSection.style.display="grid";
            gameSection.style.display = "none";
            winImgDefaultQuestions.style.display = "block";
            console.log('dobrze');
        } else {
            winDefaultQuestions.innerHTML = "Niestety! Przegrałeś.";
                if(punishmentAlcoholNumber >= 0) {
                    punishment.innerHTML = `Kara dla Ciebie to: ${punishmentAlcoholArray[punishmentAlcoholNumber]}`;
                } else if (punishmentChallangeNumber >= 0) {
                    punishment.innerHTML = `Kara dla Ciebie to: ${punishmentChallangeArray[punishmentChallangeNumber]}`;
                } else {
                    punishment.innerHTML = `Kara dla Ciebie to: ${myPunishments[punishmentMyNumber]}`;
            }
            console.log('zle');
        resultSection.style.display="grid";
        gameSection.style.display = "none";
        loseImgDefaultQuestions.style.display = "block";
    }
        questionsArray.splice(i, 1);
        document.querySelector('input[name="answerValueDefaultQuestions"]:checked').checked = false;
    }
}