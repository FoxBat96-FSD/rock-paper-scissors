function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) return "rock";
  if (randomNumber <= 0.66) return "paper";
  else return "scissors";
}

console.log(getComputerChoice());