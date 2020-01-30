
let computerChoice
let buttonGroupElem = document.getElementById("button-group")
let resultFrameElem = document.getElementById("result-frame")
let resultHeaderElem = document.getElementById("result-header")
let gameFrameElemLeft = document.getElementById("game-frame-left")
let gameFrameElemRight = document.getElementById("game-frame-right")
let computerWins = 0
let playerWins = 0
let tieCounter = 0
let turnCounter = 0
let multiplayer = false
let player1Turn = true


// Tracks wins for player and computer

function drawWins() {
  document.getElementById("player-wins").textContent = `${playerWins}`
  document.getElementById("computer-wins").textContent = `${computerWins}`
  document.getElementById("game-ties").textContent = `${tieCounter}`
}

// Resets the wins counter

function winsReset() {
  playerWins = 0
  computerWins = 0
  tieCounter = 0
  resultFrameElem.textContent = "Score reset. Choose your weapon to play!"
  resultHeaderElem.style.backgroundColor = "grey"

  drawWins()
  drawGameFrame("", "")
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

function drawGameFrame(choice1, choice2) {

  if (multiplayer == false) {
    gameFrameElemLeft.textContent = `You chose: ${choice1}`
    gameFrameElemRight.textContent = `The computer chose: ${choice2}`
  }
  else {
    gameFrameElemLeft.textContent = `Player 1 chose: ${choice1}`
    gameFrameElemRight.textContent = `Player 2 chose: ${choice2}`
  }
}

// Runs through the single player game and displays results.

function play(playerChoice) {
  computerRoll()
  drawGameFrame(playerChoice, computerChoice)

  console.log(`Computer has chosen ${computerChoice}`)
  console.log(`You have chosen ${playerChoice}`)

  if (playerChoice == computerChoice) {
    resultFrameElem.textContent = "You have tied!"
    resultHeaderElem.style.backgroundColor = "yellow"
    tieCounter++
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
  drawWins()
}

// Plays a multiplayer version of the game.

function playMulti(player1Choice, player2Choice) {

  drawGameFrame(player1Choice, player2Choice)

  if (player1Choice == player2Choice) {
    resultFrameElem.textContent = "You have tied!"
    tieCounter++
  }
  else {
    switch (player1Choice) {
      case "rock":
        if (player2Choice == "paper") {
          resultFrameElem.textContent = "Player 2 Wins!"
          computerWins++
          break;
        }
        resultFrameElem.textContent = "Player 1 Wins!"
        playerWins++
        break;
      case "paper":
        if (player2Choice == "scissors") {
          resultFrameElem.textContent = "Player 2 Wins!"
          computerWins++
          break;
        }
        resultFrameElem.textContent = "Player 1 Wins!"
        playerWins++
        break;
      case "scissors":
        if (player2Choice == "rock") {
          resultFrameElem.textContent = "Player 2 Wins!"
          computerWins++
          break;
        }
        resultFrameElem.textContent = "Player 1 Wins!"
        playerWins++
        break;
    }
  }
}


// Setters for Single/Multi

function setSingle() {
  multiplayer = false
  console.log("Set to singleplayer")
}

function setMulti() {
  multiplayer = true
  console.log("Set to multiplayer")
}

// Setters for player choice

function setChoice(choice) {
  if (player1Turn == true && multiplayer == true) {
    var player1Choice = choice
    console.log(`Player 1 chose ${player1Choice}`)
    player1Turn = false
    turnCounter++
  }
  else if (player1Turn == false && multiplayer == true) {
    var player2Choice = choice
    console.log(`Player 2 chose ${player2Choice}`)
    player1Turn = true
    turnCounter++
  }
  if (multiplayer == true && turnCounter == 2) {
    playMulti(player1Choice, player2Choice)
    turnCounter = 0
  }
  if (multiplayer == false) {
    play(choice)
  }
}



// Single / Multiplayer selectors

document.getElementById("btnSinglePlayer").addEventListener("click", setSingle)
document.getElementById("btnMultiPlayer").addEventListener("click", setMulti)

