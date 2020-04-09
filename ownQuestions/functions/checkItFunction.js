//Akceptowanie pytań graczy

function checkItFunction() {
    imiePlayer = document.getElementById('imie').value;
    pytanie = document.getElementById('pytanie').value;
    odpA = document.getElementById('odpA').value;
    odpB = document.getElementById('odpB').value;
    odpC = document.getElementById('odpC').value;
    odpD = document.getElementById('odpD').value;
    popOdp = document.querySelector('input[name="odpValue"]:checked').value;
    kara = document.getElementById('kara').value;
    if (imiePlayer == "" || pytanie == "" || odpA == "" || odpB == "" || popOdp == "" || kara == "") {
        alert("Uzupełnij wszystkie pola!")
    } else {
        if(
            (odpC == '' && popOdp == 'C') || (odpC == '' && popOdp == 'D') || (odpD == '' && popOdp == 'D')
            ){
            alert("Nie wpisałeś takiego wariantu, żeby był poprawny!")
        } else {
            let question = {
                imiePlayer,
                pytanie,
                odpA,
                odpB,
                odpC,
                odpD,
                popOdp,
                kara
            }
    questions.push(question);
    document.getElementById('imie').value = null;
    document.getElementById('pytanie').value = null;
    document.getElementById('odpA').value = null;
    document.getElementById('odpB').value = null;
    document.getElementById('odpC').value = null;
    document.getElementById('odpD').value = null;
    document.getElementById('AOpc').checked = false;
    document.getElementById('BOpc').checked = false;
    document.getElementById('COpc').checked = false;
    document.getElementById('DOpc').checked = false;
    document.getElementById('kara').value = null;
    alert("Dodano pytanie!");
    }
}}