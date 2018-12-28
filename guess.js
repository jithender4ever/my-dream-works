let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);

const guessField = document.querySelector('#guessField');

const guessSubmit = document.querySelector('.guessSubmit');

guessSubmit.addEventListener('click', checkGuess);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let guessCount = 0;

let reset;

function checkGuess() {

  let guessValue = Number(guessField.value);

  if (guessCount === 0) {
      guesses.textContent = 'Previous guesses: ' + guessValue + ' ';
  } else if (guessCount === 9) {
      lastResult.textContent = '!!!GAME OVER!!!';
      lastResult.style.backgroundColor = 'red';
      lastResult.style.color = 'white';
      setGameOver();
  } else {
      guesses.textContent += guessValue + ' ';
  }

  if (guessValue === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';  
      lastResult.style.color = 'white';
      setGameOver();
  } else if (guessValue < randomNumber) {
      lastResult.textContent = 'Last guess was too low!';
      lastResult.style.color = 'black';
  }  else {
      lastResult.textContent = 'Last guess was too high!';
      lastResult.style.color = 'black';
  }

  console.log('lastResult', lastResult)   ;
  
  guessField.value = '';
  guessCount++;
  guessField.focus();

}

function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;

      reset = document.createElement('button');
      reset.textContent = 'Start new game';
      document.body.appendChild(reset);
      reset.addEventListener('click', resetGame);
}

function resetGame() {
      guessField.disabled = false;
      guessSubmit.disabled = false;

      document.body.removeChild(reset);
      guesses.textContent = '';
      lastResult.textContent = '';
      lastResult.style.backgroundColor = '';
}


