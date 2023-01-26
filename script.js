var startButton = document.querySelector(".startButton");
var secondsLeft = 60;
var timeEl = document.querySelector(".time");
var questionTitle = document.querySelector(".question");
var choicesDiv = document.querySelector(".choices");
var index = 0
var timerInterval
var submit =document.querySelector(".submit")
var initials=document.querySelector(".initials")
var input = document.querySelector(".input")
var score
var questions = [
    {
        title: "What is 1+1?",
        choices: [1,2,3,4],
        correctAnswer: 2
    },
    {
        title: "What is 1+2?",
        choices: [1,2,3,4],
        correctAnswer: 3
    },
    
    {
        title: "What is 1+3?",
        choices: [1,2,3,4],
        correctAnswer: 4

    }
    
]
function checkAnswers() {
  var chosenAnswer = this.textContent
  console.log(chosenAnswer)
  if(chosenAnswer != questions[index].correctAnswer){
    secondsLeft = secondsLeft-10

  } 

  if(questions.length-1>index){
    index++
    displayQuestion()
  } else {
    endgame()
  }
}

function displayQuestion() {
questionTitle.textContent = questions[index].title

choicesDiv.textContent = ""
  for(var i =0; i < questions [index].choices.length; i++) {
    var choicebtn = document.createElement("button")
    choicebtn.textContent=questions[index].choices[i]
    choicesDiv.appendChild(choicebtn)

    choicebtn.onclick=checkAnswers
  }
}

function setTime() {
   timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left to complete quiz.";

    if(secondsLeft <= 0) {
      endgame()
    }

  }, 1000);
}

function endgame() {
  input.classList.remove("hide");


clearInterval(timerInterval);
}


startButton.addEventListener("click",function(){
  setTime();
  displayQuestion()
})

submit.addEventListener("click", function(){
  var capture = initials.value
  console.log (capture)
  
  //grab time left as the score
  //store the data into local storage
  // score is tallied and initials are posted 
  
})