function getComputerChoice() {
	let computerPlay;
	let computerNumber = Math.random();

	if (computerNumber < 0.33) {
		computerPlay = "rock";
	}
	else if (computerNumber > 0.33 && computerNumber < 0.66) {
		computerPlay = "paper";
	}
	else {
		computerPlay = "scisor";
	}

	return computerPlay;
}


function getUserChoice() {
	while(true) {
		let choice = prompt("Select an option: ").toLowerCase().trim();
		if (choice === "rock" || choice === "paper" || choice === "scisor") {
			return choice;
		}
	}
}

function playRound(playerSelection, computerSelection) {
	let versus = [playerSelection, computerSelection];
	let phrase;
	let whoWon;

	if (playerSelection.length == computerSelection.length) {
		phrase = "It's a draw!";
	}
	else if (versus.includes("paper", "rock")) {
		phrase = "Paper beats rock!";
		whoWon = "paper";
	}
	else if (versus.includes("rock", "scisor")) {
		phrase = "Rock beats scisor!";
		whoWon = "rock";
	}
	else if (versus.includes("paper", "scisor")) {
		phrase = "Scisor beats paper!";
		whoWon = "scisor";
	}

	return [whoWon, phrase];
}


	function findWinner() {
	if (playerSelection == whoWon) {
		return `You won! ${phrase}`;
	}
	else if(computerSelection == whoWon) {
		return `You lost! ${phrase}`;
	}
	else {
		return "It's a drawn!";
	}
}
