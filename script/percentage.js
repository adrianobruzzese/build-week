const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
let giusto = localStorage.getItem("giuste");
console.log("g", giusto);
let sbagliato = localStorage.getItem("sbagliate");
console.log("s", sbagliato);
console.log(giusto);
const showResultBox = () => {
  let scoreText = document.getElementsByClassName("score-text")[0];
  let circularStyle = document.getElementsByClassName("bordo")[0];
  scoreText.innerText = giusto + "/" + questions.length;
  console.log(scoreText.innerText);
  const progressValue = document.getElementsByClassName("progress-value")[0];

  let progressStartValue = 0;
  let totDom = questions.length;
  console.log(totDom);
  let progressEndValue = (parseInt(giusto) / totDom) * 100;
  console.log(progressEndValue);
  let speed = 40;
  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.innerText = progressStartValue + "%";

    circularStyle.style.background = `conic-gradient(#00ffff ${
      progressEndValue * 3.6
    }deg,#d20094 0deg)`;
    if (progressStartValue === progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

  let scoreWrongText = document.getElementsByClassName("scoreWrong-text")[0];
  scoreWrongText.innerText = sbagliato + "/" + totDom;

  const progressWrongValues = document.getElementsByClassName(
    "progressWrong-values"
  )[0];

  let progressStartWrongValue = 0;
  let progressEndWrongValue = (parseInt(sbagliato) / totDom) * 100;

  let progressWrong = setInterval(() => {
    progressStartWrongValue++;
    progressWrongValues.innerText = progressStartWrongValue + "%";
    if (progressStartWrongValue === progressEndWrongValue) {
      clearInterval(progressWrong);
    }
  });
};

showResultBox();

const writeElements = () => {
  const head5 = document.getElementsByTagName("h5")[0];
  const head4 = document.getElementsByTagName("h4")[0];
  const paragraph = document.getElementsByTagName("p")[2];
  if (parseInt(giusto) > parseInt(sbagliato)) {
    head5.innerText = "Congratulations!";
    head4.innerText = "You passed the exam.";
    paragraph.innerHTML = ` <p>
    We'll send you the certificate <br />
    in few minutes.
  </p>
  <p>
    Check your email (including <br />
    promotions / spam folder)
  </p>`;
  } else {
    head5.innerText = "Not successful !";
    head4.innerText = "Try the oral exam.";
    paragraph.innerHTML = `<h2>
  You have not 
  passed the test.
</br>
 You could try  
  with an oral!
</h2>`;
  }
};
writeElements();
