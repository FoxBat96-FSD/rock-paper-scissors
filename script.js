
function playGame() {
  // Step 4: Score variables initialized in playGame scope
  let humanScore = 0;
  let computerScore = 0;

  // Step 2: Computer choice helper function
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissors";
  }

  // Step 3: Human choice prompt helper function
  function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    return choice ? choice.toLowerCase() : "";
  }

  // Step 5: Single round logic function
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
      return;
    }

    const humanWins =
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  // Step 6: Play 5 rounds and declare final winner
  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}`);
  }

  console.log("=== Final Results ===");
  if (humanScore > computerScore) {
    console.log(`You won the game! ${humanScore} to ${computerScore}.`);
  } else if (computerScore > humanScore) {
    console.log(`Computer won the game! ${computerScore} to ${humanScore}.`);
  } else {
    console.log(`The game ended in a tie! ${humanScore} to ${computerScore}.`);
  }
}

// Call playGame to start the game
playGame();