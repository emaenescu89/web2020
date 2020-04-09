 //functia pentru Preloder
let preload = $(".preload");
// cream o functie hidePreloader
function hidePreloader() {
  // prin metoda setTimeout ascundem spinner-ul dupa 4s cu efect de fade
  setTimeout(() => {
    preload.fadeOut("500");
  }, 4000);
}
// cream o functie anonima in metoda ready de la jQuery.
// Aceasta metoda asteapta ca toate elementele din DOM sa se incarce in pagina.
// Dupa care ruleaza functia call-back din parametrul ei.
$(document).ready(() => {
  hidePreloader();
});
// Sfarsit.

//Hangman Starts here!
// creare array cu raspunsuri

const programingLanguages =[
  "python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
];
    let answer = "";
    let maxWrong = 6;
    let mistakes = 0;
    let guessed = [];
    let wordStatus = null;

    // arrow function pt a genera un cuvant random din arrayul de mai sus.
    let randomWord = () => answer = programingLanguages[Math.floor(Math.random() * programingLanguages.length)];

    // creare butoane cu alfabetul 
    let generateButtons = () => {
        // alfabetul care este un string cu .split() se transforma in array ex : [a,b,c]
        let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => // cu .map() punem o functie pe fiecare element din array adica pe fiecare litera
          // cu backticks si interpolare creem butoanele dinamic in js iar cu ajutorul .map atasam cate un buton pt fiecare litera ca un for.
          `<button class="btn btn-lg btn-primary m-2" id='${letter}'
              onClick="handleGuess('${letter}')">${letter}</button>`).join(''); // cu .join() si '' gol scoatem virgula ce este pusa intre litere
      
        document.getElementById('keyboard').innerHTML = buttonsHTML; // adaugam la id butoanele dinamice
      }
     // functia pt alegerea literei de pe tastatura din pagina
    let handleGuess = (chosenLetter) => {
        // daca indexul literei alese este -1 adica nu se gaseste in array atunci valoarea este nula
        guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
        // luam id inserat dinamic in pagina si il setam ca sa nu mai poata fi click'uit a doua oara 
        document.getElementById(chosenLetter).setAttribute('disabled', true);
        if (answer.indexOf(chosenLetter) >= 0) { // daca indexul literei alese este >= face functiile. Cu conditia ca litera sa faca parte din raspuns
          guessedWord();
          checkIfGameWon();
        } 
        else if (answer.indexOf(chosenLetter) === -1) { // daca litera nu face parte din raspuns deci indexul va fi -1 atunci incrementam mistakes
          mistakes++;
          updateMistakes();// updateaza greseliile
          checkIfGameLost(); // verifica daca jocul este pierdut
          updateHangmanPicture(); // schimba poza in functie de mistakes
        }
    }
     // ghiceste cuvantul _ _ _ etc.
    let guessedWord = () => {
        // raspunsul este transform in array si map trece prin fiecare litera iar daca indexul este >= 0 atunci val literei este _ _ _  nu ex: a b c
      wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
      document.getElementById('wordSpotlight').innerHTML = wordStatus;
    }
     // verifica daca jocul este castigat
    let checkIfGameWon = () => {
        if (wordStatus === answer) { 
          let audio = new Audio('audio/op.mp3');
          audio.play();
          document.getElementById('keyboard').innerHTML = 'You Won!!!';
        }
    }
    // functia care updateaza greseliile
    let updateMistakes = () => document.getElementById('mistakes').innerHTML = mistakes;
    
    //verifica daca jocul este pierdut 
    let checkIfGameLost =() => {
        if (mistakes === maxWrong) { // daca nr greseli === cu nr setat ca maxim atunci afiseaza raspunsul si mesajul Ai pierdut!
          document.getElementById('wordSpotlight').innerHTML = `The answer was: ${answer}`; // afisam raspunsul correct in html.
          document.getElementById('keyboard').innerHTML = 'You Lost!!!'; // afisam mesajul in html
        }
    }
    document.getElementById('maxWrong').innerHTML = maxWrong;

      // schimba poza in functie de cate greseli sunt. Numele pozei este = cu numarul de greseli
    let updateHangmanPicture = () => document.getElementById('hangmanPic').src =`./img/${mistakes}.png`;

    // functia care reseteaza jocul.
    let reset =() => {
        mistakes = 0; // seteaza pe 0 
        guessed = []; // seteaza array gol
        document.getElementById('hangmanPic').src = './img/0.png'; // reseteaza poza de inceput
      
        randomWord(); // apelam functia care va genera un nou cuvant la intamplare(random)
        guessedWord(); // apelam functia ca sa resetam cuvantul ce trebuie ghicit sa fie _ _ _ _ si nu a b c
        updateMistakes(); // chiar daca am facut mai sus mistakes = 0 trebuie sa apelam functia ca sa se faca update in html
        generateButtons(); // generam butoanele din nou pentru a nu fi nici un buton disable: true.
    }


    randomWord(); // apelam functia care genereaza un cuvant la intamplare din Arrayul  programingLanguages.
    generateButtons(); // apelam functia pentru a genera dinamic butoanele facute in Bootstrap si a le insera in html.
    guessedWord(); // apelam functia pentru a creea cuvantul ce trebuie ghicit de form _ _ _ _ 