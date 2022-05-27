//Variables
let playerSelection = "";
let computerSelection = "";
var roundResults = [];
var wins = 0;
var ties = 0;
var loses = 0;
let gmresult = "";

//Function for random computer selection
function computerPlay(){
    let hand = ["Rock", "Paper", "Scissors"];
    let randomChoice = hand[Math.floor(Math.random()* hand.length)];
    computerSelection = randomChoice.toUpperCase();
    return computerSelection;
} 

//Function for user selection through prompt
function playerSelectionFunct(){
    playerSelection = prompt("Select: rock, paper, scissors?")
    playerSelection = playerSelection.toUpperCase();
    if(playerSelection == "ROCK")
    {
        playerSelection = "ROCK";
    } 
    else if (playerSelection == "PAPER"){
        playerSelection = "PAPER";
    } 
    else if (playerSelection == "SCISSORS"){
        playerSelection = "SCISSORS";
    } else
    {
        alert("invalid selection");
        playerSelectionFunct();
    };
    return playerSelection;
}

//Run 1 round & determine round winner
function playRound(playerSelection, computerSelection){

    let outcome = "";

    //Winner for different scenarios

    if((playerSelection == "SCISSORS") && (computerSelection == "PAPER")){
        outcome = "You Win! Scissors beats Paper";
    } else if((playerSelection == "SCISSORS") && (computerSelection == "ROCK")){
        outcome = "You Lose! Rock beats Scissors";
    } else if((playerSelection == "PAPER") && (computerSelection == "SCISSORS")){
        outcome = "You Lose! Scissors beats to Paper";
    } else if((playerSelection == "PAPER") && (computerSelection == "PAPER")){
        outcome = "You Tie! Paper ties with Paper";
    } else if((playerSelection == "PAPER") && (computerSelection == "ROCK")){
        outcome = "You Win! Paper beats Rock";
    } else if((playerSelection == "ROCK") && (computerSelection == "SCISSORS")){
        outcome = "You Win! Rock beats Scissors";
    } else if((playerSelection == "ROCK") && (computerSelection == "PAPER")){
        outcome = "You Lose! Paper beats Rock";
    } else if((playerSelection == "ROCK") && (computerSelection == "ROCK")){
        outcome = "You Tie! Rock ties with Rock";
    } else if((playerSelection == "SCISSORS") && (computerSelection == "SCISSORS")){
        outcome = "You Tie! Scissors ties with Scissors";
    } 

    //Outcome
    return outcome;
} 

//5 Round game
function game(){

    //Call playRound 5 times via loop, and store results to each round aswell as keep counter of W,L,T
    for (let i=0; i<5; i++){

        playerSelectionFunct(); //New Player Selection
        computerPlay(); // New PC Selection

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
    }

    let gameBreakdown = ("Wins: " + wins + " | Loses: " + loses + " | Ties: " + ties);
    console.log(gameBreakdown);
    console.log(gameResult()); //calls gameResult funct. Which is the total 5 round game outcome
}

//Win, LOSS, TIE Trackers
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
