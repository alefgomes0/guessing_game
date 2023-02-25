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
	//Returns the result of computation as an array
	return [playerSelection, computerSelection, whoWon, phrase];
}


function findWinner() {
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
	let n = prompt("Enter number of rounds: ");
	n = +n;
	if (n <= 0 || n > 99) {
		alert("Too many/few rounds");
	}
	else if (n == undefined) {
		n = 1;
	}

	return Math.round(n);
}

function game() {
	let playerWinCount = 0;
	let computerWinCount = 0;
	let n = getRoundsNumber();

	for (let i = 0; i < n; i++) {
		let play = findWinner();
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

	if (playerWinCount > computerWinCount) {
		return "You won the game!";
	}
	else if (computerWinCount > playerWinCount) {
		return "You lost the game!";
	}
	else {
		return "It's a drawn";
	}
}
