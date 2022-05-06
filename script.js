const playButton = document.getElementById("PlayButton");
const winnertext = document.getElementById("WinnerText");
const historyText = document.getElementById("historyText");

if(playButton){
playButton.addEventListener("click", startGame);
}

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let history = [];

function startGame(){
    let player1 = document.getElementById("Player1");
    let player2 = document.getElementById("Player2");
    console.log("Start")
    if(player1.value > player2.value){
        winnertext.innerHTML = "Player One Wins";
        scorePlayer1++;
    }
    else if(player2.value > player1.value){
        winnertext.innerHTML = "Player Two Wins";
        scorePlayer2++;
    }
    else{
        winnertext.innerHTML = "Draw!";
    }
    history.push(player1.value + " - " + player2.value);
    console.log(history[0])
    historyText.innerHTML = "";
    history.forEach(element => {
        historyText.innerHTML = historyText.innerHTML + element + "<br>";
    });
}