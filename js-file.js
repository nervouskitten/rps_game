let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection){
    if(
        playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
        playerSelection === 'PAPER' && computerSelection === 'ROCK' ||
        playerSelection === 'SCISSORS' && computerSelection === 'PAPER'
    ) {
        playerScore++;
        roundWinner = 'player'
    }
    if(
        playerSelection === 'ROCK' && computerSelection === 'PAPER' ||
        playerSelection === 'PAPER' && computerSelection === 'SCISSORS' ||
        playerSelection === 'SCISSORS' && computerSelection === 'ROCK'
    ){
        computerScore++;
        roundWinner = 'computer';
    }
    updateScore(playerScore, computerScore)
}

const btnRock = document.getElementById('btnRock');
const btnPaper = document.getElementById('btnPaper');
const btnScissors = document.getElementById('btnScissors');
const playerScoreId = document.getElementById('playerScoreId');
const computerScoreId = document.getElementById('computerScoreId');
const modal = document.getElementById('modal');
const modalBg = document.querySelector('.modal-bg');

btnRock.addEventListener('click', () => handleClick('ROCK')) 
btnPaper.addEventListener('click', () => handleClick('PAPER'))
btnScissors.addEventListener('click', () => handleClick('SCISSORS'))

function chooseRandom(){
    let num = Math.floor(Math.random()*3)
    switch(num){
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

function handleClick(playerSelection){
    let computerSelection = chooseRandom()
    console.log(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
}

function updateScore(playerScore,computerScore){
    isGameOver();
    playerScoreId.innerText = `Player: ${playerScore}`;
    computerScoreId.innerText = `Computer: ${computerScore}`;
}

function isGameOver(){
    if(playerScore === 5 || computerScore === 5) {
        console.log(modalBg)
        //popping up modal
        modalBg.classList.add('bg-active');
        
    }
}

document.getElementById("restart").addEventListener("click", function(){
    playerScore = 0;
    computerScore = 0;
    modalBg.classList.remove('bg-active');
    updateScore(playerScore, computerScore);
});