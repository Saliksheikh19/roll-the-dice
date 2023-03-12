var totalScore1 = document.querySelector('.totalScore1');
var totalScore2 = document.querySelector('.totalScore2');
var currentScore1 = document.querySelector('.currentScore1');
var currentScore2 = document.querySelector('.currentScore2');
var newGameBtn = document.querySelector('.newGameBtn');
var rollDiceBtn = document.querySelector('.rollDiceBtn');
var holdBtn = document.querySelector('.holdBtn');
var diceImg = document.querySelector('.diceImg');
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var player2Name = document.querySelector('.player2Name');
var player1Name = document.querySelector('.player1Name');
var activePlayer;
var currentScore = currentScore1;
var totalScore = totalScore1
activePlayer = player1;


function rollDice(){
    var randomNumber = Math.round(Math.random() * 5 + 1);
    
    diceImg.classList.remove('hidden');
    diceImg.src = `assets/${randomNumber}.png`;
    if(randomNumber == 1){
        currentScore.textContent = 0;
        nextPlayer();
    } else{
        currentScore.textContent = +currentScore.textContent + randomNumber;
    }
}

function holdAction(){
    totalScore.textContent = +totalScore.textContent + (+currentScore.textContent);
    currentScore.textContent = 0;
    if(totalScore.textContent >= 100){
        if(activePlayer == player1){
            alert(`${player1Name.textContent} Wins`);
            newGame();
        }else{
            alert(`${player2Name.textContent} Wins`);
            newGame();
        }
    }else {
        nextPlayer();
    }
}

function newGame(){
    location.reload();
}

function nextPlayer(){
    if(activePlayer == player1){
        activePlayer = player2;
        activePlayer.classList.add('active');
        player1.classList.remove('active');
    } else if (activePlayer == player2){
        activePlayer = player1;
        activePlayer.classList.add('active');
        player2.classList.remove('active');

    }
    playerActivation();
}


function playerActivation(){
    if(activePlayer == player1){
        currentScore = currentScore1;
        totalScore = totalScore1;
    }else if(activePlayer == player2){
        currentScore = currentScore2;
        totalScore = totalScore2;
    }
}

rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdAction);
newGameBtn.addEventListener('click', newGame);