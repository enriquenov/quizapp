var questionsArray = [
  {
    question: "What is 'mirror' in spanish?",
    answer: "espejo"
  },
  {
    question: "What is 'scissors' in spanish?",
    answer: "tijeras"
  },
  {
    question: "What is 'blue' in spanish?",
    answer: "azul"
  },
  {
    question: "What is 'chair' in spanish?",
    answer: "silla"
  },
  {
    question: "What is 'newspaper' in spanish?",
    answer: "periodico"
  },
  {
    question: "What is 'wall' in spanish?",
    answer: "pared"
  },
  {
    question: "What is 'bed' in spanish?",
    answer: "cama"
  },
  {
    question: "What is 'food' in spanish?",
    answer: "comida"
  },
  {
    question: "What is 'garbage' in spanish?",
    answer: "basura"
  },
  {
    question: "What is 'phone' in spanish?",
    answer: "telefono"
  }
];

var boxLeft = document.getElementById('boxLeft');
var boxRight = document.getElementById('boxRight');
var submit = document.createElement('button');

for (i = 0; i < questionsArray.length; i++) {
  // console.log(questionsArray[i]);

  var questionText = document.createElement('h4');
  var answerInput = document.createElement('input');

  boxLeft.appendChild(questionText);
  boxLeft.appendChild(answerInput);

  questionText.setAttribute('id', 'question' + [i]);
  answerInput.setAttribute('id', 'answer' + [i]);
  console.log(answerInput);

  var el = document.getElementById('question' + [i]);

  answerInput.className = 'form-control';
  console.log(questionText);

  el.textContent = questionsArray[i].question;

}

submit.textContent = "See Results";
submit.setAttribute('class', 'btn btn-primary btn-lg');

boxLeft.appendChild(submit);

var correct = document.createElement('h3');
var incorrect = document.createElement('h3');

boxRight.appendChild(correct);
boxRight.appendChild(incorrect);

correct.className = "correct";
incorrect.className = "incorrect";

correct.textContent = "Correct:"
incorrect.textContent = "Incorrect:"

// BUTTON ON CLICK EVENT
submit.addEventListener("click", function(){
    var correctScore = 0;
    var incorrectScore = 0;


    for (i = 0; i < questionsArray.length; i++) {
      console.log(i);
      var el2 = document.getElementById('answer' + [i]).value;
      console.log(el2);

    if (questionsArray[i].answer == el2) {
      // el.className = 'correct';
      correctScore++;
      // console.log("fuck yeah!");
    } else {
      // el.className = 'incorrect';
      incorrectScore++;
      // console.log("wrong!!!");
    }
  }
  correct.textContent = "Correct: " + correctScore;
  incorrect.textContent = "Incorrect: " + incorrectScore;
});
