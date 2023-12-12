// Validazione del checkbox iniziale, da integrare nella pagina

const checkForm = function(form) {
    if(!form.terms.checked) {
      alert("Please indicate that you will answer the questions without external help!");
      form.terms.focus();
      return false;
    }
    return true;
  };