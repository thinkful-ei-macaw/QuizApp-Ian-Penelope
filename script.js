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

const DATA = {
  questions : [
  {
    question: `What is the name of the mother of Carl Grimes?`,
    answers: [
      'Lori',
      'Carol',
      'Michonne',
      'Rosita'],
    id : cuid(),
    correctAnswer : 'Lori'
  },
  {
    question : 'How did the Merle escape the roof top?',
    answers: [
      'jump off the roof',
      'screams for help',
      'He does\'t die',
      'Cuts off his hand'],
    id : cuid(),
    correctAnswer : 'Cuts off his hand'
  },
  { question: 'In what season, did Morgan notice Rick Grimes was still Alive?',
    answers : [
    'Season 2',
    'Season 3',
    'Season 4',
    'Season 5'],
    id : cuid(),
    correctAnswer : 'Season 5'
  },
  { question:'Who did Lori had an affair with?',
    answers : [
      'Daryl',
      'Hershel',
      'Shane',
      'Merle'],
    id : cuid(),
    correctAnswer : 'Shane'
  },
  { question: 'When Carl got shot, who injured him?',
    answers : [
      'Otis',
      'Maggi' ,
      'Glenn',
      'T-dog'],
    id : cuid(),
    correctAnswer : 'Otis'
  },
  { question: 'How does Lori die?',
    answers : [
    'Drowning',
    'child-birth',
    'gun shot',
    'walkers attack.'],
    id : cuid(),
    correctAnswer : 'child-birth' 
  },
  {question: 'Who get left behind at the farm?',
    answers: [
    'Glenn',
    'Maggie',
    'Beth',
    'Andrea'
    ],
    id : cuid(),
    correctAnswer : 'Andrea'
  },
  { question: 'In what season did the group run into Terminus?',
  answers : [
    'Season 1',
    'Season 3',
    'Season 5',
    'Season 4'
  ],
    id : cuid(),
    correctAnswer : 'Season 5'
  },
  {question: 'How did the Governor kill Hershal?',
    answers: [
    'gun shot to the head',
    'Governor fed him to the Walkers',
    'Governor cuts his head off',
    'Governor threw him the pit'
  ],
    id : cuid(),
    correctAnswer : 'Governor cuts his head off'
  },
  {question: 'In what season did Rick renounce Leadership of the Group?',
    answers: [
    'Season 1',
    'Season 2',
    'Season 4',
    'Season 3'
    ],
    id : cuid(),
    correctAnswer : 'Season 4'
  },
],
  questionNumber: 5,
  score: 0,
  quizStart : true,

};


//render functions

function renderPage(component) {
  //this function will render the page based on the data in DATA.
    $('main').html(component);
  console.log('renderPage working');
}

// html generating functions
function startScreen() {
  //this will generate the start screen HTML
  let page =  `<header>
  <h1>Welcome to the Walking Dead</h1>
</header>
<p class="instructions">
  Click Begin Quiz To See How Much You Know About Characters From The Walking Dead
</p>
<input type="button" class="start-quiz js-start-button" value="begin">`;
renderPage(page)
}

function generateQuestion() {
  //call on the data for a question in the DATA array and use it to generate HTML of each question including the question they are on out of the total
  let i = DATA.questionNumber;
  let page =  `<p class = "question-box">Question 1</p>
  <form class = "question-box">
    <p>${DATA.questions[i].question}</p>
        <label for="answerA">${DATA.questions[i].answers[0]}<input type="radio" class="option" id = "answerA" name= "answers"></label>
      
        <label for="answerB">${DATA.questions[i].answers[1]}<input type="radio" class="option" id = "answerB" name = "answers"></label>
      
        <label for="answerC">${DATA.questions[i].answers[2]}<input type="radio" class="option" id = "answerC" name= "answers"></label>
      
        <label for="answerD">${DATA.questions[i].answers[3]}<input type="radio" class="option" id = "answerD" name = "answers" value="${DATA.questions[i].answers[3]}"><label>
  </form>
  <input type = "submit" id = "submit">`;
  renderPage(page)
  console.log('generateQuestion working');
}

function generateCorrect() {
  let page = `<header>
  <h1>
    Correct!!!
  </h1>
  <div>
  <p>
    You got the answer correct. Great job!
  </p>
  <p>youre score is currently 8 points</p>
  <p>you are on question 9/10</p>
</div>
</header>
</body>`
renderPage(page)
  // display HTML for correct answer including a button to go to the next answer
  console.log('generateCorrect working');
}

function generateWrong() {
  //display the HTML for the wrong answer page including the correct answer in the designated spot and a button to go to the next answer
  console.log('generateWrong working');
}

function displayScore() {
  //this function will be triggered when the questions have all been asked likely triggered by a counter reaching 10.  this will change the DOM to display the total score of the user and give them a prompt to begin a new quiz to try again.
}

// event handlers

function handleQuestionSubmit() {
  $(document).on('click','.option' ,function(e) {
    console.log('handleQuestionSubmit WORKING');
    let id = $(e.target).attr('id');
    let selectedAnswer = $(`label[for='${id}']`).text().trim();
    answerQuestions(selectedAnswer)
    }
  );
}


function nextQuestion() {
  DATA.questionNumber++;
  renderPage();
  console.log('nextQuestion working');
}

//misc functions
function checkAnswer(answer) {
  let i = DATA.questionNumber;
  let correct = DATA.questions[i].correctAnswer
  if (answer === correct) {
    return true
  } else {return false}
  console.log('checkAnswer working');
}  // event selector not working

function updateScore() {
  //add to the score
}


function answerQuestions(answer) {

  let result = checkAnswer(answer);
  console.log(answer)
  if (result === true) {
    generateCorrect();
  } else {
    generateWrong()
  }
  console.log('answerQuestions working'); 
  
}

function reset() {
  DATA.questionNumber = 0;
  DATA.quizStart = false;
}

function main() {
  startScreen();
  checkAnswer();
  answerQuestions();
  handleQuestionSubmit();
}
$(main);