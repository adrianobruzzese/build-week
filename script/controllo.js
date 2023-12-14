const questions = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers: [
      'Central Process Unit',
      'Computer Personal Unit',
      'Central Processor Unit',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'The logo for Snapchat is a Bell.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question:
      'Pointers were not used in the original C programming language; they were added later on in C++.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    correct_answer: '.svg',
    incorrect_answers: ['.png', '.jpeg', '.gif'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers: [
      'Counter Strike: Source',
      'Corrective Style Sheet',
      'Computer Style Sheet',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'What is the code name for the mobile operating system Android 7.0?',
    correct_answer: 'Nougat',
    incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'On Twitter, what is the character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers: ['120', '160', '100'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'Linux was first created as an alternative to Windows XP.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'Which programming language shares its name with an island in Indonesia?',
    correct_answer: 'Java',
    incorrect_answers: ['Python', 'C', 'Jakarta'],
  },
];
let timer;
const num1 = [];
for (let i = 0; i <= questions.length - 1; i++) {
  num1.push(i)
}
const randomNumber = function () {
  const genNumber = Math.floor(Math.random() * num1.length)
  const genNumber1 = num1[genNumber]
  num1.splice(genNumber, 1)
  console.log('domanda :' + genNumber1)
  return genNumber1
}

let giuste = 0
let sbagliate = 0

const pageForm = document.getElementsByTagName('form')[0]

pageForm.addEventListener('submit', function (e) {
  e.preventDefault()
})

//crea bot altre risposte
const otherAnswers = function () {
  let k = randomNumber()

  const correct = [questions[k].correct_answer]
  const incorrect = questions[k].incorrect_answers

  console.log(correct)
  console.log(incorrect)
  const risposte = incorrect.concat(correct)

  risposte.sort(() => Math.random() - 0.5)
  console.log(risposte)
  const quesion = document.getElementById('question')

  let newQuestion = document.createElement('h1')

  const answersSpace = document.getElementsByTagName('form')

  let answersArray = questions[k].incorrect_answers
  const array = questions[k].incorrect_answers

  for (let i = 0; i < array.length + 1; i++) {
    let answers = document.createElement('button')
    answers.innerText = answersArray[i]
    answers.innerText = risposte[i]
    answers.classList.add('btn')
    answersSpace[0].appendChild(answers)
    newQuestion.innerText = questions[k].question

    quesion.appendChild(newQuestion)
    let button = document.getElementsByClassName('btn')
    console.log(button)
    answers.addEventListener('click', function (e) {
      let clickedAnswer = e.target.innerText

      if (clickedAnswer === questions[k].correct_answer) {
        //aumento del contatore

        if (contatoreDomande >= 10) {
          giuste++;

          cambioPagina();
        }
        giuste++;
        clearInterval(timer);
        clear(quesion, button);
        next();

        contatoreDomande++;
        contatore.innerText = contatoreDomande;
      } else {
        if (contatoreDomande >= 10) {
          sbagliate++;

          cambioPagina();
        }
        sbagliate++;
        clearInterval(timer);
        clear(quesion, button);
        next();

        contatoreDomande++;
        contatore.innerText = contatoreDomande;
      }
    });
  }
};

otherAnswers();

const cambioPagina = function () {
  localStorage.setItem("giuste", giuste);
  localStorage.setItem("sbagliate", sbagliate);
  console.log("Cambierai alla 10?!");
  window.location.href = "results.html";
};
const setTime = () => {
  timer = window.setInterval(function () {
    if (contatoreDomande >= 10) {
      sbagliate++;
      console.log(giuste);
      console.log(sbagliate);
      cambioPagina();
    }
    sbagliate++;
    contatoreDomande++;
    contatore.innerText = contatoreDomande;

    console.log(sbagliate);
    clear(quesion, button);
    otherAnswers();
  }, 59800);
};

next = function () {
  setTime();
  otherAnswers();
};
setTime();
