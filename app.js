
let computerChoice
let buttonGroupElem = document.getElementById("button-group")
let resultFrameElem = document.getElementById("result-frame")



// Runs through the game and displays results.

function play(playerChoice) {
  computerRoll()

  console.log(`Computer has chosen ${computerChoice}`)
  console.log(`You have chosen ${playerChoice}`)

  if (playerChoice == computerChoice) {
    resultFrameElem.textContent = "You have tied!"
  }
  else {
    switch (playerChoice) {
      case "rock":
        if (computerChoice == "paper") {
          resultFrameElem.textContent = "Sorry, you lose."
          break;
        }
        resultFrameElem.textContent = "You won!"
        break;
      case "paper":
        if (computerChoice == "scissors") {
          resultFrameElem.textContent = "Sorry, you lose."
          break;
        }
        resultFrameElem.textContent = "You won!"
        break;
      case "scissors":
        if (computerChoice == "rock") {
          resultFrameElem.textContent = "Sorry, you lose."
          break;
        }
        resultFrameElem.textContent = "You won!"
        break;
    }
  }


}


// Allows the computer player to randomly choose between rock, paper, and scissors

function computerRoll() {

  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber == 0) {
    computerChoice = "rock"
  }
  else if (randomNumber == 1) {
    computerChoice = "paper"
  }
  else {
    computerChoice = "scissors"
  }

  return computerChoice
}