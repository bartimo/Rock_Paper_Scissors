let playerWins = 0; //stores total number of player wins
let computerWins = 0; // stores total number of computer wins
let roundNo = 1; // keeps track of round number.


//Display formatted into message
console.log("%cWelcome to Rock, Paper, Scissors", "color: red; font-size: 20px")
console.log("%cGet ready to get ROCKed!", "color: Blue; font-size: 16px;  font-style: italic;")
console.log("Best 3 out of 5 wins!")

// primary game loop
let continueGame = true;
while (continueGame) {
        
    let computerChoice = getComputerChoice();
    //let playerChoice = getPlayerChoice();
    
    //only continue if player did not cancel
    if (playerChoice) {
        let winner = playRound(playerChoice,computerChoice) //determine winner and save as "COMPUTER" or "PLAYER"

        //display round number and player selections
        console.log("");
        console.log("%cROUND " + roundNo, "font-size: 14px")
        console.log("PLAYER choses: " + playerChoice + "!");
        console.log("COMPUTER choses: " + computerChoice + "!");
        console.log("");


        // winner can contain DRAW, COMPUTER, or PLAYER. Display winner and increment win counter
        if (winner === "DRAW") {
            console.log("IT'S A DRAW!")
        } else if (winner === 'COMPUTER'){
            console.log(winner + " WINS! The robotic overlords creep ever closer to world domination!");
            computerWins = computerWins + 1;
        } else {
            console.log(winner + " WINS! Humanity stands a chance after all!");
            playerWins = playerWins + 1;
        }

        roundNo = roundNo + 1; //Increment round counter then display winner
        console.log("");
        console.log("Current Score - Player: " + playerWins + "  Computer: " + computerWins);

        //check if either player has won enough rounds to win game. If so, exit game.
        if(playerWins >= 3 || computerWins >=3) {
            continueGame = false;
        }
    } else { //Called when user presses cancel on input prompt. Ends game.
        continueGame = false;
        console.log("You have given up. Humanity is doomed. The machines have won.")
    }
}



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

//Check for draw  - if false, check of player won. If false, computer wins. 
//Return round winner value as "DRAW", "COMPUTER", or "PLAYER"
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "DRAW";
    //Check for 3 possible player win conditions. If none are met then computer wins.
    } else if ((playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
               (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
               (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')) {
                return "PLAYER"
               }
        else {
            return "COMPUTER"
        }

}
