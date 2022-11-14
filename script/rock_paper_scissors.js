let playerWins = 0; //stores total number of player wins
let computerWins = 0; // stores total number of computer wins
let roundNo = 1; // keeps track of round number.
let gameOver = false;
const gameRounds = 5;



btnRock.addEventListener("click",function() {startRound("ROCK");});
btnPaper.addEventListener("click",function() {startRound("PAPER");});
btnScissors.addEventListener("click",function() {startRound("SCISSORS");});
btnResetGame.addEventListener("click", function() {resetGame();});

const playerChoiceDiv = document.querySelector('#playerChoice');
const computerChoiceDiv = document.querySelector('#computerChoice');
const winnerTitleDiv = document.querySelector('#winnerTitle');
const winnerImageDiv = document.querySelector('#winnerImage');
const computerScoreDiv = document.querySelector('#computerScore');
const playerScoreDiv = document.querySelector('#playerScore');
const gameWinnerMsgDiV = document.querySelector('.gameWinnerMessage');
const resetGameBtn = document.querySelector('#btnResetGame');

function startRound(choice) {
    clearWinnerImage(); // prevents incorrect winner image from displaying after 1st round.
    let playerChoice = choice;
    let computerChoice = getComputerChoice();
    console.log(playerChoice + "  " + computerChoice)
    playerChoiceDiv.textContent =  playerChoice;
    computerChoiceDiv.textContent = computerChoice;

    let roundWinner = playRound(playerChoice, computerChoice);
    if (roundWinner != 'DRAW') {
        winnerTitleDiv.textContent = roundWinner + " WINS!"; 
    
        if (roundWinner == "PLAYER") {

            winnerImageDiv.classList.add('playerWinnerImg');
            winnerImageDiv.classList.add("winnerImageDisplay");
            playerWins += 1;
            playerScoreDiv.textContent = playerWins;

        } else {
            winnerImageDiv.classList.add('computerWinnerImg');
            winnerImageDiv.classList.add("winnerImageDisplay");
            computerWins += 1;
            computerScoreDiv.textContent = computerWins;
        }
    } else {
        winnerTitleDiv.textContent = roundWinner;
        winnerImageDiv.classList.remove("winnerImageDisplay")
    }

    if (playerWins >= gameRounds || computerWins >=5 ) {
        gameWinnerMsgDiV.style.display = 'flex';
        gameWinnerMsgDiV.textContent = "Game over man, game over."
        resetGameBtn.style.display = 'flex';

        document.querySelectorAll('.actionButton').forEach(elem => {
            elem.disabled = true;
          });
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
                return "PLAYER";
               }
        else {
            return "COMPUTER";
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


function clearWinnerImage() {
    winnerImageDiv.classList.remove('playerWinnerImg');
    winnerImageDiv.classList.remove('computerWinnerImg');
}

function resetGame() {
   //set scores to zero
    playerWins = 0;
    playerScoreDiv.textContent = playerWins;
    computerWins = 0;
    computerScoreDiv.textContent = playerWins;

    //enable action buttons
    document.querySelectorAll('.actionButton').forEach(elem => {
        elem.disabled = false;
      });

    //hide game end elements
    gameWinnerMsgDiV.style.display = 'none';
    resetGameBtn.style.display = 'none';
    winnerImageDiv.classList.remove("winnerImageDisplay")
    winnerTitleDiv.textContent = '';
    playerChoiceDiv.textContent =  '';
    computerChoiceDiv.textContent = '';
}


//OLD CODE BELOW


// primary game loop
//let continueGame = true;

let continueGame = false; //stop game during UI dev
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

