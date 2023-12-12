const stars = document.querySelectorAll("img.star"); //target elementi con classe "star"
const divStars = document.getElementById("stars"); //target container con id stars
let rating = 0; //inizializzazione

stars.forEach((star) => {
  star.addEventListener("mouseover", (event) => {
    const hoveredStarIndex = parseInt(event.target.getAttribute("data-index"));
    // Se l'indice della stella su cui si mette il cursore è superiore all'indice della stella già selezionata (se esistente), le stelle diventano piene fino al cursore.
    if (hoveredStarIndex > rating - 1) {
      updateStars(hoveredStarIndex);
    }
  })     //Quando il mouse passa sopra una stella, ne controlla l'indice e aggiorna le stelle visualizzate se la stella su cui si trova il mouse ha un indice superiore alla valutazione corrente.

  star.addEventListener("click", (event) => {
    const clickedStarIndex = parseInt(event.target.getAttribute("data-index"));
    rating = clickedStarIndex + 1;
    updateStars(clickedStarIndex);
  });
});
// Quando si fa clic su una stella, viene impostata la valutazione sull'indice della stella cliccata + 1 (perché chiaramente parte da indice 0) e vengono aggiornate di conseguenza le stelle visualizzate.


divStars.addEventListener("mouseout", function() {
    updateStars(rating - 1);
});   // Se il cursore va fuori dal div con id "stars", richiama updateStars con il parametro rating - 1

function updateStars(hoveredStarIndex) {
  stars.forEach((star, index) => {
    if (index <= hoveredStarIndex) {
      star.src = "assets/images/star.svg";
    } else {
      star.src = "assets/images/emptyStar.svg";
    }
  });
}

//Aggiorniamo la rappresentazione visiva delle stelle in base al dato hoveredStarIndex. Itero attraverso ogni stella, cambiando l'origine dell'immagine in una stella piena o vuota, a seconda che l'indice della stella sia inferiore o uguale all'indice al momento del passaggio del mouse.
