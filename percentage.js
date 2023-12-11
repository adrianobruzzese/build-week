const showResultBox = () => {
  const scoreText = document.getElementsByClassName('score-text');
  scoreText = `Your score${userScore} out of ${questions.length}`;

  const progressValue = document.getElementsByClassName('progress-value');
  let progressStartValue = 0;
  let progressEndValue = (userScore / questions.lenght) * 100;
  let speed = 15;

  let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = ` ${progressStartValue} % `;
    if (progressStartValue === progressEndValue) {
      clearInterval(progress);
    }
  });
};
