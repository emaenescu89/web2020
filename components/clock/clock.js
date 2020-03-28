//Clock

console.log("================ Clock =================");
// cautam si stocam elementele necesare din html printr-un selector
const clockContainer = document.querySelector("#clock-container");
const clockIcon = document.querySelector("#clock-icon");

//creem o functie showTime
function showTime() {
  // stocam in variabila time un string cu ora curenta obtinut din libraria moment.js
  const time = moment().format("HH:mm:ss");
  // orice e in elementul clockContainer va fi rescris.
  clockContainer.innerHTML = time;
  // trimitem functia ca parametru in metoda requestAnimationFrame de pe obiectul window.
  window.requestAnimationFrame(showTime);
}

// adaugam un event Listener pe elementul clockIcon
clockIcon.addEventListener("click", () => {
  // apelam functia showTime
  showTime();
  // pe elementul clockContainer comutam clasa shown [o adaugam daca nu exista si o eliminam daca exista]
  clockContainer.classList.toggle("shown");
});
