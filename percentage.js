const showResultBox = () => {
  const scoreText = document.getElementsByClassName('score-text');
  scoreText = `Your score${userScore} out of ${questions.length}`;

  const progressValue = document.getElementsByClassName('progress-value');
  const circular = document.getElementsByClassName('circular');
  let progressStartValue = 0;
  let progressEndValue = (userScore / questions.lenght) * 100;
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
console.log(showResultBox());
