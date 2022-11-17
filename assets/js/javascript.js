// Create Varriables 
// Create Questions
// Vars for Penalty, Seconds, Score, Questions, Current clock time, and Unordered List
// Event Listeneres 
// Hold time limits
// Questions display, choices changes, check with correct answer when user clicks. 
// Check conditions are being met otherwise if/else
// Keep track of which questions are being asked
// Display messages
// Create VAR elements. setAttributes
// calculate time remainging and keep running down on screen decrementing for incorrect answers
// Initials Box for score recording
// link highscores page
// End of game messages
// Create user submit button
// Display Highscores for page

var questions = [
    {
      title:
        "When a user views a page containing a JavaScript program, which machine actually executes the script?",
      choices: [
        "The User's machine running a Web Browser",
        "The Web server",
        "A central machine deep within Netscapes corporate offices",
        "None of the above",
      ],
//Answer=A
      answer: "The User's Machine running a Web browser",
    },
    {
      title:
        "What are variables used for in JavaScript Programs?",
      choices: [
        "Varying randomly",
        "A, C, and D",
        "Causing high-school algebra flashbacks",
        "Storing numbers, dates, or other values",
      ],
//Answer=D
      answer: "Storing numbers, dates, or other values",
    },
    {
      title: "Which of the following cant be done with client-side JavaScript?",
      choices: [
        "Sending a forms contents by email",
        "Storing the forms contents to a database file on the server",
        "Validating a form",
        "None of the above",
      ],
//Answer=B
      answer:
        "Storing the forms contents to a database file on the server",
    },
    {
      title: "What should appear at the very end of your JavaScript? The <script LANGUAGE=”JavaScript”>tag",
      choices: [
        "The END statement",
        "The <script>",
        "The </script>",
        "Non of the above",
      ],
//Answer=C
      answer: "The </script>",
    },
    {
      title: "Which of the following are capabilities of functions in JavaScript?",
      choices: [
        "Return a value",
        "Accept parameters and Return a value",
        "Reject parameters",
        "Accept parameters",
      ],
//Answer=D
      answer:
        "Accept parameters",
    },
  ];

var score = 0;
var questionIndex = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var secondsLeft = 180;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");


timer.addEventListener("click", function () {

    var x = document.getElementById("startTime");
         if (x.style.display === "none") {
            x.style.display = "block";
     }  else {
             x.style.display = "none";
     }
        if (holdInterval === 0) {
            holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(holdInterval);
            quizCompleted();
            currentTime.textContent = "Out of Time!";
      }
    }, 1000);
  }
  render(questionIndex);
});
function render(questionIndex) {
        questionsDiv.innerHTML = "";
        ulCreate.innerHTML = "";

  for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
  }

        userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", compare);
  });
}
function compare(event) {
    var element = event.target;
        if (element.matches("li")) {
    var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent =
            "Correct! The answer was:  " + questions[questionIndex].answer;
    }   else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent =
            "Incorrect Selection, the answer is:  " + questions[questionIndex].answer;
    }
  }
questionIndex++;
        if (questionIndex >= questions.length) {
            quizCompleted();
            createDiv.textContent =
            "You Completed the Exam!" +
            " " +
            "You got  " +
            score +
            "/" +
            questions.length +
            " Correct!";
  }    else {
            render(questionIndex);
  }
        questionsDiv.appendChild(createDiv);
}
if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var createP2 = document.createElement("p");
        clearInterval(holdInterval);
    var calcScore = parseInt(timeRemaining) * parseInt(score);
        console.log(typeof timeRemaining);
        console.log(typeof score);
        createP.textContent = "Your final score is: " + calcScore;
        questionsDiv.appendChild(createP2);
  }
function quizCompleted() {
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";

  var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "Complete!";

    questionsDiv.appendChild(createH1);

  var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

  var createTitleLine = document.createElement("hr");
    createTitleLine.setAttribute("id", "titleline");

    questionsDiv.appendChild(createTitleLine);

  var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
    questionsDiv.appendChild(createLabel);

  var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.setAttribute("maxlength", "4");
    createInput.setAttribute("value", "ABC");
    createInput.setAttribute("style", "text-transform:uppercase");
    createInput.setAttribute("onkeypress","return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))"
  );
    createInput.setAttribute("onblur", "if (this.value == '') {this.value = 'AAA';}"
  );
  createInput.setAttribute(
    "onfocus",
    "if (this.value == 'ABC') {this.value = '';}"
  );
    createInput.textContent = "";
    questionsDiv.appendChild(createInput);
  var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";
    questionsDiv.appendChild(createSubmit);
    createSubmit.addEventListener("click", function () {
  var initials = createInput.value;
    if (initials === null) {
      console.log("Ninja Entry!");
    } else {
      var finalScore = {
        initials: initials,
        score: calcScore,
      };
        console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
        allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        window.location.replace("./highscores.html");
    }
  });
}
 