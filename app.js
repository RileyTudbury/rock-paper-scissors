
let computerChoice
let buttonGroupElem = document.getElementById("button-group")
let resultFrameElem = document.getElementById("result-frame")
let resultHeaderElem = document.getElementById("result-header")
let gameFrameElemLeft = document.getElementById("game-frame-left")
let gameFrameElemRight = document.getElementById("game-frame-right")
let playerWins = 0
let computerWins = 0

// Runs through the game and displays results.

function play(playerChoice) {
  computerRoll()
  drawGameFrame(playerChoice, computerChoice)
  drawWins()

  console.log(`Computer has chosen ${computerChoice}`)
  console.log(`You have chosen ${playerChoice}`)

  if (playerChoice == computerChoice) {
    resultFrameElem.textContent = "You have tied!"
    resultHeaderElem.style.backgroundColor = "yellow"
  }
  else {
    switch (playerChoice) {
      case "rock":
        if (computerChoice == "paper") {
          resultFrameElem.textContent = "Sorry, you lose."
          computerWins++
          resultHeaderElem.style.backgroundColor = "red"
          break;
        }
        resultFrameElem.textContent = "You won!"
        playerWins++
        resultHeaderElem.style.backgroundColor = "green"
        break;
      case "paper":
        if (computerChoice == "scissors") {
          resultFrameElem.textContent = "Sorry, you lose."
          computerWins++
          resultHeaderElem.style.backgroundColor = "red"
          break;
        }
        resultFrameElem.textContent = "You won!"
        playerWins++
        resultHeaderElem.style.backgroundColor = "green"
        break;
      case "scissors":
        if (computerChoice == "rock") {
          resultFrameElem.textContent = "Sorry, you lose."
          computerWins++
          resultHeaderElem.style.backgroundColor = "red"
          break;
        }
        resultFrameElem.textContent = "You won!"
        playerWins++
        resultHeaderElem.style.backgroundColor = "green"
        break;
    }
  }
}

// Tracks wins for player and computer

function drawWins() {
  document.getElementById("player-wins").textContent = `${playerWins}`
  document.getElementById("computer-wins").textContent = `${computerWins}`
}

// Resets the wins counter

function winsReset() {
  playerWins = 0
  computerWins = 0
  resultFrameElem.textContent = "Score reset. Choose your weapon to play!"
  resultHeaderElem.style.backgroundColor = "grey"

  drawWins()
  drawGameFrame()
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

// Draws the game frame showing each players' choices

function drawGameFrame(playerChoice, computerChoice) {
  gameFrameElemLeft.textContent = `You chose: ${playerChoice}`
  gameFrameElemRight.textContent = `The computer chose: ${computerChoice}`
}