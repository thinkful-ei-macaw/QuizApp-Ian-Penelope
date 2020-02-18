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
    question: `What is the name of Carl Grimes' mother?`,
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
    correctAnswer : 'Season 4'
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
  questionNumber: 0,
  score: 0,
  quizStart : true,

};


//render functions

function renderPage(component) {
  //this function will render the page based on the data in DATA.
    $('main').html(component);
}

// html generating functions
function startScreen() {
  //this will generate the start screen HTML
  let page =  `<header>
  <h1>Welcome to the Walking Dead</h1>
</header>
<p class="instructions">
  Click Begin Quiz To See How Much You Know About Characters From The Walking Dead

<input type="button" id="start-quiz" value="begin" class="button">
  </p>`;
renderPage(page)
}

function generateQuestion() {
  //call on the data for a question in the DATA array and use it to generate HTML of each question including the question they are on out of the total
  let i = DATA.questionNumber;
  let page =  `
  <header>
    <h1>Question ${DATA.questionNumber + 1}</h1> 
  </header>
  <form class = "question-box">
    <p>${DATA.questions[i].question}</p>
      <ul>
        <li class="question">
          <label for="answerA">${DATA.questions[i].answers[0]}<input type="radio" class="option" id = "answerA" name= "answers" value="${DATA.questions[i].answers[0]}"></label>
        </li>
        <li class="question">
          <label for="answerB">${DATA.questions[i].answers[1]}<input type="radio" class="option" id = "answerB" name = "answers" value="${DATA.questions[i].answers[1]}"></label>
        </li>
        <li class="question">
          <label for="answerC">${DATA.questions[i].answers[2]}<input type="radio" class="option" id = "answerC" name= "answers" value = "${DATA.questions[i].answers[2]}"></label>
        </li>
        <li class="question">
          <label for="answerD">${DATA.questions[i].answers[3]}<input type="radio" class="option" id = "answerD" name = "answers" value="${DATA.questions[i].answers[3]}"><label>
        </li>
        <input type = "submit" id = "submit" class="button">
        </form>`;
  renderPage(page);
}

function generateCorrect() {
  DATA.score++;
  let page = `<header>
  <h1 class="green">
    Correct!!!
  </h1>
  </header>
  <div class= 'box'>
  <p>
    You got the answer correct. Great job!
  </p>
  <p>youre score is currently ${DATA.score} points</p>
  <p>you are on question ${DATA.questionNumber + 1}/10</p>
  <input type = "button" id = "next-question" value = 'next' class="button">
</div>
`
renderPage(page)
  // display HTML for correct answer including a button to go to the next answer
}

function generateWrong() {
  //display the HTML for the wrong answer page including the correct answer in the designated spot and a button to go to the next answer
  let i = DATA.questionNumber
  let page = `<header>
  <h1 class = "red">Wrong Answer</h1>
  </header>
  <div class='box'>
    <p>
      Sorry that was the Wrong answer the correct answer is ${DATA.questions[i].correctAnswer}
    </p>
    <p>your score is currently ${DATA.score} points</p>
    <p>you are on question ${DATA.questionNumber + 1}/10</p>
    <input type = "button" id = "next-question" value = 'next' class="button">
  </div>
`
renderPage(page);
}

function displayScore() {
  //this function will be triggered when the questions have all been asked likely triggered by a counter reaching 10.  this will change the DOM to display the total score of the user and give them a prompt to begin a new quiz to try again.

  let page = `<header><h1>
  All done!
</h1></header>
<div class="instructions">
<p >you scored ${DATA.score} points</p>
<p>press the button start a new quiz</p>
<input type="button" id="restart" value="reset" class="button">
</div>`
renderPage(page)
}

// event handlers

function handleQuestionSubmit() {
  $(document).on('click','#submit' ,function(e) {
    event.preventDefault()
    let selectedAnswer = $("[name='answers']:checked").val();
    console.log(selectedAnswer)
    answerQuestions(selectedAnswer)
    }
  );
}
function handleStartQuiz() {
  $(document).on('click', '#start-quiz', function() {
    generateQuestion()
  })
}

function handleNextQuestion() {
  $(document).on('click', '#next-question', function(e) {
    DATA.questionNumber++;
    if (DATA.questionNumber > 9) {
      displayScore()
    } else {generateQuestion()}
  })
}

function handleReset() {
  
  $(document).on('click', '#restart', function(e) {
    reset();
    startScreen();
  })
}

//misc functions
function checkAnswer(answer) {
  let i = DATA.questionNumber;
  let correct = DATA.questions[i].correctAnswer
  if (answer === correct) {
    return true
  } else {return false};
}  // event selector not working

function updateScore() {
  //add to the score
  DATA.score++
}


function answerQuestions(answer) {

  let result = checkAnswer(answer);
  console.log(answer)
  if (result === true) {
    generateCorrect();
    updateScore
  } else {
    generateWrong()
  }
  
}

function reset() {
  DATA.questionNumber = 0;
  DATA.quizStart = false;
}

function main() {
  handleReset()
  handleNextQuestion()
  handleStartQuiz();
  startScreen();
  checkAnswer();
  handleQuestionSubmit();
}
$(main);