//Variables
let playerSelection = "";
let plyrSlct = "";
let computerSelection = "";
var roundResults = [];
var wins = 0;
var ties = 0;
var pcWins = 0;
let gmresult = "";

//Function for random computer selection
function computerPlay(){
    let hand = ["Rock", "Paper", "Scissors"];
    let randomChoice = hand[Math.floor(Math.random()* hand.length)];
    cmptrSlct = randomChoice.toUpperCase();
    return cmptrSlct;
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

//Event Listener to the buttons to playRound
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRound);
})

//Run 1 round & determine round winner
    //Whatever button was clicked gets passed to the first parameter. In this case playerSelection
function playRound(playerSelection, computerSelection){

    //Removes previously displayed picks
    rmvDsply();

    //Calls dsplyPlyrSlct to print playerSelection on screen
    plyrSlct = dsplyPlyrSlct(playerSelection);
    cmptrSlct = dsplyCmptrSlct(computerSelection);
    console.log("Player Select: " + plyrSlct)
    console.log("Comp Select: " + cmptrSlct)
    
    let outcome = "";

    //Winner for different scenarios

    if((plyrSlct === "SCISSORS") && (cmptrSlct === "PAPER")){
        outcome = "You Win! Scissors beats Paper";
    } else if((plyrSlct === "SCISSORS") && (cmptrSlct === "ROCK")){
        outcome = "You Lose! Rock beats Scissors";
    } else if((plyrSlct === "PAPER") && (cmptrSlct === "SCISSORS")){
        outcome = "You Lose! Scissors beats to Paper";
    } else if((plyrSlct === "PAPER") && (cmptrSlct === "PAPER")){
        outcome = "You Tie! Paper ties with Paper";
    } else if((plyrSlct === "PAPER") && (cmptrSlct === "ROCK")){
        outcome = "You Win! Paper beats Rock";
    } else if((plyrSlct === "ROCK") && (cmptrSlct === "SCISSORS")){
        outcome = "You Win! Rock beats Scissors";
    } else if((plyrSlct === "ROCK") && (cmptrSlct === "PAPER")){
        outcome = "You Lose! Paper beats Rock";
    } else if((plyrSlct === "ROCK") && (cmptrSlct === "ROCK")){
        outcome = "You Tie! Rock ties with Rock";
    } else if((plyrSlct === "SCISSORS") && (cmptrSlct === "SCISSORS")){
        outcome = "You Tie! Scissors ties with Scissors";
    } else (outcome ="N/A" + "| plyrSlct: " + plyrSlct + "| cmptrSlct: " + cmptrSlct);

    //Calls chngTallie and prints new Tallie on screen
    chngTallie(outcome);

    console.log(outcome);

    //Outcome
    return outcome;
    
} 

//Display Results (Player Selection)
function dsplyPlyrSlct(playerSelection){
    var result =document.createElement("p");
    result.classList.add('PlyRslt');
    var resultText =document.createTextNode("Player Selection: " + playerSelection.target.innerHTML);
    var resultsDiv = document.querySelector('#results');
    result.appendChild(resultText);
    resultsDiv.appendChild(result);
    plyrSlct = playerSelection.target.innerHTML;
    return plyrSlct;
}

//Display Results (Computer Selection)
function dsplyCmptrSlct(){
    computerPlay();
    var result =document.createElement("p");
    result.classList.add('PCRslt');
    var resultText =document.createTextNode("Computer Selection: " + cmptrSlct);
    var resultsDiv = document.querySelector('#results');
    result.appendChild(resultText);
    resultsDiv.appendChild(result);
    return cmptrSlct;

}

// Change Tallie
function chngTallie(outcome){
    
    if(outcome.includes("Win")){
        wins = wins+1;
        let plyrWins = document.querySelector('#plyrWins');
        plyrWins.innerHTML = wins;
    } else if(outcome.includes("Lose")){
        pcWins = pcWins+1;
        let cmptrWins = document.querySelector('#cmptrWins');
        cmptrWins.innerHTML = pcWins;
    } else return;

    let plyrWins = document.querySelector('#plyrWins');
}


var resultsDiv = document.getElementById('results');

function rmvDsply(){
    if(resultsDiv.hasChildNodes()){
        var p = document.querySelector('p');
        resultsDiv.removeChild(p);
        var p = document.querySelector('p');
        resultsDiv.removeChild(p);
    } else {
        return;
    }
;}

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
            pcWins = pcWins+1;
        };
        return pcWins;
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

    if(wins>pcWins){
        gmresult = ("You win the game " + wins + " to " + pcWins + " !");
    } else if(wins<pcWins){
        gmresult = ("You lose the game " + pcWins + " to " + wins + " !");
    } else if(wins==pcWins){
        gmresult = ("You tie " + wins + " to " + pcWins + " and " + ties + " ties");
    }
    return gmresult;
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
        console.log("pcWins: " + lossCounter());
        console.log("ties: " + tieCounter());
        console.log("---------------")
        computerSelection = computerPlay(); //Change computer selection after round
    }

    let gameBreakdown = ("Wins: " + wins + " | pcWins: " + pcWins + " | Ties: " + ties);
    console.log(gameBreakdown);
    console.log(gameResult()); //calls gameResult funct. Which is the total 5 round game outcome
}


// game(); //CALL GAME
