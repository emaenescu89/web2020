
// Preloader Quiz Start
let preloaderQuiz =document.querySelector('.preloader-quiz');
let scoreEl = document.getElementById('score');

let preload = () => {
  let blocks = document.querySelectorAll('.block');
  let interval = 0;
  scoreEl.style.display = 'none';
  blocks.forEach((block, i) => {
    setTimeout(() => {
       animate(block, i)
    }, interval);
    interval += 500;
  });

   function animate(block, index){
     let position = index;
     setInterval(() => {
       switch (position){
         case 0:
           block.style.top = '40px';
           position = 3;
           break;
         case 1:
           block.style.left = '40px';
           position = 0;
           break;
         case 2:
           block.style.top = '0px';
           position = 1;
           break; 
         case 3:
           block.style.left = '0px';
           position = 2;
           break; 
       }
     }, 1500);
   }
   let preloadText = document.querySelector('.preload-text');
   let dots = 1;
   setInterval(() => {
     switch (dots) {
       case 1:
         preloadText.textContent = '...Loading';
         dots++
         break;
       case 2:
            preloadText.textContent = '..Loading.';
            dots++
            break;
       case 3:
            preloadText.textContent = '.Loading..';
            dots++
            break;  
       case 4:
            preloadText.textContent = 'Loading...';
            dots++
            break;  
       case 5:
            preloadText.textContent = '.Loading..';
            dots++
            break; 
       case 6:
            preloadText.textContent = '..Loading.';
            dots = 1;
            break;        
     }
   }, 500);
}

preload(); 


function finishedLoading() {
 preloaderQuiz.style.opacity = 0;
  setTimeout(() => {
   preloaderQuiz.style.display = 'none';
   scoreEl.style.display = 'block';
  }, 500);
}

window.onload = function(){
  setTimeout(() => {
    finishedLoading()
  }, 5000);
}
// Preloader Quiz finish

// Quiz Starts Here
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const container = document.querySelector('.container');
const endButton = document.querySelector('#end-btn');

 let score = 0;


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body,correct )
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(correct){
      score++
      scoreEl.innerHTML = `Your score is ${score} !`;
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    // startButton.innerText = 'Restart'
    endButton.classList.remove('hide')
    setTimeout(() => {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
      endButton.classList.add('hide')
      score = 0;
      scoreEl.innerHTML = `Your score is ${score} !`;
    },3500)
    // startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'DOM este acronim pentru ..?',
    answers: [
      { text: 'Dom Perignon', correct: false },
      { text: 'Document Objects Models', correct: false },
      { text: 'Document Object Model', correct: true },
      { text: 'Document Optical Model', correct: false }
    ]
  },
  {
    question: 'Se inseamna HTTP ? ',
    answers: [
      { text: 'Hyper Title Transfer Protocol', correct: false },
      { text: 'Hyper Text Trnsport Protocol', correct: false },
      { text: 'Hyper Text Transfer Protocols', correct: false },
      { text: 'Hyper Text Transfer Protocol', correct: true }
    ]
  },
  {
    question: 'Care este modalitatea corecta de introducere JavaScript in pagina HTML?',
    answers: [
      { text: 'outline', correct: false },
      { text: 'inline', correct: true },
      { text: 'setline', correct: false },
      { text: 'textline', correct: false }
    ]
  },
  {
    question: 'Care este limbaj de programare de nivel inalt?',
    answers: [
        { text: 'C++', correct: false },
        { text: 'Assembly', correct: false },
        { text: 'JavaScript', correct: true },
        { text: 'C ', correct: false }
    ]
  },
  {
    question: 'Care este metoda corecta de comentare a codului?',
    answers: [
      { text: '/* /*', correct: false },
      { text: '/* */', correct: true },
      { text: '*/ /*', correct: false },
      { text: '*/ */', correct: false }
    ]
  },
  {
    question: 'Care este rolul variabilelor?',
    answers: [
        { text: 'Pentru a apela o functie', correct: false },
        { text: 'Pentru a varia codul', correct: false },
        { text: ' Pentru a stoca valori sau expresii', correct: true },
        { text: 'Pentru a modifica HTML', correct: false }
    ]
  },
  {
    question: 'Ce este o functie?',
    answers: [
      { text: 'Bloc de instructiuni folosit pentru executarea unor operatii', correct: true },
      { text: 'Bloc de variabile folosit pentru executarea unor operatii', correct: false },
      { text: 'Bloc de desen folosit pentru executarea unor operatii', correct: false },
      { text: 'Bloc de parametri folosit pentru executarea unor operatii', correct: false }
    ]
  },
  {
    question: 'Ce este While Loop?',
    answers: [
      { text: 'executa un bloc de cod atat timp cat nu este indeplinita conditia', correct: false },
      { text: 'executa un bloc de cod pana ajunge la numarul dorit', correct: false },
      { text: 'executa un bloc de cod atat timp cat este indeplinita conditia', correct: true },
      { text: 'executa maxin 3 linii de cod atat timp cat este indeplinita conditia', correct: false }
    ]
  },
  {
    question: "Avem Array'ul  let arr = ['Dog', 'Cat', 'Mouse'] Ce face arr[2] = 'Chinchilla';?",
    answers: [
      { text: 'adauga', correct: false },
      { text: 'sterge', correct: false },
      { text: 'modifica', correct: true },
      { text: 'concateneaza', correct: false }
    ]
  },
  {
    question: 'OOP este acronim pentru ..?',
    answers: [
      { text: 'Objects-Oriented Programming', correct: false },
      { text: 'Oriented-Object Programming', correct: false },
      { text: 'Object-Oriented Programs', correct: false },
      { text: 'Object-Oriented Programming', correct: true }
    ]
  },
  {
    question: 'Care e strategia de manipulare DOM?',
    answers: [
      { text: 'Gasire > Stocare > Manipulare', correct: true },
      { text: 'Gasire > Manipulare > Stocare', correct: false },
      { text: 'Manipulare > Stocare > Gasire', correct: false },
      { text: 'Toate raspunsuriile sunt corecte', correct: false }
    ]
  },
]