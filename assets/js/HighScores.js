// Declare Var
// Event listener to move data to index.html and back
// Event Listener to clear scores
// Function to compare scores and store in array
// Retreive highscores
// Log out highscores
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goHome = document.querySelector("#goHome");
goHome.addEventListener("click", function () {
    window.location.replace("./index.html");
  });
  clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });
//TA help to compare scores
function compare(a, b) {
        console.log("[A]:", a);
        console.log("[B]:", b);
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
    return 0;
  }
  var allScores = localStorage.getItem("allScores");

    allScores = JSON.parse(allScores);
   
    allScores.sort(compare);

    console.log(allScores);
  
  if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
      var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " - " + allScores[i].score;
        highScore.appendChild(createLi);
    }
  }
  