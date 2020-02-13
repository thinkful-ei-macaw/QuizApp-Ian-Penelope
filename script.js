'use strict';
//The starting screen should have a button that users can click to start the quiz.
//Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
//Users should be asked questions 1 after the other.
//Users should only be prompted with 1 question at a time.
//Users should not be able to skip questions.
//Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
//Upon submitting an answer, users should:
//receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
//be moved onto the next question (or interact with an element to move on).
//Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
//users should be able to start a new quiz.

const VIEWS = [
  
]

function renderPage() {
  //this function will render the page based on the data in VIEWS.
  console.log('renderPage working')
}

function generateQuestion() {
  //call on the data for a question in the VIEWS array and use it to generate HTML of each question including the question they are on out of the total
  console.log('generateQuestion working')
}

function answerQuestions() {
  // allow the user to answer a question with radio buttons and send the value selsected to the checkAnswer function
  console.log('answerQuestions working')
}

function checkAnswer() {
  //take the data from answer question and compare it with the correct answer corresponding in VIEWS and trigger either displayCorrect or displayWrong depending
  console.log('checkAnswer working')
}

function displayCorrect() {
  // display HTML for correct answer including a button to go to the next answer
  console.log('displayCorrect working');
}

function displayWrong() {
  //display the HTML for the wrong answer page including the correct answer in the designated spot and a button to go to the next answer
  console.log('displayWrong working')
}

function nextQuestion() {
  //listen to the buttons on displayWrong and displayRight pages and trigger generateQuestion
  console.log('nextQuestion working')
}

function displayScore() {
  //this function will be triggered when the questions have all been asked likely triggered by a counter reaching 10.  this will change the DOM to display the total score of the user and give them a prompt to begin a new quiz to try again.
}