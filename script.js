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

const DATA = [
  {
    question: 'What's Carl Grimes Mother's name?',
    a : 'Lori',
    b : 'Carol',
    c : 'Michonne',
    d : 'Rosita'
    questionNum : 1
},
  {
    question : 'How did the Merle escape the roof top?'
    a : 'jump off the roof',
    b : 'screams for help'
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},

];
2.How did the Merle escape the roof top?
a.jump off the roof  
b.screams for help, 
c.he doesnt, 
d.cuts off his hand

3.In what season , did Morgan notice Rick Grimes was still alive?
a. Season 2
b.Season 3 
c.Season 4 
d.Season 5

4.Who did Lori had an affair with?
a. Daryl
b. Hershel
c. Shane
d. Merle

5. When Carl got shot, who injured him?
a.Otis
b.Maggie 
c.Glenn
d.T-dog

6. How does Lori die?
a. Drowning
b. child-birth
c. gun shot
d. walkers attack

7.Who get left behind at the farm?
a. Glenn
b. Maggie
c. Beth
d. Andrea

8. In what season did the group run into Terminus?
a. season 1
b.season 3
c. season 5
d. season 4

9. How did Hersel by the Governor?
a. gun shot to the head
b. Governor fed him to the Walkers
c. Governor cuts his head off
d. Governor threw him the pit 

10. In what season did Rick renounce as "Leader" of the Group?
a. Season 1
b. Season 2
c. Season 4
d. Season 3

function renderPage() {
  //this function will render the page based on the data in DATA.
  console.log('renderPage working');
}

function generateQuestion() {
  //call on the data for a question in the DATA array and use it to generate HTML of each question including the question they are on out of the total
  console.log('generateQuestion working');
}

function answerQuestions() {
  // allow the user to answer a question with radio buttons and send the value selsected to the checkAnswer function
  console.log('answerQuestions working'); 
  $(document).on('click', '.button')
}

function checkAnswer() {
  //take the data from answer question and compare it with the correct answer corresponding in DATA and trigger either displayCorrect or displayWrong depending
  console.log('checkAnswer working');
}

function displayCorrect() {
  // display HTML for correct answer including a button to go to the next answer
  console.log('displayCorrect working');
}

function displayWrong() {
  //display the HTML for the wrong answer page including the correct answer in the designated spot and a button to go to the next answer
  console.log('displayWrong working');
}

function nextQuestion() {
  //listen to the buttons on displayWrong and displayRight pages and trigger generateQuestion
  console.log('nextQuestion working');
}

function displayScore() {
  //this function will be triggered when the questions have all been asked likely triggered by a counter reaching 10.  this will change the DOM to display the total score of the user and give them a prompt to begin a new quiz to try again.
}
function main() {
  nextQuestion();
  checkAnswer();
}
$(main);