import isYes from './isYes.js'
//elements from HTML needed to serve as constants 
const quizButton = document.getElementById('quiz-button');
const total = document.getElementById('points');


// button prompting for the name input
quizButton.addEventListener('click', () => {
    console.log ('button works');
    const name = prompt('What is your name?');
    const confirmation = confirm(`${name},would you like to take the quiz?`)
    if(confirmation === false) return;


 //question prompts and answer values   
const answer1 = prompt('Have I been to the place in the photo?'); 
const answer2 = prompt('Are there three countries listed?');      
const answer3 = prompt('Are museums listed under number 2?');     

// Points 
let count = 0;
if (isYes (answer1)) count += 1;
if (!isYes (answer2)) count += 1; 
if (isYes (answer3)) count += 1;

total.textContent= `${name}, you got ${count} correct`;
})

//