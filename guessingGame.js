function computerGuess() {
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


function userPlay() {
	while(true) {
		let choice = prompt("Select an option: ").toLowerCase().trim();
		if (choice === "rock" || choice === "paper" || choice === "scisor") {
			return choice;
		}
	}
}

