//Następne pytanie

function nextQuestionFunction() {
    if(questions.length>=2){
        startSection.style.display = 'none';
        loseImg.style.display = "none";
        winImg.style.display = "none";
        gameInfoSection.style.display = "grid";
        document.getElementById('checkAnswerButton').style.display = "block";
        startGameFunction();
    } else {
        alert("Brak pytań!");
    }
}