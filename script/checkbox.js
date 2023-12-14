const checkboxElement = document.getElementById("checkbox");
const submitButton = document.getElementById("proceed");
const pageForm = document.getElementsByTagName("form")[0];

pageForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

submitButton.addEventListener("click", function (event) {
  if (!checkboxElement.checked) {
    alert("Please agree to the terms and conditions!");
  } else {
    window.location.href = "benchmark.html";
  }
});
