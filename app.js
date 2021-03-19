//cache the DOM

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p ");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//create a function to generate a random number  

function getComputerChoice(){
    const choices = ['r','s','p'];
    const randomNumber = Math.floor(Math.random()* 3);
    return choices[randomNumber];
}
//create a function to convert letters "r", "p", "s" into rock, paper, scissors and return value
function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}

function win(userChoice, computerChoice){
    userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + " You Win! Travis Rules";
 
}

function lose (userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice,) +  " lose to " + convertToWord(computerChoice) + " You lose";
}
function draw(userChoice, computerChoice){
    result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + " It's a draw";

}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
win(userChoice, computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
lose( userChoice, computerChoice);
    break;
    case "rr":
    case"pp":
    case "ss":
draw(userChoice, computerChoice);
    break;
    
    }
}


function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click',  function(){
        game("p");
    })
    scissors_div.addEventListener('click',  function(){
        game("s");
    })
}


main();    
