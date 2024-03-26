const questions = [
    {
        ques: "What keyword is used to declare a variable in JavaScript?",
        opt1: "var",
        opt2: "let",
        opt3: "const",
        opt4: "all of the above",
        answer: "opt4"
    },
    {
        ques: "Which built-in method in JavaScript is used to schedule a function to be executed at a specific time?",
        opt1: "setTimeout()",
        opt2: "setInterval()",
        opt3: "setTimer()",
        opt4: "setImmediate()",
        answer: "opt1"
    },
    {
        ques: "In JavaScript, what is the purpose of the '=== ' operator?",
        opt1: "Assignment",
        opt2: "Equality without type conversion",
        opt3: "Strict equality with type conversion",
        opt4: "Logical AND operation",
        answer: "opt3"
    },
    {
        ques: "What is the purpose of the `typeof` operator in JavaScript?",
        opt1: "To return the data type of a variable",
        opt2: "To check if a variable is defined",
        opt3: "To perform type conversion",
        opt4: "To concatenate strings",
        answer: "opt1"
    },
    {
        ques: "Which of the following is a correct way to define a function in JavaScript?",
        opt1: "function: myFunction() {}",
        opt2: "def myFunction() {}",
        opt3: "function myFunction() {}",
        opt4: "void myFunction() {}",
        answer: "opt3"
    },
    {
        ques: "What does DOM stand for in the context of JavaScript?",
        opt1: "Document Object Model",
        opt2: "Display Oriented Model",
        opt3: "Data Object Management",
        opt4: "Dynamic Object Manipulation",
        answer: "opt1"
    },
    {
        ques: "What does AJAX stand for in JavaScript?",
        opt1: "Asynchronous JavaScript and XML",
        opt2: "Asynchronous JavaScript and XHTML",
        opt3: "Asynchronous JavaScript and JSON",
        opt4: "Asynchronous JavaScript and XMLHTTP",
        answer: "opt1"
    },
    {
        ques: "Which method is used to remove the last element from an array in JavaScript?",
        opt1: "pop()",
        opt2: "shift()",
        opt3: "splice()",
        opt4: "slice()",
        answer: "opt1"
    },
    {
        ques: "What does the `this` keyword refer to in JavaScript?",
        opt1: "It refers to the global object",
        opt2: "It refers to the parent object",
        opt3: "It refers to the current object",
        opt4: "It refers to the child object",
        answer: "opt3"
    },
    {
        ques: "Which event occurs when a user clicks on an HTML element?",
        opt1: "onhover",
        opt2: "ondoubleclick",
        opt3: "onmousedown",
        opt4: "onclick",
        answer: "opt4"
    }
];

document.querySelector("#start-btn").addEventListener('click', quiz);

var i = 0;
function quiz() {
    displayQuestion(i);
    updateTimerDisplay();

    document.querySelector("#timer").innerHTML="10 Minutes"
    document.querySelector("#next-btn").addEventListener('click', () => {
        marks(i)
        i++;
        if (i < questions.length) {
            displayQuestion(i);
            startTimer();
            
        } else {
            console.log("End of quiz");
            console.log(number)
        }
    });
}

function displayQuestion(i) {
    document.querySelector("#question").innerHTML = `Question ${i + 1}: ${questions[i].ques}`;
    document.querySelector("#label1").innerHTML = questions[i].opt1;
    document.querySelector("#label2").innerHTML = questions[i].opt2;
    document.querySelector("#label3").innerHTML = questions[i].opt3;
    document.querySelector("#label4").innerHTML = questions[i].opt4;
}

let number = 0;
var marks = (i) => {
    const selectedOption = document.querySelector('input[name="options"]:checked').id;
    const correctAnswer = questions[i].answer;
    if (selectedOption === correctAnswer) {
        number++;
    }
}

function timeEnded() {
    console.log("Ten minutes have passed!");

}
const tenMinutes = 10 * 60 * 1000; 
let timeRemaining = tenMinutes;
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / (60 * 1000));
    const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);
    document.querySelector("#timer").innerHTML = `Remaining time: ${minutes} minutes ${seconds} seconds`;

    timeRemaining -= 1000; 
    if (timeRemaining >= 0) {
        setTimeout(updateTimerDisplay, 1000); 
    } else {
        timeEnded(); 
    }
}

