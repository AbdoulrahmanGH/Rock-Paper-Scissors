let rockbtn = document.querySelector("#rock");
let paperbtn = document.querySelector("#paper");
let scissorsbtn = document.querySelector("#scissors");
let userScoreDisplayed = document.getElementById("userScore");
let computerScoreDisplayed = document.getElementById("computerScore");
let drawScoreDisplayed = document.getElementById("drawScore");
let resultBox = document.getElementById("winnerOrLoser");
let yourChoiceH3 = document.getElementById("yourChoiceH3");
let computerChoiceH3 = document.getElementById("computerChoiceH3");

let userScore = 0;
let computerScore = 0;
let drawScore = 0;

function updateScores() {
  userScoreDisplayed.textContent = `You: ${userScore}`;
  computerScoreDisplayed.textContent = `Computer: ${computerScore}`;
  drawScoreDisplayed.textContent = `Draws: ${drawScore}`;
}

function getResultMessage(result) {
  switch (result) {
    case "user":
      resultBox.style.backgroundColor = "#39FF14";
      return "You Win!";
    case "computer":
      resultBox.style.backgroundColor = "red";
      return "You Lose!";
    case "draw":
      resultBox.style.backgroundColor = "yellow";
      return "It's a Draw!";
  }
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return choices[index];
}

function playRound(userChoice) {
  let computerChoice = getComputerChoice();
  displayChoices(userChoice, computerChoice);
  let result;
  if (userChoice === computerChoice) {
    result = "draw";
    drawScore++;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "user";
    userScore++;
  } else {
    result = "computer";
    computerScore++;
  }
  resultBox.style.display = "block";
  resultBox.textContent = getResultMessage(result);
  updateScores();
}

function displayChoices(userChoice, computerChoice) {
  yourChoiceH3.textContent = `You choose ${userChoice}`;
  computerChoiceH3.textContent = `Computer chooses ${computerChoice}`;
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  drawScore = 0;
  updateScores();
  resultBox.style.display = "none";
}

rockbtn.addEventListener("click", function () {
  playRound("rock");
});

paperbtn.addEventListener("click", function () {
  playRound("paper");
});

scissorsbtn.addEventListener("click", function () {
  playRound("scissors");
});

resetGame();
