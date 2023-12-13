const showResultBox = () => {
  const scoreText = document.getElementsByClassName('score-text');
  scoreText = `Your score${'.correct'} out of ${questions.length}`;

  const progressValue = document.getElementsByClassName('progress-value');
  const circular = document.getElementsByClassName('bordo');
  let progressStartValue = 0;
  let progressEndValue = (correct / questions.lenght) * 100;
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
  scoreWrongText = `Your score${wrong} out of ${questions.length}`;

  const progressWrongValues = document.getElementsByClassName(
    'progressWrong-values'
  );

  let progressStartValue = 0;
  let progressEndValue = (wrong / questions.lenght) * 100;
  let speeds = 15;

  let progressWrong = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = ` ${progressStart} % `;
    if (progressStartValue !== progressEndValue) {
      clearInterval(progressWrong);
    }
  });
};
console.log(showResultBox());
console.log(showWrongResultBox());
