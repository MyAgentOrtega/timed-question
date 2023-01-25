//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

var startButton = document.querySelector(".startButton");

var secondsLeft = 60;

var timeEl = document.querySelector(".time");

var questionTitle = document.querySelector(".question");
var choicesDiv = document.querySelector(".choices");

var index = 0

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

// var array = [
//     1,
//     "string",
//     true,
//     [1,2,3,4],
//     {
//         num: 1,
//         datatype: "string",
//         boolean: true,
//         array: [1,2,3,4]
//     }
// ]

// array[0]//1
// array[1] //string
// array[2]//true
// array[3] // [1,2,3,4]
// array[3][2] //3
// array[4].datatype

// var object = {
//     num: 1,
//     datatype: "string",
//     boolean: true,
//     array: [1,2,3,4]
// }

// object.num //1
// object.datatype //string
// object.boolean //true
// object.array //[1,2,3,4]
function checkAnswers() {
  var chosenAnswer = this.textContent
  console.log(chosenAnswer)
  if(chosenAnswer == questions[index].correctAnswer){

  } 
  else {
    
  }

  if(questions.length-1>index){
    index++
    displayQuestion()
  }
}

function displayQuestion() {
questionTitle.textContent = questions[index].title

choicesDiv.textContent = ""
//for loop, loop through questions[index].choices
  for(var i =0; i < questions [index].choices.length; i++) {
    var choicebtn = document.createElement("button")
    choicebtn.textContent=questions[index].choices[i]
    choicesDiv.appendChild(choicebtn)

    choicebtn.onclick=checkAnswers
  }
//for each choice, create a button
//add text on each button
//append each button to choicesDiv

//create click event for the button
//check to see if answer is correct


//index++
//displayQuestion()
}

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left to complete quiz.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    }

  }, 1000);
}

startButton.addEventListener("click",function(){
    console.log("hello")
   setTime();
   displayQuestion()
})
