let i = 0;
let playerNumber = 0;

//Inputs
let imie = document.getElementById('imie');
let playerName = document.getElementById('playerName');

//Sections
let startSection = document.getElementById('startSection');
let gameInfoSection = document.getElementById('gameInfoSection');
let addNameSection = document.getElementById('addNameSection');
let resultSection = document.getElementById('resultSection');

//Buttons
let checkAnswerButton = document.getElementById('checkAnswerButton');
let checkButton = document.getElementById('checkButton');
let startGameButton = document.getElementById('startGameButton');
let addNameButton = document.getElementById('addNameButton');
let startButton = document.getElementById('startButton');
let nextButton = document.getElementById('nextButton');
let addQueButton = document.getElementById('addQueButton');

//Losowanie użytkownika
function newUser() {
    i = Math.floor(Math.random() * questions.length);
}

function newPlayer() {
    playerNumber = Math.floor(Math.random() * namesArray.length);
}

//Dodawania imienia
addNameButton.addEventListener("click", function() {
    let inputValue = document.getElementById('imie2').value;
    if(inputValue != '') {
        namesArray.push(inputValue);
        document.getElementById('imie2').value = '';
    } else {
        alert('Wpisz imie!');
    }
})

//Akceptowanie imion i zadanie pytania
startButton.addEventListener('click', acceptUsersFunction);

//Dodawanie pytania
checkButton.addEventListener('click', checkItFunction);

//Zadawanie pytania i walidacja
startGameButton.addEventListener('click', playerValidationFunction)

//Sprawdzanie odpowiedzi
checkAnswerButton.addEventListener('click', checkAnswerFunction);

//Następne pytanie
nextButton.addEventListener('click', nextQuestionFunction);

//Dodawanie kolejnych pytań
addQueButton.addEventListener('click', function() {
    resultSection.style.display = "none";
    startSection.style.display = "grid";
})
