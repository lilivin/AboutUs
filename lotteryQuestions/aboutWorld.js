//Zmienne
let i = 0;
let playerNumber = 0;
let punishmentAlcoholNumber = -1;
let punishmentChallangeNumber = -1;
let punishmentMyNumber = -1;
let tryb = '';

//Sections
let welcomeSection = document.getElementById('welcomeSection');
let resultSection = document.getElementById('resultSection');
let gameSection = document.getElementById('gameSection');
let pointsPlayerSection = document.getElementById('pointsPlayerSection');
let addPlayersSection = document.getElementById('addPlayersSection');
let addPunishmentSection = document.getElementById('addPunishmentSection');

//Buttons
let startComptetitionButton = document.getElementById('startComptetitionButton');
let addPlayerButton = document.getElementById('addPlayerButton');
let startGameButton = document.getElementById('startGameButton');
let startAlcoholQuestionsButton = document.getElementById('startAlcoholQuestionsButton');
let startChallangeQuestionsButton = document.getElementById('startChallangeQuestionsButton');
let startMyQuestionsButton = document.getElementById('startMyQuestionsButton');
let addPunishmentButton = document.getElementById('addPunishmentButton');
let finishAddPunishmentsButton = document.getElementById('finishAddPunishmentsButton');
let nextDefaultQuestionButton = document.getElementById('nextDefaultQuestionButton');
let nextQuestionButton = document.getElementById('nextQuestionButton');
let checkAnswerDefaultQuestionsButton = document.getElementById('checkAnswerDefaultQuestionsButton');

//Start tryb rywalizacji

startComptetitionButton.addEventListener('click', function() {
    welcomeSection.style.display = "none";
    tryb = 'comptetition';
    addPlayersSection.style.display = "grid";
})

//Dodawanie gracza w trybie rywalizacji

addPlayerButton.addEventListener("click", function() {
    let playerName = document.getElementById('player').value;
    let points = 0;
    if(playerName != '') {
        playerInfo = {
            playerName,
            points
        }
        players.push(playerInfo);
        document.getElementById('player').value = '';
    } else {
        alert('Wpisz imie!');
    }  
})

//Rozpoczynanie gry w trybie rywalizacji

startGameButton.addEventListener('click', startCompetitionFunction)

//Następne pytanie w trybie rywalizacji

nextQuestionButton.addEventListener('click', function() {
    pointsPlayerSection.style.display = "none";
    startGameFunction();
})

//Rozpoczęcie trybu alkoholowego

startAlcoholQuestionsButton.addEventListener('click', punishmentAlcohol);

//Rozpoczęcie trybu challangowego

startChallangeQuestionsButton.addEventListener('click', punishmentChallange);

//Rozpoczęcie trybu z własnymi pytaniami

startMyQuestionsButton.addEventListener('click', function() {
    addPunishmentSection.style.display = "grid";
    welcomeSection.style.display = 'none';
})

//Dodawanie własnych pytań

addPunishmentButton.addEventListener('click', function() {
    let punishmentValue = document.getElementById('myPunishmentAdd').value;
    myPunishments.push(punishmentValue);
    document.getElementById('myPunishmentAdd').value = '';
    console.log(myPunishments);
})

//Rozpoczącie gry z własnymi pytaniami

finishAddPunishmentsButton.addEventListener('click', function() {
    if(myPunishments.length > 0) {
        addPunishmentSection.style.display = "none";
    punishmentMy();
    } else {
        alert('Brak kar!')
    }
})

//Sprawdzanie poprawności odpowiedzi

checkAnswerDefaultQuestionsButton.addEventListener('click', checkAnswerFunction);

//Następne pytanie

nextDefaultQuestionButton.addEventListener('click', nextQuestionFunction);