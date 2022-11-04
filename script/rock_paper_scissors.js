//Display formatted into message
console.log("%cWelcome to Rock, Paper, Scissors", "color: red; font-size: 20px")
console.log("%cGet ready to get ROCKed!", "color: Blue; font-size: 16px;  font-style: italic;")


let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
let winner = playRound(playerChoice,computerChoice)
let playerWins = 0;
let computerWins = 0;

console.log("");
console.log("PLAYER choses: " + playerChoice + "!");
console.log("COMPUTER choses: " + computerChoice + "!");
console.log("");

// winner can contain DRAW, computer
if (winner === "DRAW") {
    console.log("IT'S A DRAW!")
} else if (winner === 'COMPUTER'){
    console.log(winner + " WINS! The robotic overlords creep ever closer to world domination!");
    computerWins = computerWins + 1;
} else {
    console.log(winner + " WINS! Humanity stands a chance after all!");
    playerWins = playerWins + 1;
}

console.log("");
console.log("Current Score - Player: " + playerWins + "  Computer: " + computerWins);



/* Return the computers choice of rock, paper, or scissor*/
function getComputerChoice() {
    //determine random number of 1-3
    let randNum = Math.floor(Math.random() * 3 + 1)
    //return choice as string based on random number
    switch(randNum) {
        case 1:
            return "ROCK";
            break;
        case 2:
            return "SCISSORS"
            break;
        case 3:
            return "PAPER";
            break;
    }
}

function getPlayerChoice() {
    let keepGoing = true;
    //Loop until player enters a valid choice
    while (keepGoing) {
        let playerChoice = prompt("Enter your selection [Rock / Paper / Scissors]")
    
        //If Player cancels at prompt leave loop 
        if (!playerChoice) {
            console.log("Thanks for Playing!")
            keepGoing = false;
        } 
        //If Player enters text, check for validity. If invalid ask again.
        else {
            playerChoice = playerChoice.toUpperCase();
            
        
            if (playerChoice === 'ROCK' || playerChoice === 'SCISSORS' || playerChoice === 'PAPER') {
                return playerChoice;
                keepGoing = false;
            } else {
                console.log("Please enter a valid selection")
            }
        }
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "DRAW";
    } else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
               (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
               (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
                return "PLAYER"
               }
        else {
            return "COMPUTER"
        }

}
