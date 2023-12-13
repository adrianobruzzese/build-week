const checkboxElement = document.getElementById('checkbox');
const submitButton = document.getElementById('proceed');

submitButton.addEventListener('click', function(event) {
    if (!checkboxElement.checked) {
      alert('Please agree to the terms and conditions!');
    }
  });
