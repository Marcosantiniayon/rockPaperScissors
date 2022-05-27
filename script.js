//Variables
let playerSelection = "";
let computerSelection = "";
var roundResults = [];
var wins = 0;
var ties = 0;
var loses = 0;
let gmresult = "";

//Random computer selection 
function computerPlay(){
    let hand = ["Rock", "Paper", "Scissors"];
    let randomChoice = hand[Math.floor(Math.random()* hand.length)];
    randomChoice = randomChoice.toUpperCase();
    return randomChoice;
} 
computerSelection = computerPlay()

//User selection
// playerSelection = "scissors";
function playerSelectionFunct(){
    playerSelection = prompt("Select: rock, paper, scissors?")
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection == "ROCK")
    {
        playerSelection;
        console.log("plr slct: " + playerSelection);
    } 
    else if (playerSelection == "PAPER"){
        playerSelection;
        console.log(playerSelection);
    } 
    else if (playerSelection == "SCISSORS"){
        playerSelection;
        console.log(playerSelection);
    } else
    {
        alert("invalid selection");
        playerSelectionFunct();
    };
    return playerSelection;
}

//Run round of RPS
function playRound(playerSelection, computerSelection){

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

//5 Round game
function game(){
    
//Initial Player selection
playerSelectionFunct();

    for (let i=0; i<5; i++){
        roundResults.push(playRound(playerSelection, computerSelection))
        console.log("Round " + (i+1));
        console.log("PC Selection: " + computerSelection);
        console.log("Player Selection: " + playerSelection);
        console.log(roundResults[i]);

        //call win,loss & tie counters
        console.log("wins: " + winCounter());
        console.log("loses: " + lossCounter());
        console.log("ties: " + tieCounter());
        console.log("---------------")
        computerSelection = computerPlay(); //Change computer selection after round
        playerSelectionFunct();
    }

    let gameBreakdown = ("Wins: " + wins + " | Loses: " + loses + " | Ties: " + ties);
    console.log(gameBreakdown);
    console.log(gameResult());
}

//Keep track of wins
function winCounter(){
    let rslt = playRound(playerSelection, computerSelection);
    if(rslt.includes("Win")){
        wins = wins+1;
    };
    return wins;
};

//Keep track of loses
function lossCounter(){
    let rslt = playRound(playerSelection, computerSelection);
    if(rslt.includes("Lose")){
        loses = loses+1;
    };
    return loses;
};

//Keep track of ties
function tieCounter(){
    let rslt = playRound(playerSelection, computerSelection);
    if(rslt.includes("Tie")){
        ties = ties+1;
    };
    return ties;
};

// Compare W, L, T and return a final result
function gameResult(){

    // let gmresult = "";

    if(wins>loses){
        gmresult = ("You win the game " + wins + " to " + loses + " !");
    } else if(wins<loses){
        gmresult = ("You lose the game " + loses + " to " + wins + " !");
    } else if(wins==loses){
        gmresult = ("You tie " + wins + " to " + loses + " and " + ties + " ties");
    }
    return gmresult;
}

game(); //CALL GAME
