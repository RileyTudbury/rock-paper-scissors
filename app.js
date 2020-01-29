
let computerChoice
let buttonGroupElem = document.getElementById("button-group")
let resultFrameElem = document.getElementById("result-frame")
let gameFrameElemLeft = document.getElementById("game-frame-left")
let gameFrameElemRight = document.getElementById("game-frame-right")



// Runs through the game and displays results.

function play(playerChoice) {

  computerRoll()
  drawGameFrame(playerChoice, computerChoice)

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

function drawGameFrame(playerChoice, computerChoice) {

  gameFrameElemLeft.textContent = `You chose: ${playerChoice}`
  gameFrameElemRight.textContent = `The computer chose: ${computerChoice}`

}