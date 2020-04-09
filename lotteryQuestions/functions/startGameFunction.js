let category = document.getElementById('category');
let QueDefaultQuestions = document.getElementById('QueDefaultQuestions');
let WarADefaultQuestions = document.getElementById('WarADefaultQuestions');
let WarBDefaultQuestions = document.getElementById('WarBDefaultQuestions');
let WarCDefaultQuestions = document.getElementById('WarCDefaultQuestions');
let WarDDefaultQuestions = document.getElementById('WarDDefaultQuestions');

let answerPlayer = document.getElementById('answerPlayer');

//Funkcja wyświetlająca pytania

function startGameFunction() {
    if(tryb == "comptetition") {
        answerPlayer.innerHTML = `Odpowiada <b>${players[playerNumber].playerName}</b>.`;
    } else {
        answerPlayer.style.display = 'none';
    }
    newUser();
    welcomeSection.style.display = 'none';
    gameSection.style.display = 'grid';
    category.innerHTML = questionsArray[i].category;
    QueDefaultQuestions.innerHTML = questionsArray[i].pytanie;
    WarADefaultQuestions.innerHTML = questionsArray[i].odpA;
    WarBDefaultQuestions.innerHTML = questionsArray[i].odpB;
    WarCDefaultQuestions.innerHTML = questionsArray[i].odpC;
    WarDDefaultQuestions.innerHTML = questionsArray[i].odpD;
}