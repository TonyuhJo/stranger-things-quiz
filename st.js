//array containing all of the question & answer data
const STORE = [
    {
      question: 'In what year does season one of Stranger Things take place?',
      answers: [
        '1980',
        '1982',
        '1983',
        '1984'
        ],
      correctAnswer: '1983',
      icon: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2017-11-06-at-1-01-43-pm-1509995130.png?crop=1xw:1xh;center,top&resize=480:*',
      alt: `black background with white text that reads "November 6th, 1983 - Hawkins, Indiana"`
    },
    {
      question: 'What is Eleven\'s real name?',
      answers: [
        'Ellen',
        'Helen',
        'Jane',
        'Joyce'
        ],
        correctAnswer: 'Jane',
        icon: 'https://static.insider.com/image/59f25554a9e3fd4e008b45e9-750.jpg',
        alt: 'image of Eleven, a.k.a El, in the woods'
    },
    {
      question: 'Which member of the party gets lost in the Upside Down in season one?',
      answers: [
        'Lucas',
        'Dustin',
        'Will',
        'Mike'
        ],
        correctAnswer: 'Will',
        icon: 'https://i2.wp.com/www.usmagazine.com/wp-content/uploads/will-byers-noah-schnapp-stranger-things-e1f5e006-d90e-436b-b4cf-51ade6e46dfb.jpg?crop=121px%2C65px%2C1489px%2C835px&resize=1200%2C675&ssl=1',
        alt: 'image of Will Byers'
    },
    {
      question: 'What was the name of the game that Lucas, Dustin, Mike, and Will would play in Mike\'s basement?',
      answers: [
        'Dungeons & Dragons',
        `Dragon's Lair`,
        'Dig Dug',
        'Pac-Man'
        ],
      correctAnswer: 'Dungeons & Dragons',
      icon: 'https://geekandsundry.com/wp-content/uploads/2019/02/ST-starterftd.jpg',
      alt: 'Stranger Things themed Dungeons & Dragons starter set'
    },
    {
      question: 'What is the name of Max\'s step-brother?',
      answers: [
        'Steve',
        'Mike',
        'Billy',
        'Jonathan'
        ],
      correctAnswer: 'Billy',
      icon: 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1076,w_1916,x_133,y_0/f_auto,q_auto,w_1100/v1553289783/shape/mentalfloss/577785-netflix.jpg',
      alt: 'image of Billy Hargrove'
    },
    {
      question: 'In season three, Steve and Robin work at which ice cream shop?',
      answers: [
        'Baskin Robins',
        'Coldstone',
        'Hawkins Ice Cream',
        'Scoops Ahoy'
        ],
      correctAnswer: 'Scoops Ahoy',
      icon: 'https://amp.businessinsider.com/images/5d1f48f4a17d6c3902215102-750-562.jpg',
      alt: 'image of Robin and Steve working at Scoops Ahoy'
    },
    {
      question: 'What song was Will singing when he was first trapped in the Upside Down?',
      answers: [
      `Should I Stay or Should I Go?`,
      `Don't Stop Believing`,
      `Don't You (Forget About Me)`,
      `Here I Go Again`
      ],
      correctAnswer: `Should I Stay or Should I Go?`,
      icon: 'https://c-sf.smule.com/sf/s23/arr/95/19/9590921a-4eee-47ce-bb47-b3d0255502e8_512.jpg',
      alt: `album art for "Should I Stay or Should I Go" by The Clash`
    },
    {
      question: 'In the first season, Joyce communicates with Will using what?',
      answers: [
        'Christmas lights',
        'Candles',
        'Oujia board',
        'Psionic abilities'
      ],
      correctAnswer: 'Christmas lights',
      icon: 'https://i2.wp.com/michaeltroutt.com/wp-content/uploads/2017/07/lights.jpg?resize=739%2C493&ssl=1',
      alt: 'Joyce Byers standing in front of a wall that is covered in Christmas lights and has the alphabet painted on it'
    },
    {
      question: 'What name have the monsters been dubbed throughout the Stranger Things series?',
      answers: [
      'Demogorgon',
      'Shadow Monster',
      'Mind Flayer',
      'All of the above'
      ],
      correctAnswer: 'All of the above',
      icon: 'https://static3.cbrimages.com/wordpress/wp-content/uploads/2017/10/stranger-things-season-2-monster-2.jpg',
      alt: 'image of the Shadow Monster/Mind Flayer looming in the distance'
    },
    {
      question: `What is Hopper's first name?`,
      answers: [
        'Jim',
        'John',
        'Jack',
        'Bob'
    ],
    correctAnswer: 'Jim',
    icon: 'https://mondrian.mashable.com/uploads%252Fstory%252Fthumbnail%252F62012%252F4801584f-0613-42d0-80c8-8a6d2aeeb4c1.jpg%252F950x534.jpg?signature=9hsm2ZtQX4FTZ0aehcTdRZ0xSQk=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com',
    alt: 'image of Jim Hopper standing next to Eleven'
    }
];

