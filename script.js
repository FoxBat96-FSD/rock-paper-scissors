
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) return "rock";
  if (randomNumber <= 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() { 
    const choice = prompt("Type Rock, Paper or Scissors"); 
    return choice.toLowerCase()}

console.log(getHumanChoice());