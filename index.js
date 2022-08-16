const randomNumber = Math.floor(Math.random() * 15) + 1
    console.log('Random Number', randomNumber)

    function checkGuess() {
      let myGuess = guess.value
      if (myGuess === randomNumber) {
        feedback.textContent = "You got it right!✔👏"
      } else if (myGuess > randomNumber) {
        feedback.textContent = "Your guess is " + myGuess + ". That's too high.😢"
      } else if (myGuess < randomNumber) {
       feedback.textContent = "Your guess is " + myGuess + ". That's too low.😢"
     }
   }
   submitGuess.addEventListener('click', checkGuess)