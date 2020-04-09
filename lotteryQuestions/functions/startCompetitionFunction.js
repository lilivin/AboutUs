//Funkcja wyświetlająca ranking użytkowników w trybie rywalizacji

function startCompetitionFunction() {
    if (players.length > 1) {
        addPlayersSection.style.display = 'none';
        pointsPlayerSection.style.display = "grid";
        for(let z=0; z<players.length; z++) {
            let p = document.createElement('p');
            p.innerHTML = `<b>${players[z].playerName}</b> : ${players[z].points} pkt`;
            p.setAttribute('id', `${players[z].playerName}`);
            document.getElementById('pointsRank').appendChild(p);
        }
    } else {
        alert('Nie wystarczająca liczba graczy!');
    }
}