let playerScore = document.querySelector(".player1");
playerScore.textContent = "";
playerScore.style.color = "green";

let computerScore = document.querySelector(".player2");
computerScore.textContent = "";
computerScore.style.color = "green";

let gameFinished = false;
let won = document.querySelector(".winner");
let roundLog = document.querySelector(".roundLog");

const reset = document.querySelector(".reset")
reset.addEventListener("click", () => {
	window.location.reload();
})

const buttons = document.querySelectorAll("#btn");
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			startGame(button.classList["value"]);
		})
	});


function getComputerChoice() {
	let computerNumber = Math.random() * 10;

	if (computerNumber < 3.333) {
		return "rock";
	}
	else if (computerNumber > 3.333 && computerNumber < 6.666) {
		return "paper";
	}
	else {
		return "scisor";
	}
}


function playRound(playerSelection) {
	let computerSelection = getComputerChoice();
	let versus = [playerSelection, computerSelection];
	let phrase;
	let whoWon;

	if (playerSelection.length == computerSelection.length) {
		phrase = "It's a draw!";
	}
	else if (versus.includes("paper") && versus.includes("rock")) {
		phrase = "Paper beats rock!";
		whoWon = "paper";
	}
	else if (versus.includes("rock") && versus.includes("scisor")) {
		phrase = "Rock beats scisor!";
		whoWon = "rock";
	}
	else if (versus.includes("paper") && versus.includes("scisor")) {
		phrase = "Scisor beats paper!";
		whoWon = "scisor";
	}
	//Returns the result of computation as an array
	return [playerSelection, computerSelection, whoWon, phrase];
}


function findRoundWinner(playerChoice) {
	//Use return value from playRound() to find winner
	//with array indexes
	let results = playRound(playerChoice);
	if (results[0] == results[2]) {
		return `You won! ${results[3]}`;
	}
	else if(results[1] == results[2]) {
		return `You lost! ${results[3]}`;
	}
	else {
		return "It's a draw!";
	}
}

function startGame(playerChoice) {
	for (let i = 0; i < 1; i++) {
		let play = findRoundWinner(playerChoice);
		roundLog.textContent = play;

		if (play.includes("won")) {
			playerScore.textContent += "O";
			roundLog.style.color = "green";
		}
		else if (play.includes("lost")) {
			computerScore.textContent += "O";
			roundLog.style.color = "red";
		}
		else {
			roundLog.style.color = "blue";
		}
	};
	checkWinner();
	disableButtons();
}

function checkWinner() {
	if (playerScore.textContent == "OOOOO") {
		won.style.color = "green";
		gameFinished = true;
		return won.textContent = "You won the game!"
	}
	else if (computerScore.textContent == "OOOOO") {
		won.style.color = "red";
		gameFinished = true;
		return won.textContent = "You lost the game!"
	}
}

function disableButtons() {
	if (gameFinished) {
		buttons.forEach((button) => {
			button.classList.add("btnDisabled")
		})
	} 
}