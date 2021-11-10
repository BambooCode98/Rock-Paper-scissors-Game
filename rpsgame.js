//player input from buttons
//let playerInput = document.getElementById("rockButton");
function playerInput(val) {
    console.log(val);
}

//input from the computer
function computerPlay() {
    let rand = Math.random()
    if (rand < .33) {
        return 'rock';
    } else if (rand >= .33 && rand <= .67) {
        return 'paper';
    } else if (rand > .67) {
        return 'scissors';
    }
}
const computerInputs = computerPlay();
//compare the two inputs
function compareInputs(playerInput, computerInputs) {
    if (playerInput === computerInputs) {
        return 'tie';
    } else if (playerInput === 'rock' && computerInputs === 'paper') {
        computerScore++;
        return 'computer chose paper, you lose!';
    } else if (playerInput === 'paper' && computerInputs === 'scissors') {
        computerScore++;
        return 'computer chose scissors, you lose!';
    } else if (playerInput === 'scissors' && computerInputs === "rock") {
        computerScore++;
        return 'computer chose rock, you lose!'; // all losing conditions end here
    } else if (playerInput === 'rock' && computerInputs === 'scissors') {
        playerScore++;
        return 'computer chose scissors, you win!';
    } else if (playerInput === 'paper' && computerInputs === 'rock') {
        playerScore++;
        return 'computer chose rock, you win!';
    } else if (playerInput === 'scissors' && computerInputs === "paper") {
        playerScore++;
        return "computer chose paper, you win!";  // all winning conditions end here
    }
}


playerScore = parseInt(0);
computerScore = parseInt(0);

//play the game 5 times

for (i = 0; i < 5; i++) {
    console.log(`Choose an option: Rock, Paper, Scissors`);
    let playerInput2 = playerInput(val);
    if (playerInput2 === null) {
        break;
    }
    const computerInputs = computerPlay();
    document.getElementById('scoretalk').innerHTML = (compareInputs(playerInput, computerInputs));
    document.getElementById('scoretalk').innerHTML = (`your score is ${playerScore}`);
    document.getElementById('scoretalk').innerHTML = (`computer score is ${computerScore}`);
    
}

if (computerScore > playerScore) {
    document.getElementById('winner').innerHTML = ('you lose');
 } else if (playerScore > computerScore) {
    document.getElementById('winner').innerHTML = ('you win');
 } else if (playerScore === computerScore) {
    document.getElementById('winner').innerHTML = ('tie');
 }
document.getElementById('gameOver').innerHTML = 'game over!';
console.log(playerInput);
console.log(document.getElementById("paperButton").addEventListener('click', compareInputs(playerInput, computerInputs)));

document.getElementById("rock").addEventListener('click', playerInput(val));
document.getElementById("paper").addEventListener('click', playerInput(val));
document.getElementById("scissor").addEventListener('click', playerInput(val));


//stuff to learn from
// document.getElementById('rockButton').onclick = playerChoice;
// document.getElementById('paperButton').onclick = playerChoice;
// document.getElementById('scissorButton').onclick = playerChoice;

// function playerChoice() {
//     let playerInput = this.id;
//     console.log(playerInput);

// }