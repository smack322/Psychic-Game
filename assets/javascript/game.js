var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //set the alphabet for the computer

		var wins = 0; //sets the variable to increment for wins vs the computer
		var losses = 0; //sets the variable to increment for losses vs the computer
		var guessesLeft = 9; //initiailizes the number of guesses a user has - this will be decremented
		var currentGuesses = []; //set an empty array to store the different letters that are guessed

		var directionsText = document.getElementById("directions-text");
		console.log(directionsText);
		var winsText = document.getElementById("wins-text");
		console.log(winsText);
		var lossesText = document.getElementById("losses-text");
		var remainGuessText = document.getElementById("remaining-guess-text");
		var currentGuessText = document.getElementById("current-guess-text");
		reset();

		var computerGuess;
		function reset() {
			currentGuesses = [];
			guessesLeft = 9;
			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		}

		document.onkeyup = function (event) {

			var userGuess = event.key;



			if (userGuess === computerGuess) {
				wins++;
				console.log(currentGuesses);
				reset();

			}
			else if (userGuess !== computerGuess) {
				guessesLeft--;
				console.log("Guesses left: " + guessesLeft);
				if (guessesLeft === 0) {
					losses++;
					reset();
				}
			}


			currentGuesses.push(userGuess);

			winsText.textContent = "Wins: " + wins;
			lossesText.textContent = "Losses: " + losses;
			remainGuessText.textContent = "Guesses left: " + guessesLeft;
			currentGuessText.textContent = "Your guesses so far: " + currentGuesses;
		};