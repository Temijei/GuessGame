const randomNumber = Math.floor(Math.random() * 15) + 1;
// console.log('Random Number', randomNumber);

let Guess = document.querySelector('.guess');
let UserScore = document.querySelector('.user-score').textContent;
// console.log(Guess.value);

// Default User score
console.log(UserScore);

function checkGuess() {
	let UserGuess = Guess.value;

	if (UserGuess == randomNumber) {
		feedback.textContent = 'You got it right!✔👏';
	} else if (UserGuess > randomNumber) {
		feedback.textContent =
			'Your guess is ' + UserGuess + ". That's too high.😢";
	} else if (UserGuess < randomNumber) {
		feedback.textContent =
			'Your guess is ' + UserGuess + ". That's too low.😢";
	}
}
