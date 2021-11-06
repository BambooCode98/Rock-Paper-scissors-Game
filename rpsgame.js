//et options = [' Rock', ' Paper', ' Scissors'];

//console.log(`Choose an option: Rock, Paper, Scissors`);
//input from the player - step 1
//let playerInput = prompt('choose an option: rock, paper, scissors',);

//input from the computer - step 2
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
    } /*else {
        return 'error';
    } */
}

// scoreinput
/*if (playerInput.toLowerCase === computerInputs) {
        playerScore = 0;
        computerScore = 0;
    } else if (playerInput === 'rock' && computerInputs === 'paper') {
        computerScore++;
    } else if (playerInput === 'paper' && computerInputs === 'scissors') {
        computerScore++;
    } else if (playerInput === 'scissors' && computerInputs === "rock") {
        computerScore++; // all losing conditions end here
    } else if (playerInput === 'rock' && computerInputs === 'scissors') {
        playerScore++;
    } else if (playerInput === 'paper' && computerInputs === 'rock') {
        playerScore++;
    } else if (playerInput === 'scissors' && computerInputs === "paper") {
        playerScore++;  // all winning conditions end here
    } */
playerScore = parseInt(0);
computerScore = parseInt(0);

//play the game 5 times

for (i = 0; i < 5; i++) {
    console.log(`Choose an option: Rock, Paper, Scissors`);
    let playerInput = prompt('choose an option: rock, paper, scissors',);
    if (playerInput === null) {
        break;
    }
    const computerInputs = computerPlay();
    console.log(compareInputs(playerInput, computerInputs));
    console.log(`your score is ${playerScore}`);
    console.log(`computer score is ${computerScore}`);
    
}

if (computerScore > playerScore) {
    alert('you lose');
 } else if (playerScore > computerScore) {
     alert('you win');
 } else if (playerScore === computerScore) {
     alert('tie');
 }
console.log('game over!');