//variables for the quesion number and score
let questionNumber = 0;
let score = 0;

/*generates the question and coordinating answer
options in a form*/
function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span>${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span>${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span>${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span>${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
    /*if all questions have been answered
    render the results and option to restart
    the quiz*/
} else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text(10)
  }
}

/*increases the question number
with each question*/
function changeQuestionNumber(){
  if (questionNumber < STORE.length) {
    questionNumber++;
  }
  $('.questionNumber').text(questionNumber+1);
}

//increases the score
function changeScore(){
  score ++;
}

/*renders first question of quiz
when start button is clicked
and removes the quiz start screen*/
function startQuiz(){
  $('.quizStart').on('click', '.startButton', function (event) {
    $('.quizStart').remove();
    $('.questionAnswerForm').css('display', 'block');
    $('.questionNumber').text(1);
});
}

//renders the question
function renderQuestion(){
  $('.questionAnswerForm').html(generateQuestion());
}

/*allows user to select their answer
and verifies whether answer is correct
or incorrect*/
function userSelectAnswer () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    let selected = $('input:checked');
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      selected.parent().addClass('correct');
      ifAnswerCorrect();
    } else {
      selected.parent().addClass('incorrect');
      ifAnswerIncorrect();
    }
  });
}

/*if answered correctly, user receives
correct answer feedback and score is updated*/
function ifAnswerCorrect(){
  userAnswerFeedbackCorrect();
  updateScore();
}

/*if answered incorrectly, user receives
incorrect answer feedback. Score is not updated*/
function ifAnswerIncorrect(){
  userAnswerFeedbackIncorrect();
}

/*generates feedback for when question is
answered correctly. Displays coordinating image,
feedback, and next button*/
function userAnswerFeedbackCorrect(){
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>That's right!</b></p><button type=button class="nextButton">Next</button></div>`);
}

/*generates feedback for when question is
answered incorrectly. Displays coordinating image,
feedback, and next button*/
function userAnswerFeedbackIncorrect(){
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  $('.questionAnswerForm').html(`<div class="correctFeedback"><div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}"/></div><p><b>Sorry!</b><br><br>The correct answer is <span>"${correctAnswer}"</span></p><button type=button class="nextButton">Next</button></div>`);
}

//updates the score
function updateScore(){
  changeScore();
  $('.score').text(score);
}

/*renders final quiz result based
on overall score*/
function renderResults(){
  if (score >= 7) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Are you from Hawkins?</h3><p><i>You got ${score} / 10</i></p><p>You're practically an expert on Stranger Things!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else if (score < 7 && score >= 5) {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>So close!</h3><p><i>You got ${score} / 10</i></p><p>Rewatch a season or two and try again!</p><button class="restartButton">Restart Quiz</button></div>`);
  } else {
    $('.questionAnswerForm').html(`<div class="results correctFeedback"><h3>Perhaps you were thinking of a different show.</h3><p><i>You got ${score} / 10</i></p><p>I'm prescribing you 3 days of binging the entire series. Trust me, it's for your own good.</p><button class="restartButton">Restart Quiz</button></div>`);
  }
}

/*renders the next question and
changes the question number*/
function renderNextQuestion(){
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userSelectAnswer();
  });
}

/*clicking restart button will reload
the quiz from start screen*/
function restartQuiz(){
  $('main').on('click', '.restartButton', function(event){
    location.reload();
  });
}

/*calls the main functions needed
to create quiz*/
function createQuiz(){
  startQuiz();
  renderQuestion();
  userSelectAnswer();
  renderNextQuestion();
}

//creates the quiz
$(createQuiz);