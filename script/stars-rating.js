const stars = document.querySelectorAll("img.star");
const divStars = document.getElementById("stars");
let rating = 0;

stars.forEach((star) => {
  star.addEventListener("mouseover", (event) => {
    const hoveredStarIndex = parseInt(event.target.getAttribute("data-index"));
    // Se l'indice della stella su cui si mette il cursore è superiore all'indice della stella già selezionata (se esistente), le stelle diventano piene fino al cursore
    if (hoveredStarIndex > rating - 1) {
      updateStars(hoveredStarIndex);
    }
  });

  star.addEventListener("click", (event) => {
    const clickedStarIndex = parseInt(event.target.getAttribute("data-index"));
    rating = clickedStarIndex + 1;
    updateStars(clickedStarIndex);
  });
});

// Se il cursore va fuori dal div con id "stars"
divStars.addEventListener("mouseout", function() {
  // Se non è stata selezionata alcuna stella, esse diventano tutte vuote (per effetto di updateStars(-1))
  // Se invece è stata già selezionata una stella, esse diventano piene solo fino alla stella selezionata
    updateStars(rating - 1);
});

function updateStars(hoveredStarIndex) {
  stars.forEach((star, index) => {
    if (index <= hoveredStarIndex) {
      star.src = "assets/images/star.svg";
    } else {
      star.src = "assets/images/emptyStar.svg";
    }
  });
}
