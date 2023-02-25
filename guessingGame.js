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


function getUserChoice() {
	while(true) {
		let choice = prompt("Select rock, paper or scisor: ").toLowerCase().trim();
		if (choice === "rock" || choice === "paper" || choice === "scisor") {
			return choice;
		}
	}
}

function playRound() {
	let playerSelection = getUserChoice();
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


function findRoundWinner() {
	//Use return value from playRound() to find winner
	//with array indexes
	let results = playRound();
	if (results[0] == results[2]) {
		return `You won! ${results[3]}`;
	}
	else if(results[1] == results[2]) {
		return `You lost! ${results[3]}`;
	}
	else {
		return "It's a drawn!";
	}
}


function getRoundsNumber() {
	let n = parseInt(prompt("Enter number of rounds: "));
	if (n <= 0 || n > 99) {
		alert("Too many/few rounds");
	}

	return n;
}

function game() {
	let playerWinCount = 0;
	let computerWinCount = 0;
	let n = getRoundsNumber();

	for (let i = 0; i < n; i++) {
		let play = findRoundWinner();
		console.log(play);

		if (play.includes("won")) {
			playerWinCount++;
			if (playerWinCount > n/2) {
				break;
			}
		}
		else if (play.includes("lost")) {
			computerWinCount++;
			if (computerWinCount > n/2) {
				break;
			}
		}
	}
	return declareWinner(playerWinCount, computerWinCount);
}


function declareWinner(player1Score, player2Score) {
	if (player1Score > player2Score) {
		return "You won the game!";
	}
	else if (player2Score > player1Score) {
		return "You lost the game!";
	}
	else {
		return "It's a drawn";
	}
}
