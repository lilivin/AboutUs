let winInfo = document.getElementById('win');
let winImg = document.getElementById('winImg');
let loseImg = document.getElementById('loseImg');

//Sprawdzanie odpowiedzi

function checkAnswerFunction() {
    yourAnswer = document.querySelector('input[name="answerValue"]:checked').value;
    if(yourAnswer == popOdp) {
        winInfo.innerHTML = "<div>Gratulacje! Wygrałeś.</div> Kara dla <b>" + questions[i].imiePlayer + "</b> to: <b>" + questions[i].kara + "</b>.";
        winImg.style.display = "block";
    } else {
        winInfo.innerHTML = "<div>Niestety przegrałeś.</div> Kara dla <b>Ciebie</b> to: <b>" + questions[i].kara + "</b>.";
        
        loseImg.style.display = "block";
    }
    resultSection.style.display="grid";
    gameInfoSection.style.display = "none";
    CWar.style.display="inline";
    DWar.style.display="inline";
    playerName.innerHTML = questions[i].imiePlayer;
    questions.splice(i, 1);
    document.querySelector('input[name="answerValue"]:checked').checked = false;
}