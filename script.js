//Variables
let playerSelection = "";
let computerSelection = "";

//Computer Selection 
function computerPlay(){
    let hand = ["Rock", "Paper", "Scissors"];
    let randomChoice = hand[Math.floor(Math.random()* hand.length)];
    randomChoice = randomChoice.toUpperCase();
    return randomChoice;
} 
computerSelection = computerPlay()
console.log("PC Selection: " + computerSelection);

//User Selection
playerSelection = "scissors";
playerSelection = playerSelection.toUpperCase();
console.log("Player Selection: " + playerSelection);

//Run game of RPS
function newGame(playerSelection, computerSelection){

    let outcome = "";

    //Winner for different scenarios
    switch(playerSelection, computerSelection) {
        case "SCISSORS" , "SCISSORS":
            outcome = "You Tie! Scissors ties with Scissors";
            break;
        case "SCISSORS" , "PAPER":
            outcome = "You Win! Scissors beats Paper";
            break;
        case "SCISSORS" , "ROCK":
            outcome = "You Lose! Rock beats Scissors";
            break;
        case "PAPER" , "SCISSORS":
            outcome = "You Lose! Scissors beats to Paper";
            break;
        case "PAPER" , "PAPER":
            outcome = "You Tie! Paper ties with Paper";
            break;
        case "PAPER" , "ROCK":
            outcome = "You Win! Paper beats Rock";
            break;
        case "ROCK" , "SCISSORS":
            outcome = "You Win! Rock beats Scissors";
            break;
        case "ROCK" , "PAPER":
            outcome = "You Lose! Paper beats Rock";
            break; 
        case "ROCK" , "ROCK":
            outcome = "You Tie! Rock ties with Rock";
            break;           
          // code block
      }

    //Outcome
    return outcome;
} 
console.log("winner: " + newGame(playerSelection, computerSelection));
