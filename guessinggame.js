import './compareNumbers.js';
import compareNumbers from './compareNumbers.js';


const userInput = document.getElementById('the-number');
const guessButton = document.getElementById('guess-button');
const numberOfTries = document.getElementById('number-of-tries');
const userGuess = document.getElementById('user-guess');
const results = document.getElementById('results');

let correctNumber = 9;
let tries = 3;

guessButton.addEventListener('click', () => {
    tries--;
    numberOfTries.textContent = tries;
    const guess = Number(userInput.value)
    if (compareNumbers(guess, correctNumber) === 0) {
        results.textContent = 'You are correct!';
        guessButton.disabled = true;
    }
    if (compareNumbers(guess, correctNumber)===-1) {
        results.textContent = "Your guess is too low";

    }
    if (compareNumbers(guess, correctNumber)===1) {
        results.textContent = "Your guess is too high";
    }
    if (tries === 0 ){
        numberOfTries.textContent = "You lose. Try again";
        guessButton.disabled = true ;
    }

})
//guess or user imput 
const guess = Number(userInput.value); 

//number between 1 and 20
//var randomNumber = Math.floor(Math.random() *20);