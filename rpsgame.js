let options = [' Rock', ' Paper', ' Scissors'];

alert(`Choose an option: ${options}`)
//input from the player - step 1
const playerInput = prompt();

//input from the computer - step 2
function computerInput() {
    let rand = Math.random()
    if (rand < .33) {
        return 'rock';
    } else if (rand >= .33 && rand <= .67) {
        return 'paper';
    } else if (rand > .67) {
        return 'scissors';
    }
}
const computerInputs = computerInput();
//compare the two inputs
function compareInputs(playerInput, computerInputs) {
    if (playerInput === computerInputs) {
        return 'tie';
    } else if (playerInput === 'rock' && computerInputs === 'paper') {
        return 'computer chose paper, you lose!';
    } else if (playerInput === 'paper' && computerInputs === 'scissors') {
        return 'computer chose scissors, you lose!';
    } else if (playerInput === 'scissors' && computerInputs === "rock") {
        return 'computer chose rock, you lose!'; // all losing conditions end here
    } else if (playerInput === 'rock' && computerInputs === 'scissors') {
        return 'computer chose paper, you win!';
    } else if (playerInput === 'paper' && computerInputs === 'rock') {
        return 'computer chose scissors, you win!';
    } else if (playerInput === 'scissors' && computerInputs === "paper") {
        return "computer chose rock, you win!";  // all winning conditions end here
    } else {
        return 'error';
    }
}

//output the inputs , times is the amount of times to play

 function finalGame(times) {
     let scoreboard = 0;
    for (times = 0; times < 6; times++){
        if (compareInputs(playerInput, computerInputs))
        
    }
    return compareInputs(playerInput, computerInputs);
}

console.log(finalGame(5));
console.log(finalGame(5));
console.log(finalGame(5));