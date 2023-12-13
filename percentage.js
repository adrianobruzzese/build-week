const giusto = localStorage.getItem('giusto');
const sbagliato = localStorage.getItem('sbagliato');

const showResultBox = () => {
  const scoreText = document.getElementsByClassName('score-text');
  scoreText = `Your score${giusto} out of ${questions.length}`;

  const progressValue = document.getElementsByClassName('progress-value');
  const circular = document.getElementsByClassName('bordo');
  let progressStartValue = 0;
  let progressEndValue = (giusto / questions.lenght) * 100;
  let speed = 15;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = ` ${progressStartValue} % `;
    let circularStyle = (circular.style.color = `#00FFFF ${
      progressStartValue * 3.6
    } `);
    if (progressStartValue === progressEndValue) {
      clearInterval(progress);
    }
  });
};

const showWrongResultBox = () => {
  const scoreWrongText = document.getElementsByClassName('scoreWrong-text');
  scoreWrongText = `Your score${sbagliato} out of ${questions.length}`;

  const progressWrongValues = document.getElementsByClassName(
    'progressWrong-values'
  );

  let progressStartValue = 0;
  let progressEndValue = (sbagliato / questions.lenght) * 100;
  let speeds = 15;

  let progressWrong = setInterval(() => {
    progressStartValue++;
    progressWrongValues.textContent = ` ${progressStart} % `;
    if (progressStartValue !== progressEndValue) {
      clearInterval(progressWrong);
    }
  });
};
console.log(showResultBox());
console.log(showWrongResultBox());
