//Spinner

console.log("=========== Spinner ===========");

// cautam si selectam elementul prin jQuery
const spinner = $(".spinner-container");

// cream o functie hideSpinner
function hideSpinner() {
  // prin metoda setTimeout ascundem spinner-ul dupa 2.5s cu efect de fade
  setTimeout(() => {
    spinner.fadeOut("500");
  }, 2500);
}

// cream o functie anonima in metoda ready de la jQuery.
// Aceasta metoda asteapta ca toate elementele din DOM sa se incarce in pagina.
// Dupa care ruleaza functia call-back din parametrul ei.
$(document).ready(() => {
  hideSpinner();
});
