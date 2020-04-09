let WarA = document.getElementById('WarA');
let WarB = document.getElementById('WarB');
let WarC = document.getElementById('WarC');
let WarD = document.getElementById('WarD');

let CWar = document.getElementById('CWar');
let DWar = document.getElementById('DWar');

let firstQue = document.getElementById('Que');
let name = document.getElementById('name');

let questions = [];
let namesArray = [];

//Zadawanie pytania

function startGameFunction() {
    startSection.style.display = 'none';
    document.getElementById('loseImg').style.display = "none";
    document.getElementById('winImg').style.display = "none";
    gameInfoSection.style.display = "grid";
    document.getElementById('checkAnswerButton').style.display = "block";
    if(questions[i].odpC == '') {
        resultSection.style.display = "none";
        name.innerHTML ="Pytanie od: <b>" + questions[i].imiePlayer + "</b>.";
        firstQue.innerHTML = `<i>${questions[i].pytanie}</i>`;
        WarA.innerHTML = questions[i].odpA;
        WarB.innerHTML = questions[i].odpB;
        WarC.innerHTML = '';
        WarD.innerHTML = '';
        CWar.style.display="none";
        DWar.style.display="none";
    } else if(questions[i].odpD == '') {
        name.innerHTML ="Pytanie od: <b>" + questions[i].imiePlayer + "</b>.";
        resultSection.style.display = "none";
        firstQue.innerHTML = questions[i].pytanie;
        WarA.innerHTML = questions[i].odpA;
        WarB.innerHTML = questions[i].odpB;
        WarC.innerHTML = questions[i].odpC;
        WarD.innerHTML = '';
        DWar.style.display="none";
    } else {
        name.innerHTML ="Pytanie od: <b>" + questions[i].imiePlayer + "</b>.";
        resultSection.style.display = "none";
        firstQue.innerHTML = questions[i].pytanie;
        WarA.innerHTML = questions[i].odpA;
        WarB.innerHTML = questions[i].odpB;
        WarC.innerHTML = questions[i].odpC;
        WarD.innerHTML = questions[i].odpD;
    }
}

