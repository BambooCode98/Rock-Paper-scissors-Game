

let userChoice;
let result;
const usertextDisplay = document.getElementById('textBox');
let resultDisplay = document.getElementById("result");
let computerDisplay = document.getElementById("textBox2");
let resultOfComputer;
totalChoices = document.querySelectorAll('button');

totalChoices.forEach(grandChoice => grandChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    usertextDisplay.innerHTML = userChoice;
    computerChoice();
    compareChoices();
    
}));

function computerChoice() {
    let random = (Math.random()*3);
    if (random < 1) {
        resultOfComputer = 'rock';
    } else if (random >= 1 && random <= 2) {
        resultOfComputer = 'paper';
    } else if (random > 2) {
        resultOfComputer = 'scissor';
    }
    computerDisplay.innerHTML = resultOfComputer;
    return resultOfComputer;
}

const mainComputerChoice = computerChoice();

function compareChoices() {

    if (userChoice === mainComputerChoice) {
        result = 'tie';
    }
    if (userChoice === 'rock' && mainComputerChoice === 'paper') {
        //computerScore++;
        result = 'computer chose paper, you lose!';
    } else if (userChoice === 'paper' && mainComputerChoice === 'scissor') {
        //computerScore++;
        result = 'computer chose scissors, you lose!';
    }
    if (userChoice === 'scissor' && mainComputerChoice === "rock") {
        //computerScore++;
        result = 'computer chose rock, you lose!'; // all losing conditions end here
    }
    if (userChoice === 'rock' && mainComputerChoice === 'scissor') {
        //userScore++;
        result = 'computer chose scissors, you win!';
    }
    if (userChoice === 'paper' && mainComputerChoice === 'rock') {
        //userScore++;
        result = 'computer chose rock, you win!';
    }
    if (userChoice === 'scissor' && mainComputerChoice === "paper") {
        //userScore++;
        result = "computer chose paper, you win!";  // all winning conditions end here
    }
    resultDisplay.innerHTML = result;
}


let userScore = parseInt(0);
let computerScore = parseInt(0);

if (computerScore > userScore) {
    document.getElementById('winner').innerHTML = ('you lose');
} else if (userScore > computerScore) {
    document.getElementById('winner').innerHTML = ('you win');
} else if (userScore === computerScore) {
    document.getElementById('winner').innerHTML = ('tie');
}


//document.getElementById('talk').innerHTML = (`your score is ${userScore}`);
//document.getElementById('talk').innerHTML = (`computer score is ${computerScore}`);
