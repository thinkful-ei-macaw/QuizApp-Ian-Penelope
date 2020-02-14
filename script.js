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
    question: 'What\'s Carl Grimes Mother\'s name?',
    a : 'Lori',
    b : 'Carol',
    c : 'Michonne',
    d : 'Rosita',
    questionNum : 1,
    id : cuid(),
    correctAnswer : 'Lori'
  },
  {
    question : 'How did the Merle escape the roof top?',
    a : 'jump off the roof',
    b : 'screams for help',
    c :  'He does\'t die',
    d  : 'Cuts off his hand',
    questionNum : 2,
    id : cuid(),
    correctAnswer : 'Cuts off his hand'
  },
  { question: 'In what season, did Morgan notice Rick Grimes was still Alive?',
    a: 'Season 2',
    b: 'Season 3',
    c: 'Season 4',
    d: 'Season 5',
    questionNum : 3,
    id : cuid(),
    correctAnswer : 'Season 5'
  },
  { question:'Who did Lori had an affair with?',
    a: 'Daryl',
    b: 'Hershel',
    c: 'Shane',
    d: 'Merle',
    questionNum : 4,
    id : cuid(),
    correctAnswer : 'Shane'
  },
  { question: 'When Carl got shot, who injured him?',
    a:'Otis',
    b:'Maggi' ,
    c: 'Glenn',
    d:'T-dog',
    questionNum : 5,
    id : cuid(),
    correctAnswer : 'Otis'
  },
  { question: 'How does Lori die?',
    a: 'Drowning',
    b: 'child-birth',
    c: 'gun shot',
    d: 'walkers attack.', 
    questionNum : 6,
    id : cuid(),
    correctAnswer : 'child-birth' 
  },
  {question: 'Who get left behind at the farm?',
    a:'Glenn',
    b: 'Maggie',
    c: 'Beth',
    d: 'Andrea',
    questionNum : 7,
    id : cuid(),
    correctAnswer : 'Andrea'
  },
  { question: 'In what season did the group run into Terminus?',
    a: 'Season 1',
    b:  'Season 3',
    c:  'Season 5',
    d:  'Season 4',
    questionNum : 8,
    id : cuid(),
    correctAnswer : 'Season 5'
  },
  {question: 'How did the Governor kill Hershal?',
    a: 'gun shot to the head',
    b: 'Governor fed him to the Walkers',
    c: 'Governor cuts his head off',
    d:  'Governor threw him the pit',
    questionNum : 9,
    id : cuid(),
    correctAnswer : 'Governor cuts his head off'
  },
  {question: 'In what season did Rick renounce Leadership of the Group?',
    a: 'Season 1',
    b: 'Season 2',
    c: 'Season 4',
    d: 'Season 3',
    questionNum : 10,
    id : cuid(),
    correctAnswer : 'Season 4'
  },
  {questionNumber: 8},
  {score: 0}

];



function renderPage() {
  //this function will render the page based on the data in DATA.
  console.log('renderPage working');
}

function startScreen() {
  //this will generate the start screen HTML
  $('body').html(`<header>
  <h1>Welcome to the Walking Dead</h1>
</header>
<p class="instructions">
  Click Begin Quiz To See How Much You Know About Characters From The Walking Dead
</p>
<input type="button" class="start-quiz js-start-button" value="begin">`);
}

function generateQuestion() {
  //call on the data for a question in the DATA array and use it to generate HTML of each question including the question they are on out of the total
  let i = DATA[10].questionNumber;
  $('body').html(`<p class = "question-box">Question 1</p>
  <div class = "question-box">
    <p>${DATA[i].question}</p>
      <input type="radio" class="option">
        <label for="answerA">${DATA[i].a} </label><br>
      <input type="radio" class="option">
        <label for="answerB">${DATA[i].b}</label><br>
      <input type="radio" class="option">
        <label for="answerC">${DATA[i].c}</form><label>
      <input type="radio" class="option">
        <label for="answerD">${DATA[i].d}</form><label>
  </div>`);
  console.log('generateQuestion working');
}

function answerQuestions() {
  // allow the user to answer a question with radio buttons and send the value selsected to the checkAnswer function
  console.log('answerQuestions working'); 
  $(document).on('click', '.option', function(event) {
    console.log('WORKING');
    let result = checkAnswer(event);
    if (result === true) {
      displayCorrect()
    } else {
      displayWrong()
    }
  });
}

function checkAnswer(event) {
  //take the data from answer question and compare it with the correct answer corresponding in DATA and trigger either displayCorrect or displayWrong depending
  let i = DATA[10].questionNumber;
  let ans = this.closest('label');
  console.log(ans);
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

function updateScore() {
  //add to the score
}
function main() {
  startScreen();
  nextQuestion();
  checkAnswer();
  answerQuestions();
}
$(main);