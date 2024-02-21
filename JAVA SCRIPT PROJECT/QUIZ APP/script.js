const questions = [
  {
    question: "Which is largest animal in the World?",
    answers: [
      { text:"Shark", correct:false},
      { text:"Blue whale", correct:true},
      { text:"Elephant", correct:false},
      { text:"Giraffe", correct:false},
    ]
  },
  {
    question: "Which is smallest continent in the World?",
    answers: [
      { text:"Asia", correct:false},
      { text:"Australia", correct:true},
      { text:"Arctic", correct:false},
      { text:"Africa", correct:false},
    ]
  },
  {
    question: "Which is largest desert in the World?",
    answers: [
      { text:"kalahari", correct:false},
      { text:"Gobi", correct:false},
      { text:"Sahara", correct:false},
      { text:"Antarctica", correct:true},
    ]
  },
  {
    question: "Which is smallest continent in the World?",
    answers: [
      { text:"Asia", correct:false},
      { text:"Australia", correct:true},
      { text:"Arctic", correct:false},
      { text:"Africa", correct:false},
    ]
  },
];

const questionElement = document.getElementById("question")
const answerbutton = document.getElementById("answer-buttons")