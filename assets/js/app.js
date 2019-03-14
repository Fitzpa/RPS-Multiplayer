// Initialize Firebase
var config = {
  apiKey: "AIzaSyAvdRvDE4dUghQ06R2LHx_rjto-6yqUZO4",
  authDomain: "rockpaperscissors-b417d.firebaseapp.com",
  databaseURL: "https://rockpaperscissors-b417d.firebaseio.com",
  projectId: "rockpaperscissors-b417d",
  storageBucket: "",
  messagingSenderId: "304884846112"
};
firebase.initializeApp(config);

var db = firebase.database();
var playersRef = db.ref("/players");
var winsRef = cd.ref("/players/allTimeWins");
var lossesRef = cd.ref("/players/allTimeLosses");
var chatRef = db.ref("/chat");
var connectedRef = db.ref(".info/connected");

let userOneScore = 0;
let userTwoScore = 0;
const userScore_span = document.getElementById("user-score");
const userTwoScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const login = document.querySelector(".loginButtonSpan");

var userOne = "";
var userTwo = "";
var userOneChoice = "";
var userTwoChoice = "";

function win() {

  
  userOneScore++;
  userScore_span.innerHTML = userOneScore;
  //playersRef.push(userOne);
  winsRef.push(user)
}
function lose() {

  userTwoScore++;
  userTwoScore_span.innerHTML = userTwoScore;
}
function draw() {
  console.log("It's a draw");
}

function game(userChoice) {
  if (userOneChoice === "") {
    userOneChoice = userChoice;
    console.log(userOne + " clicked on " + userChoice + "!");
  } else {
    userTwoChoice = userChoice;
    console.log(userTwo + " clicked on " + userChoice + "!");
  }

  switch (userOneChoice + userTwoChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
    win();
    break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
    lose();
    break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    draw();
    break;
  }
}

main();
function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
    
    
  });
  paper_div.addEventListener("click", function() {
    console.log("You clicked on paper!");
    
    game("paper");
  });
  scissors_div.addEventListener("click", function() {
    console.log("You clicked on scissors!");
   
    game("scissors");
  });
}

// Login in functions

$(document).on("click", "#loginButton", function(event) {
  if (userOne === "") {
    userOne = $("#player-name")
      .val()
      .trim();
      console.log("userOne : " + userOne);
      var p = $("<p>");
      p.append("Player One: " + userOne);
      $("#userOneChoice").append(p);

      if (playersRef)

      playersRef.push(userOne);
      winsRef.push(0)
  } else if (userTwo === "") {
    userTwo = $("#player-name")
    .val()
    .trim();
    var p = $("<p>");
    p.append("Player Two: " + userTwo);
    $("#userTwoChoice").append(p);
    playersRef.push(userTwo);
  } else {
    alert("There are already two players.");
  }
  $("#player-name").val("");
});

///// User Choice Selection
function userChoiceFunction() {
  userChoiceFunction;
}

/////////////////////////////////////////////////
