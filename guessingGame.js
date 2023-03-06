let playerScore = document.querySelector(".player1");
playerScore.textContent = "";
playerScore.style.color = "green";

let computerScore = document.querySelector(".player2");
computerScore.textContent = "";
computerScore.style.color = "green";

let won = document.querySelector(".winner");


const buttons = document.querySelectorAll("#btn");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			startGame(button.classList["value"]);
		})
	});

let playerWinCount = 0;
let computerWinCount = 0;
const numberOfRounds = 5;

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
		console.log(play);

		if (play.includes("won")) {
			playerScore.textContent += "O";
		}
		else if (play.includes("lost")) {
			computerScore.textContent += "O";
		}
	};
	checkWinner();
}


function checkWinner() {
	if (playerScore.textContent == "OOOOO") {
		return won.textContent = "You won the game!"
	}
	else if (computerScore.textContent == "OOOOO") {
		return won.textContent = "You lost the game!";
	}
}